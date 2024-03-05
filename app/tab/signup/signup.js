"use client";
import { useState } from 'react';
import{ signIn} from "next-auth/react";
import Link from 'next/link';

export default function SignUp(){

    const [message, setErrorMessage] = useState("");
    const [passwordCheckList, setPasswordCheckList] = useState({
        minLenght: false,
        upperCase: false,
        lowerCase: false,
        number: false,
        specialChar: false,
    });

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
        onSubmit({email, password, role});
    };
    
    const checkPassword = (password) => {
        const minLenght = password.length >= 8;
        const upperCase = /[A-Z]/.test(password);
        const lowerCase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
        setPasswordCheckList({
            minLenght,
            upperCase,
            lowerCase,
            number,
            specialChar,
        });
    };


    const onSubmit = async (user) => {
        try{
            const response = await signIn("signup", {...user,
            redirect: false,
        });
        if(response?.ok){
            console.log("Sign up successful", response);
        } else {
            //if(response?.error === "User already exists"){
            setErrorMessage(response.error);
            console.error("Sign up failed", response);
            //}
        }

    } catch (error){
        console.error(error);
        setErrorMessage("Sign up failed");
    };
};


    return(
    <>
        
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className='flex mr-50 flex-grow h-50 w-full items-center justify-center'> 
                <form onSubmit={handleUserSubmit} className="bg-white p-8 rounded shadow-md mr-5 h-50 w-1/2 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">User <span className='text-green'>Sign Up</span></h2>
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
                            onChange={(e) => checkPassword(e.target.value)}
                            />
                        </div>
                        <div className='text-left mt-2'>
                            <ul className='list-disc list-inside'>
                                <li className={passwordCheckList.minLenght ? "text-green" : "text-red"}>Minimum 8 characters</li>
                                <li className={passwordCheckList.upperCase ? "text-green" : "text-red"}>At least one uppercase letter</li>
                                <li className={passwordCheckList.lowerCase ? "text-green" : "text-red"}>At least one lowercase letter</li>
                                <li className={passwordCheckList.number ? "text-green" : "text-red"}>At least one number</li>
                                <li className={passwordCheckList.specialChar ? "text-green" : "text-red"}>At least one special character</li>
                                {/* Error message */}
                                {message && <p className="text-red text-center">{message}</p>}
                            </ul>
                        </div>
                        <div className='flex justify-center'>
                            <button className=" text-white font-bold py-2 px-4 rounded-full mt-4 bg-green" type="submit"> User Sign Up</button>
                        </div>
                </form>

                <form onSubmit={handleSupplierSubmit} className="bg-white p-8 rounded shadow-md h-50 w-1/2 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Supplier <span className='text-green'>Sign Up</span></h2>
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
                            onChange={(e) => checkPassword(e.target.value)}
                            />
                        </div>
                        <div className='text-left mt-2'>
                            <ul className='list-disc list-inside'>
                                <li className={passwordCheckList.minLenght ? "text-green" : "text-red"}>Minimum 8 characters</li>
                                <li className={passwordCheckList.upperCase ? "text-green" : "text-red"}>At least one uppercase letter</li>
                                <li className={passwordCheckList.lowerCase ? "text-green" : "text-red"}>At least one lowercase letter</li>
                                <li className={passwordCheckList.number ? "text-green" : "text-red"}>At least one number</li>
                                <li className={passwordCheckList.specialChar ? "text-green" : "text-red"}>At least one special character</li>
                            </ul>
                        </div>
                    <div className='flex justify-center'>
                        <button className="text-white font-bold py-2 px-4 rounded-full mt-4 bg-green" type="submit">Supplier Sign Up</button>
                    </div>
                </form> 
            </div>
        </div>
        {/* Link at the bottom */}
        <div className="text-center">
            <Link className="text-center block mt-4 font-semibold" href="./login">Already have an account? Log in</Link>
        </div>
    </>
    );
}