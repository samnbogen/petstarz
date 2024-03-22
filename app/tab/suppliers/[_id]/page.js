"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Review from '../review';
import PetList from "./supplier-pets";
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
                    <h1>{foundSupplier.Company}</h1>
                    <div 
                        style={{width: '200px', height: '200px', objectFit: 'cover'}}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(foundSupplier.photo) }} />
                    <p>Location: {foundSupplier.location}</p>
                    <p>Phone Number: {foundSupplier.phoneNumber}</p>
                    <p>Email: {foundSupplier.email}</p>
                    <p>Website: {foundSupplier.website}</p>
                    <p>Description: {foundSupplier.description}</p>
                    <div className="border-t border-gray w-full my-8"/>
                    <Review supplierID={lastPartOfPathname} />
                    <div className="border-t border-gray w-full my-8"/>
                    <PetList supplierID={lastPartOfPathname} />                    
                </main>
            );
        }
    }
}