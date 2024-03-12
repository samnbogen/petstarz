"use client";
import { useState, useEffect } from "react";
import Supplier from "./supplier";

export default function SupplierList() {
    const [suppliers, setSuppliers] = useState([]);
    //const [filteredSuppliers, setFilteredSuppliers] = useState([]);

    /*const handleSupplierName = () => {
        const sortedSuppliers = [...suppliers].sort((a, b) => a.Company.localeCompare(b.Company));
        setFilteredSuppliers(sortedSuppliers);
    };*/

    const fetchSuppliers = async () => {
        try {
            const response = await fetch("/api/foster/supplierInfo", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setSuppliers(data);
                //setFilteredSuppliers(data); 
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

    //<button onClick={handleSupplierName}>Sort by Name</button>

    return (
        <main>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">Suppliers</h1>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 p-16">
                    {suppliers.map((supplier) => (
                        <Supplier key={supplier.id} {...supplier} />
                    ))}
                </div>
            </div>
        </main>
    );
}
