// Import the necessary modules
"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
//import {useHistory} from "react-router-dom";
import Link from "next/link";

// Component definition
export default function Page() {
  // Define component state
  const [credentials, setCredentials] = useState({ email: "", password: ""});
  const [auth, setAuth] = useState(false);
  const [message, setErrorMessage] = useState("");
  //const history = useHistory();

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
      setErrorMessage(response.error);
      setTimeout(() => setErrorMessage(""), 5000);
      console.error("Login failed", response.error);
    }
  };

    useEffect(() => {
      if (session) {
        console.log("Login page page successful");
        //history.push('/');
        setAuth(true);

      } else {
        console.error("Login failed");
      }
    }, [session]);

    if(status === "loading"){
      return <div>Loading...</div>
    } else if (auth === true) {
      return(
        <div className="flex flex-col items-center justify-center bg-gray-100 ">
            <h1>Welcome you're logged in!</h1>
            <a href="/">Click here to go to main page</a>
            <button className="border-2 border-rose-500" onClick={signOut}>Log out</button>
        </div>
      )
    } else {
      //console.error("Login failed", response.error);
      return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md m-10">
            <h1 className="text-3xl font-bold mb-4">Log In</h1>
            <form onSubmit={handleLogin} className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-800 font-semibold">Email</label>
              <input type="email" id="email" name="email" className="text-black border-2 border-rose-500 w-full rounded-md py-2 px-3" value={credentials.email} onChange={handleChanges} />
              <br/>
              <label htmlFor="password" className="text-gray-800 font-semibold">Password</label>
              <input type="password" id="password" name="password" className="text-black border-2 border-rose-500 w-full rounded-md py-2 px-3" value={credentials.password} onChange={handleChanges} />
              <br/>
              {message && <p className="text-red text-center">{message}</p>}
              <button className="self-center text-black font-bold py-2 px-4 rounded mt-2 border border-black" type="submit">Login</button>
              <div>
                <Link href="/tab/signup" className="text-center block mt-4 font-semibold">Don&apos;t have an account? Sign up here</Link>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }




