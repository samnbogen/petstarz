"use client";
import { useState, useEffect } from "react";
import Pet from "./pet.js";
import Modal from 'react-modal';
import DOMPurify from 'dompurify';
//npm install dompurify
//npm install react-modal

export default function PetList() {
    const [filteredPets, setFilteredPets] = useState([]);

    const handleSpecies = (event) => {
        const species = event.target.value;
        if (species === "all") {
            setFilteredPets(originalPets);
        } else {
            const filtered = originalPets.filter(pet => pet.species === species);
            setFilteredPets(filtered);
        }
    };

    const handleBreed = () => {
        const sortedPets = [...filteredPets].sort((a, b) => a.breed.localeCompare(b.breed));
        setFilteredPets(sortedPets);
    };
    
    const handleAge = () => {
        const sortedPets = [...filteredPets].sort((a, b) => a.age - b.age);
        setFilteredPets(sortedPets);
    };    

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
                setOriginalPets(data);
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

    useEffect(() => {
        setFilteredPets(originalPets);
    },[originalPets])

    return (
        <div>
           {modalIsOpen && (
                <div className="absolute" onClick={closeModal}>
                    <div className="border-green border-2 bg-lightest-gray p-4 rounded-lg w-80" onClick={(e) => e.stopPropagation()}>
                        {selectPets && (
                            <div className="flex flex-col items-center justify-center">
                                <div className="rounded overflow-hidden mb-4" style={{ width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectPets.photo) }} />
                                </div>
                                <div className="w-2/3 flex flex-col items-start justify-center">
                                    <h1 className="text-lg font-bold">{selectPets.name}</h1>
                                    <h2>{selectPets.species}</h2>
                                    <h2>{selectPets.breed}</h2>
                                    <h2>Age: {selectPets.age}</h2>
                                    <h2>{selectPets.sex}</h2>
                                    <h2>Size: {selectPets.size}</h2>
                                    <h2>Fixed: {selectPets.fixed}</h2>
                                    <h2>{selectPets.additionalInfo}</h2>
                                </div>
                                <div className="flex flex-row justify-center">
                                    <button className="border font-bold py-2 px-2 rounded mt-4">Favorites</button>
                                    <button onClick={closeModal} className="border font-bold py-2 px-4 rounded mt-4 ml-2">Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="flex flex-row justify-center">
                <select onChange={handleSpecies}
                    className="bg-green hover:bg-gray text-white font-bold py-2 px-4 m-2 rounded w-40">
                    <option value="all">All Species</option>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="other">Other</option>
                </select>
                <button className="bg-green hover:bg-gray text-white font-bold py-2 px-4 m-2 rounded w-40" onClick={handleBreed}>Sort by Breed</button>
                <button className="bg-green hover:bg-gray text-white font-bold py-2 px-4 m-2 rounded w-40" onClick={handleAge}>Sort by Age</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 px-20 py-10 ">
                {filteredPets.map(pet => (
                    <div key={pet.id} onClick={() => handleSelectPets(pet)}>
                        <Pet {...pet} />
                    </div>
                ))}
            </div>
        </div>        
    );
}