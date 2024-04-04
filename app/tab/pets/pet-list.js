"use client";
import { useState, useEffect } from "react";
import Pet from "./pet.js";

export default function PetList() {
    const [filteredPets, setFilteredPets] = useState([]);
    const [originalPets, setOriginalPets] = useState([]);

    //Testing getting the list of pets from the database
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

    useEffect(() => {
        fetchPets();
    }, []);

    useEffect(() => {
        setFilteredPets(originalPets);
    },[originalPets])

    return (
        <div>
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
                    <div key={pet.id}>
                        <Pet {...pet} />
                    </div>
                ))}
            </div>
        </div>   
    );
}