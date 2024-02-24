"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Form() {
    const [homeEnv, setHomeEnv] = useState("");
    const [rentOrOwn, setRentOrOwn] = useState("");
    const [homeSqrFT, setHomeSqrFT] = useState("");
    const [fosterEXP, setFosterEXP] = useState("");
    const [homeComposition, setHomeComposition] = useState("");
    const [petLevelOfComfort, setPetLevelOfComfort] = useState("");
    const [openToSpecialNeeds, setOpenToSpecialNeeds] = useState("");
    const [currentPets, setCurrentPets] = useState("");
    const [currentPetsSocialization, setCurrentPetsSocialization] = useState("");
    const { data: session } = useSession();
    const email = session?.user?.email;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/foster/applyForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ homeEnv, rentOrOwn, homeSqrFT,
                    fosterEXP, homeComposition, petLevelOfComfort,
                    openToSpecialNeeds, currentPets, currentPetsSocialization,
                    email}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Application submitted:", data);
                setHomeEnv("");
                setRentOrOwn("");
                setHomeSqrFT("");
                setFosterEXP("");
                setHomeComposition("");
                setPetLevelOfComfort("");
                setOpenToSpecialNeeds("");
                setCurrentPets("");
                setCurrentPetsSocialization("");
            } else {
                console.error("Application submission failed:", response);
            }
        } catch (error) {
            console.error("Application submission failed:", error);
        }
    }

    return(
        <main>
            <div className="flex flex-col items-center justify-center pt-40">
                <h1>Become a foster parent</h1>
                <p>Questionnaire for foster parent</p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className="flex flex-col">
                        <span>Describe your home environment urban,suburban,rural?</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={homeEnv} onChange={(e) => setHomeEnv(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>Do you rent or own your home?</span>
                        <textarea className="border-2 border-black rounded-md p-2" 
                        type="text" 
                        value={rentOrOwn} 
                        onChange={(e) => setRentOrOwn(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>What is the approximate square footage of your resident?</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={homeSqrFT} onChange={(e) => setHomeSqrFT(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>Do any household members have experience with fostering or adoption?</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={fosterEXP} onChange={(e) => setFosterEXP(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>Please list all the people who live in your home and their ages:</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={homeComposition} onChange={(e) => setHomeComposition(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>What age range and gender do you feel most comfortable fostering?</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={petLevelOfComfort} onChange={(e) => setPetLevelOfComfort(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>Are you open to fostering pets with special needs or medical conditions?</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={openToSpecialNeeds} onChange={(e) => setOpenToSpecialNeeds(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>Do you have any other pets currently? please list the species breed and age of all pets</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={currentPets} onChange={(e) => setCurrentPets(e.target.value)} />
                    </label>
                    <label className="flex flex-col">
                        <span>Have your other pets been socialized?</span>
                        <textarea className="border-2 border-black rounded-md p-2" type="text" value={currentPetsSocialization} onChange={(e) => setCurrentPetsSocialization(e.target.value)} />
                    </label>
                    <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md">Submit</button>
                </form>
            </div>
        </main>
    );
}


