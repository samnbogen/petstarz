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

    const handleSelectPets = (pet) => {
        setSelectPets(pet);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    
    }


    return (
        <div>
           {modalIsOpen && (
                <div className="fixed top-0 left-0 w-full h-100 pt-28 flex items-center justify-center bg-gray-900 bg-opacity-50 " onClick={closeModal}>
                    <div className="border-green border-2 bg-lightest-gray p-4 rounded-lg w-60" onClick={(e) => e.stopPropagation()}>
                        {selectPets && (
                            <div className="flex flex-col items-center justify-center">
                                <div className="rounded overflow-hidden mb-4" style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectPets.photo) }} />
                                </div>
                                <h1 className="text-lg font-bold">{selectPets.name}</h1>
                                <h2>{selectPets.species}</h2>
                                <h2>{selectPets.breed}</h2>
                                <h2>{selectPets.age}</h2>
                                <h2>{selectPets.sex}</h2>
                                <h2>{selectPets.size}</h2>
                                <h2>{selectPets.fixed}</h2>
                                <h2>{selectPets.additionalInfo}</h2>
                                <div className="flex flex-row justify-center">
                                    <button className="border font-bold py-2 px-2 rounded mt-4">Favorites</button>
                                    <button onClick={closeModal} className="border font-bold py-2 px-4 rounded mt-4">Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-20 py-10 ">
                {originalPets.map(pet => (
                    <div key={pet.id} onClick={() => handleSelectPets(pet)}>
                        <Pet {...pet} />
                    </div>
                ))}
            </div>     
            </div>
    );
}