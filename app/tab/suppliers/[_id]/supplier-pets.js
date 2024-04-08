"use client";
import { useState, useEffect } from "react";
import Pet from "@/app/tab/pets/pet.js";
import DOMPurify from 'dompurify';
//npm install dompurify
//npm install react-modal

export default function PetList({supplierID}) {
    const [originalPets, setOriginalPets] = useState([]);
    const [selectPets, setSelectPets] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //Testing getting th list of pets from the database
    const fetchPets = async () => {
        try{
            const response = await fetch("/api/foster/petCard",{
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            });                
            
            if (response.ok) {
                const data = await response.json();
                //setOriginalPets(data);
                if (supplierID) {
                    const filteredPets = data.filter((pets) => pets.supplierID === supplierID);
                    setOriginalPets(filteredPets);
                }
            } else {
                console.error("Pet Card submission failed:", response);
            }
        } catch (error) {
            console.error("Pet Card submission failed:", error);
        }
    }

    useEffect(() => {
        fetchPets();
    }, []);

    return (
        <div> 
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6 px-20 py-10 ">
                {originalPets.map(pet => (
                    <div key={pet.id}>
                        <Pet {...pet} />
                    </div>
                ))}
            </div>     
        </div>
    );
}