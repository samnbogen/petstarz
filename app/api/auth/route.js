import bcrypt from 'bcrypt';
import clientPromise from '../../lib/mongodb';

const saltRounds = 10;

export async function POST(req) {
    const {email, password, action, role} = await req.json();
    console.log(req.body);
    const client = await clientPromise;
    const db = client.db("fosters");
    const collection = db.collection("users");

    //change it to if (action === "sign up") to register
    if(action === "register"){
        const hash = await bcrypt.hash(password, saltRounds);
        try{
            await collection.insertOne({email, password: hash,role});
            return new Response(JSON.stringify({success: true}), {status: 200});
        } catch (error){
            console.error("Error registering user", error);
            return new Response(JSON.stringify({error: "Failed to register user"}), {status: 500});
        }
    } else if (action === "login"){
        const user = await collection.findOne({email});

        if(!user){
            return new Response(JSON.stringify({message: "User not found"}), {status: 401});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch){
            return new Response(JSON.stringify({success: true, role: user.role}), {status: 200});
        } else{
            return new Response(JSON.stringify({error: "Incorrect password"}), {status: 401});
        }
    } else{
        return new Response(JSON.stringify({error: "Invalid action"}), {status: 400});
    }
}