"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Review from '../review';
import DOMPurify from 'dompurify';

export default function Page() {
    const pathname = usePathname();
    const lastPartOfPathname = pathname.split("/").pop();

    const [suppliers, setSuppliers] = useState([]);

    const fetchSuppliers = async () => {
        try {
            const response = await fetch("/api/supplier", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setSuppliers(data);
            } else {
                console.error("Supplier fetch failed:", response);
            }
        } catch (error) {
            console.error("Supplier fetch failed:", error);
        }
    };

    useEffect(() => {
        fetchSuppliers();
    }, []);

    if (lastPartOfPathname) {
        const foundSupplier = suppliers.find(
            (supplier) => supplier._id === lastPartOfPathname
        );
        if (foundSupplier) {
            return (                
                <main className="pt-36">                
                <div className=' flex flex-col md:flex-row m-10 border-green border rounded-lg'>
                    <div className='w-full md:w-1/4 flex justify-center items-start m-10'>
                    <div 
                        style={{width: '200px', height: '200px', objectFit: 'cover'}}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(foundSupplier.photo) }} />
                    </div>
                    <div className='w-full md:w-3/4 flex flex-wrap'>
                        <div className="border border-green flex flex-wrap w-full rounded-lg mt-10 mb-10 mr-10 pl-10">
                            <div className="w-full pt-10 text-3xl font-bold">
                                <h1>{foundSupplier.Company}</h1>
                            </div>
                            <div className='w-1/2 pt-10'>
                                <h1 class="font-bold">Location</h1>
                                <h1 class="font-bold">Phone Number</h1>
                                <h1 class="font-bold">Email</h1>
                                <h1 class="font-bold">Website</h1>
                            </div>
                            <div className='w-1/2 p-10'>
                                <h2>{foundSupplier.location}</h2>
                                <h2>{foundSupplier.phoneNumber}</h2>
                                <h2>{foundSupplier.email}</h2>
                                <h2>{foundSupplier.website}</h2>
                            </div>
                        </div>
                        <div className='w-full pr-10 pb-10'>
                            <h2>{foundSupplier.description}</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className='w-1/2 flex flex-col md:flex-row m-10 border-green border rounded-lg p-2'>
                        <div className='w-full p-10'>
                            <h1 class="text-3xl w-full text-center text-black font-bold">
                                Available Pets
                            </h1> 
                            <PetList supplierID={lastPartOfPathname} />                   
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col md:flex-col m-10 border-green border rounded-lg p-2'>
                        <div className='w-full p-10'>
                            <h2 className="text-3xl w-full text-center text-black font-bold">
                                Reviews
                            </h2>                  
                        </div>
                        <div>
                            <Review supplierID={lastPartOfPathname} />
                        </div>
                    </div>
                </div>
            </main>
                
            );
        }
    }
}