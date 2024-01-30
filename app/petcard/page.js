"use client";

import Image from "next/image";
import Link from "next/link";
import PetCardForm from "./Form.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 
          className="text-3xl text-center text-white hover:text-light-violet z-40"
          style={{ fontFamily: 'Pacifico' }}>
            This is the petcard page.
        </h1>
        <Link href="/">Home</Link>
        {/* pet card form starts here */}
        <div  className="border border-solid border-white p-4 w-128">
            <div>
                <h1>General Information</h1>
            </div>
            <div className="flex flex-row">
                <div className="border border-white h-16 w-16">
                    {/* image will go here */}
                </div>
                <div className="border border-white">
                    <div className="p-1">
                        <label for="currentOwner">Current Owner</label>
                        <input type="text" id="currentOwner" name="currentOwner" />
                    </div>
                    <div className="p-1">
                        <label for="petName">Pet Name</label>
                        <input type="text" id="petName" name="petName" />
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="species">Species</label>
                            <input type="text" id="species" name="species" />
                        </div>
                        <div className="p-1">
                            <label for="breed">Breed</label>
                            <input type="text" id="breed" name="breed" />
                        </div>
                    </div>
                <div  className="border border-solid border-white p-4 w-128">
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="postalCodeLocation">Postal Code Location</label>
                            <input type="text" id="postalCodeLocation" name="postalCodeLocation" />
                        </div>
                        <div className="p-1">
                            <label for="price">Price</label>
                            <input type="text" id="price" name="price" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="dob">Date of Birth (DOB)</label>
                            <input type="text" id="dob" name="dob" />
                        </div>
                        <div className="p-1">
                            <label for="adoptionDate">Adoption Date</label>
                            <input type="text" id="adoptionDate" name="adoptionDate" />
                        </div>
                        <div className="p-1">
                            <label for="dod">Date of Death (DOD)</label>
                            <input type="text" id="dod" name="dod" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="p-1">
                            <p>Add Additional Photos</p>
                        </div>
                        <div className="border border-white h-16 w-16 p-1">
                            {/* image will go here */}
                        </div>
                        <div className="p-1">
                            <label for="aboutPet">About Pet</label>
                            <input type="text" id="aboutPet" name="aboutPet" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="sex">Sex</label>
                            <input type="text" id="sex" name="sex" />
                        </div>
                        <div className="p-1">
                            <label for="reproductiveStatus">Reproductive Status</label>
                            <input type="text" id="reproductiveStatus" name="reproductiveStatus" />
                        </div>
                        <div className="p-1">
                            <label for="alteredDate">Altered Date</label>
                            <input type="text" id="alteredDate" name="alteredDate" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="tattooNumber">Tattoo Number</label>
                            <input type="text" id="tattooNumber" name="tattooNumber" />
                        </div>
                        <div className="p-1">
                            <label for="microchipNumber">Microchip Number</label>
                            <input type="text" id="microchipNumber" name="microchipNumber" />
                        </div>
                        <div className="p-1">
                            <label for="petSize">Pet Size</label>
                            <input type="text" id="petSize" name="petSize" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="energyLevel">Energy Level</label>
                            <input type="text" id="energyLevel" name="energyLevel" />
                        </div>
                        <div className="p-1">
                            <label for="hairLength">Hair Length</label>
                            <input type="text" id="hairLength" name="hairLength" />
                        </div>
                        <div className="p-1">
                            <label for="eyeColor">Eye Color</label>
                            <input type="text" id="eyeColor" name="eyeColor" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="hairColor">Hair Color</label>
                            <input type="text" id="hairColor" name="hairColor" />
                        </div>
                        <div className="p-1">
                            <label for="specialNeeds">Special Needs</label>
                            <input type="text" id="specialNeeds" name="specialNeeds" />
                        </div>
                        <div className="p-1">
                            <label for="socializedWith">Socialized With</label>
                            <input type="text" id="socializedWith" name="socializedWith" />
                        </div>
                    </div>
                    <div className="p-1">
                        <label for="socializedWith">Socialized With</label>
                        <input type="text" id="socializedWith" name="socializedWith" />
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label for="save">Save</label>
                            <input type="button" id="save" name="save" />
                        </div>
                        <div className="p-1">
                            <label for="delete">Delete</label>
                            <input type="button" id="delete" name="delete" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </main>
  );
}
