"use client";

import { useState } from 'react';

export default function Form(){

    //instead of register make it sign up for both user and admin
    const [userAction, setUserAction] = useState("register");
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userRole, setUserRole] = useState("user");

    const [adminAction, setAdminAction] = useState("register");
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
        <div className='mx-20 '>
            <form onSubmit={handleUserSubmit}>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Email:</label>
                    <input 
                    className="text-black border-2 border-rose-500"
                    required
                    type="text"
                    value={userEmail} 
                    onChange={(e) => setUserEmail(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>password</label>
                    <input 
                    className="text-black border-2 border-rose-500"
                    required
                    type="password"
                    value={userPassword} 
                    onChange={(e) => setUserPassword(e.target.value)} 
                    />
                </div>
               {/* <div className="flex flex-col mb-10 w-1/2">
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
    </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Action</label>
                    <select value={userAction} onChange={(e) => setUserAction(e.target.value)} required>
                        <option value="login">Login</option>
                        <option value="register">Register</option>
                    </select>
                    
    </div> */}
                
                <button className="bg-blue-500 hover:bg-blue-700 text-black border-2 border-rose-500 font-bold py-2 px-4 rounded" type="submit"> User register</button>
            </form>

           <form onSubmit={handleAdminSubmit}>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Email:</label>
                    <input 
                    className="text-black border-2 border-rose-500"
                    required
                    type="text"
                    value={adminEmail} 
                    onChange={(e) => setAdminEmail(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>password</label>
                    <input 
                    className="text-black border-2 border-rose-500"
                    required
                    type="password"
                    value={adminPassword} 
                    onChange={(e) => setAdminPassword(e.target.value)} 
                    />
                </div>
              {/*<div className="flex flex-col mb-10 w-1/2">
                    <label>Role</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
</div> 
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Action</label>
                    <select value={adminAction} onChange={(e) => setAdminAction(e.target.value)} required>
                        <option value="login">Login</option>
                        <option value="register">Register</option>
                    </select> 
                    
</div>  */}
                <button className="bg-blue-500 hover:bg-blue-700 text-black border-2 border-rose-500 font-bold py-2 px-4 rounded" type="submit">Admin Register</button>
            </form>
        </div>
    );

}