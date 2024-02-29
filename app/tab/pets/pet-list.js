"use client";
import { useState, useEffect } from "react";
import Pet from "./pet.js";

export default function PetList() {
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
    

    const [originalPets, setOriginalPets] = useState([
        {
            name: "Fluffy",
            species: "cat",
            breed: "Siamese",
            age: 2
        },
        {
            name: "Fido",
            species: "dog",
            breed: "Golden Retriever",
            age: 3
        },
        {
            name: "Rex",
            species: "dog",
            breed: "Pitbull",
            age: 5
        },
        {
            name: "Whiskers",
            species: "cat",
            breed: "Persian",
            age: 1
        },
        {
            name: "Spike",
            species: "dog",
            breed: "Poodle",
            age: 4
        },
        {
            name: "Mittens",
            species: "cat",
            breed: "Tabby",
            age: 6
        },
        {
            name: "Buddy",
            species: "dog",
            breed: "Beagle",
            age: 2
        },
        {
            name: "Muffin",
            species: "cat",
            breed: "Calico",
            age: 3
        },
        {
            name: "Max",
            species: "dog",
            breed: "German Shepherd",
            age: 5
        },
        {
            name: "Smokey",
            species: "cat",
            breed: "Russian Blue",
            age: 1
        },
        {
            name: "Lucky",
            species: "other",
            breed: "lizard",
            age: 4
        },
        {
            name: "Nemo",
            species: "other",
            breed: "fish",
            age: 2
        },
        {
            name: "Polly",
            species: "other",
            breed: "parrot",
            age: 3
        },
        {
            name: "Bugs",
            species: "other",
            breed: "rabbit",
            age: 1
        }


    ]);

    const [filteredPets, setFilteredPets] = useState([]);

    useEffect(() => {
        setFilteredPets(originalPets);
    }, [originalPets]);


    return (
        <div>
            <select onChange={handleSpecies}>
                <option value="all">All Species</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="other">Other</option>
            </select>
            <button className="bg-green hover:bg-gray text-white font-bold py-2 px-4 rounded" onClick={handleBreed}>Sort by Breed</button>
            <button className="bg-green hover:bg-gray text-white font-bold py-2 px-4 rounded" onClick={handleAge}>Sort by Age</button>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 p-16 ">
                {filteredPets.map(pet => (
                    <Pet key={pet.id} {...pet} />
                ))}
            </div>

        </div>        
    );
}