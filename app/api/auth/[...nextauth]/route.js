import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt";

const authOptions = {
    providers: [
        CredentialsProvider({
            id: "login",
            name: "Login",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                role: { label: "Role", type: "text" }
            },

            async authorize(credentials) {
                try{
                    const client = await clientPromise;
                    const db = client.db("fosters");
                    const collection =  db.collection("users");
                    const existingUser = await collection.findOne({ email: credentials.email });
                    

                    if (existingUser && (await compare(credentials.password, existingUser.password))) {
                        return existingUser;
                    } else {
                        throw new Error("Invalid email or password");
                    }
                } catch (error){
                    throw new Error("Authentication failed");
                }
            },
        }),

        CredentialsProvider({
            id: "signup",
            name: "Sign Up",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                role: { label: "Role", type: "text" }
            },
            

            async authorize(credentials) {
                try{
                    const client = await clientPromise;
                    const db = client.db("fosters");
                    const collection = db.collection("users");
                    const existingUser = await collection.findOne({ email: credentials.email });
                    console.log("existing role",existingUser); 
                    console.log(credentials.role);


                    if (existingUser) { 
                        throw new Error("User already exists");
                    } else {
                        const hashedPassword = await hash(credentials.password, 10);
                        const newUser = await collection.insertOne({ email: credentials.email, password: hashedPassword, role: credentials.role});
                        return newUser;
                    }
                } catch (error){
                    console.error("Sign up failed next auth", error);
                    throw new Error("Sign up failed next auth");
                }
            },
        }),
    ],

    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.email = user.email; // Include email
            }
            return token;
        },
        async session({session, token}) {
            session.user.id = token.id;
            session.user.role = token.role;
            session.user.email = token.email; // Include email
            return session;
        },
    },

    adapter: MongoDBAdapter(clientPromise),
        jwt: {
            secret: process.env.NEXTAUTH_SECRET,
            maxAge: 30 * 24 * 60 * 60, // 30 days
        },
        session : {
            strategy: "jwt",
        },
        pages: {
            signIn: "/login",
        },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}