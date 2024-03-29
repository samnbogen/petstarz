"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Review from '../review';
import DOMPurify from 'dompurify';
import Link from "next/link";
import PetList from "./supplier-pets";
import Header from "@/app/components/header";

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
                <main>
                    <Header text="Supplier Profile"/>
                    <div className=' flex flex-col md:flex-row mt-36 m-10 border-green border rounded-lg'>
                        <div className='w-full md:w-1/4 flex justify-center items-start m-10'>
                            <div 
                            style={{width: '200px', height: '200px', objectFit: 'cover'}}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(foundSupplier.photo) }} />
                        </div>
                        <div className='w-full md:w-3/4 flex flex-wrap'>
                            <div className="w-full pt-10 text-6xl font-black text-green">
                                <h1 style={{ fontFamily: 'Pacifico' }}>
                                    {foundSupplier.Company}
                                </h1>
                            </div>
                            <div className="border border-green flex flex-wrap w-full rounded-lg mt-10 mb-10 mr-10 pl-10">
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
                                <h1 style={{ fontFamily: 'Pacifico' }} class="text-3xl w-full text-center text-green font-bold">
                                    Available Pets
                                </h1>    
                                <PetList supplierID={lastPartOfPathname} />                     
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col md:flex-col m-10 border-green border rounded-lg p-2'>
                            <div className='w-full p-10'>
                                <h2 style={{ fontFamily: 'Pacifico' }} className="text-3xl w-full text-center text-green font-bold">
                                    Reviews
                                </h2>                  
                            </div>
                            <div>
                                <Review supplierID={lastPartOfPathname}/>
                            </div>
                        </div>
                    </div>        
                    <div className="flex justify-center">
                        <button className="bg-green hover:bg-gray text-white font-bold py-2 px-4 m-8 rounded w-40">
                            <Link href={"./reportFraud"}>Report Fraud</Link>
                        </button>
                     </div>
                </main>                
            );
        }
    }
}