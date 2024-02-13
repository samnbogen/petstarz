"use client";
import { useState } from 'react';
import{ signIn} from "next-auth/react";

export default function SignUp(){

    const handleUserSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value.toLowerCase();
        const password = event.target.elements.password.value;
        const role = "user";
        onSubmit({ email, password, role});
    };
    
    const handleSupplierSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value.toLowerCase();
        const password = event.target.elements.password.value;
        const role = "supplier";
        onSubmit( {email, password, role});
    };
    


    const onSubmit = async (user) => {
        try{
            const response = await signIn("signup", {...user,
            redirect: false,
        });
        console.log(response);
        if(response?.ok){
            console.log("Sign up successful", response);
        } else{
            console.error("Sign up failed response", response.error);
        }
    } catch (error){
        console.error(error);
    };
};


    return(
    <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className='flex'>
                <form onSubmit={handleUserSubmit} className="bg-white p-8 rounded shadow-md mr-10">
                    <h2 className="text-2xl font-semibold mb-4">User Sign Up</h2>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                            <input 
                            className="w-full border rounded-md p-2"
                            required
                            name='email'
                            type="email" 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Password:</label>
                            <input 
                            className="w-full border rounded-md p-2"
                            required
                            type="password"
                            name='password'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button className=" text-black font-bold py-2 px-4 rounded mt-4 border border-black" type="submit"> User Register</button>
                        </div>
                </form>

                <form onSubmit={handleSupplierSubmit} className="bg-white p-8 rounded shadow-md items-center">
                    <h2 className="text-2xl font-semibold mb-4">Supplier Sign Up</h2>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                            <input 
                            className="w-full border rounded-md p-2"
                            required
                            type="text"
                            name='email'
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mt-4 mb-2">Password:</label>
                            <input 
                            className="w-full border rounded-md p-2"
                            required
                            type="password"
                            name='password'
                            />
                        </div>
                    <div className='flex justify-center'>
                        <button className=" text-black font-bold py-2 px-4 rounded mt-4 border border-black" type="submit">Supplier Register</button>
                    </div>
                </form> 
            </div>
        </div>
        {/* Link at the bottom */}
        <div className="text-center">
            <a href="/login">Already have an account? Log in</a>
        </div>
    </>
    );
}