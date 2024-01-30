"use client";
import React, {useState} from "react";

export default function LoginForm () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try{
                const response = await fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        action: "login",
                        email,
                        password,
                    }),
                });
                const data = await response.json();
                console.log(data);

                if(response.ok){
                    console.log("Login successful",data);
                } else{
                    console.error("Login failed",data.error.message);
                }
            } catch (error){
            console.error("Login failed", error.message);
            }

        setEmail("");
        setPassword("");
    };

    return(
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="text-black border-2 border-rose-500" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="text-black border-2 border-rose-500" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button className="border-2 border-rose-500" type="submit">Login</button>
        </form>
    );
}