"use client";

import { useState } from 'react';

export default function Form(){

    const [userAction, setUserAction] = useState("sign up");
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRole, setUserRole] = useState("user");

    const [adminAction, setAdminAction] = useState("sign up");
    const [adminPassword, setAdminPassword] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminRole, setAdminRole] = useState("admin");
   
    //if i want to connect/send to the database it had to be register
    //if i want to check if the user excites in the database it had to be login
    const handleAdminSubmit = async (e) => {
        e.preventDefault();
    
        const application = {
          action: adminAction,
          password: adminPassword,   
          email: adminEmail,
          role: adminRole,

        };

        //to make sure it is working
        console.log(application);
        setAdminRole("admin");
    
    
        // Send a POST request to the server-side function
        //const response = await fetch("http://localhost:3000/api", {  
        const response = await fetch("/api/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(application),
        });
    
        if (response.ok) {
            console.log('Data saved successfully');
        } else {
            console.error('Error saving data');
        }

        setAdminEmail("");
        setAdminPassword("");

    };    

    const handleUserSubmit = async (e) => {
        e.preventDefault();
    
        const application = {
          action: userAction,
          password: userPassword,   
          email: userEmail,
          role: userRole,

        };

        //to make sure it is working
        console.log(application);
        setUserRole("user");
    
        // Send a POST request to the server-side function
        //const response = await fetch("http://localhost:3000/api", {  
        const response = await fetch("/api/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(application),
        });
    
        if (response.ok) {
            console.log('Data saved successfully');
        } else {
            console.error('Error saving data');
        }

        setUserEmail("");
        setUserPassword("");
    };    


    return(
    <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className='flex'>
                <form onSubmit={handleUserSubmit} className="bg-white p-8 rounded shadow-md mr-10">
                    <h2 className="text-2xl font-semibold mb-4">User Sign Up</h2>
                    
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input 
                        className="w-full border rounded-md p-2"
                        required
                        type="text"
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)} 
                        />

                        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Password:</label>
                        <input 
                        className="w-full border rounded-md p-2"
                        required
                        type="password"
                        value={userPassword} 
                        onChange={(e) => setUserPassword(e.target.value)} 
                        />
                    <button className=" text-black font-bold py-2 px-4 rounded mt-4 border border-black" type="submit"> User register</button>
                </form>

                <form onSubmit={handleAdminSubmit} className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Admin Sign Up</h2>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input 
                        className="w-full border rounded-md p-2"
                        required
                        type="text"
                        value={adminEmail} 
                        onChange={(e) => setAdminEmail(e.target.value)} 
                        />
                    
                        <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Password:</label>
                        <input 
                        className="w-full border rounded-md p-2"
                        required
                        type="password"
                        value={adminPassword} 
                        onChange={(e) => setAdminPassword(e.target.value)} 
                        />
                    <button className=" text-black font-bold py-2 px-4 rounded mt-4 border border-black" type="submit">Admin Register</button>
                </form>

                
            </div>
            
        </div>

        <div className='flex justify-between'>
                    <button>
                        {/* change to link*/}
                        <a href="/apply/login" className="text-black font-bold py-2 px-4 rounded mt-4 border border-black">Login</a>
                    </button>
                </div>
    </>
    );

}