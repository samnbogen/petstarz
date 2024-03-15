"use client";
import { useState, useEffect, Link } from "react";
import Supplier from "./supplier";

export default function SupplierList() {
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

    return (
        <main>
            <div className="flex flex-col items-center justify-center pt-20">                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 p-16">
                    {suppliers.map((supplier) => (
                        <Supplier {...supplier} />
                    ))}
                </div>
            </div>
        </main>
    );
}

