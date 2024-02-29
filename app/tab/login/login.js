// Import the necessary modules
"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

// Component definition
export default function Page() {
  // Define component state
  const [credentials, setCredentials] = useState({ email: "", password: ""});
  const [auth, setAuth] = useState(false);

  // Use the useSession hook to get session data
  const { data: session, status } = useSession();

  // Event handler for form changes
  const handleChanges = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Event handler for login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await signIn("login", {
      redirect: false,
      email: credentials.email.toLowerCase(),
      password: credentials.password,
    });

    if(response.error){
      console.error("Login failed", response.error);
    }
  };

    useEffect(() => {
      if (session) {
        console.log("Login page page successful");
        setAuth(true);

      } else {
        console.error("Login failed");
      }
    }, [session]);

    if(status === "loading"){
      return <div>Loading...</div>
    } else if (auth === true) {
      return(
        <div>
            <h1>Welcome you're logged in!</h1>
            <a href="/">Click here to go to main page</a>
            <button className="border-2 border-rose-500" onClick={signOut}>Log out</button>
        </div>
      )
    } else {
      //console.error("Login failed", response.error);
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>
            <form onSubmit={handleLogin} className="flex flex-col space-y-4">
              <label htmlFor="email" className="text-gray-800 font-semibold">Email</label>
              <input type="email" id="email" name="email" className="text-black border-2 border-rose-500 w-full rounded-md py-2 px-3" value={credentials.email} onChange={handleChanges} />
              <br/>
              <label htmlFor="password" className="text-gray-800 font-semibold">Password</label>
              <input type="password" id="password" name="password" className="text-black border-2 border-rose-500 w-full rounded-md py-2 px-3" value={credentials.password} onChange={handleChanges} />
              <br/>
              <button className="self-center text-black font-bold py-2 px-4 rounded mt-4 border border-black" type="submit">Login</button>
            </form>
          </div>
          <a href="./signup" className="text-center block mt-4 text-rose-500 font-semibold">Don't have an account? Sign up here</a>
        </div>
      );
    }
  }




