"use client";

import { useState } from 'react';

export default function Form(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const application = {
            firstName,
            lastName,
            email,
            address,
            city,
            postalCode,
            phone
        };

        //to make sure it is working
        console.log(application);
    
        // Send a POST request to the server-side function
        const response = await fetch("http://localhost:3000/api", {  
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
    
        setFirstName("");
        setLastName("");
        setEmail("");
        setAddress("");
        setCity("");
        setPostalCode("");
        setPhone("");
    };    

    return(
        <div className='mx-20 '>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>First Name</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Last Name</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Email</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Address</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>City</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Postal Code</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={postalCode} 
                    onChange={(e) => setPostalCode(e.target.value)} 
                    />
                </div>
                <div className="flex flex-col mb-10 w-1/2">
                    <label>Phone</label>
                    <input 
                    className="text-black"
                    required
                    type="text"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            </form>
        </div>
    );

}