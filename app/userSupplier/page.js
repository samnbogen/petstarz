//build supplier profile page

"use client";
import React, { useState, useEffect } from 'react';
import Review from '/app/review/review.js'

export default function Page() {

    //have to post all of this to the database 
    //Company, Location, Phone Number, Email, Website
    //Description, photos, 
    //all linked by suppliedID available pets, reviews
    const [suppliers, setSuppliers] = useState([]);
    //const [selectedSupplier, setSelectedSupplier] = useState(null);

    const fetchSuppliers = async () => {
        try {
            const response = await fetch('api/supplier',{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            });
            if (response.ok) {
                const supplierData = await response.json();
                console.log("Supplier data",supplierData);
                setSuppliers(supplierData);
            } else {
                console.error("Fetching suppliers failed:", response);
            }
        } catch (error) {
            console.error("Fetching suppliers failed:", error);
        }
    }

    useEffect(() => {
        fetchSuppliers();
    }, []);

   /* const handleSupplierClick = (supplier) => {
        setSelectedSupplier(supplier);
    };

    const closeModal = () => {
        setSelectedSupplier(null);
    }

    function Modal({onClose, children}) {
        return (
            <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                <div className='bg-white p-6 rounded-lg w-1/2'>
                    <button onClick={onClose} className='float-right text-2xl'>&times;</button>
                    {children}
                </div>
            </div>
        );
    }*/

    return (
        <div>
            <h1>Suppliers</h1>
            <div>
                {suppliers.map(supplier => (
                    <div key={supplier._id} className="supplier-container">
                        <h2>{supplier.company}</h2>
                        <p>Location: {supplier.location}</p>
                        <p>Phone Number: {supplier.phoneNumber}</p>
                        <p>Email: {supplier.email}</p>
                        <p>Website: {supplier.website}</p>
                        <p>Description: {supplier.description}</p>
                        <img src={supplier.photo} alt={supplier.company} />
                        <Review supplierID={supplier._id} />
                    </div>
                ))}
            </div>
        </div>
    );
}