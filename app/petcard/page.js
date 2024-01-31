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
        {/* pet card form starts here */}
        <div  className="border border-solid border-gray p-4 w-128 bg-white">
            <div>
                <h1 class="">General Information</h1>
            </div>
            <div className="flex flex-row">
                <div className="bg-gray h-16 w-16">
                    {/* image will go here */}
                </div>
                <div className="border border-white">
                    <div className="p-1">
                        <label class="text-gray block" for="currentOwner">Current Owner</label>
                        <input class="border border-gray rounded" type="text" id="currentOwner" name="currentOwner" />
                    </div>
                    <div className="p-1">
                        <label class="text-gray block" for="petName">Pet Name</label>
                        <input class="border border-gray rounded" type="text" id="petName" name="petName" />
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="species">Species</label>
                            <input class="border border-gray rounded" type="text" id="species" name="species" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="breed">Breed</label>
                            <input class="border border-gray rounded" type="text" id="breed" name="breed" />
                        </div>
                    </div>
                <div  className="border border-solid border-white p-4 w-128">
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="postalCodeLocation">Postal Code Location</label>
                            <input class="border border-gray rounded" type="text" id="postalCodeLocation" name="postalCodeLocation" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="price">Price</label>
                            <input class="border border-gray rounded" type="text" id="price" name="price" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="dob">Date of Birth (DOB)</label>
                            <input class="border border-gray rounded" type="text" id="dob" name="dob" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="adoptionDate">Adoption Date</label>
                            <input class="border border-gray rounded" type="text" id="adoptionDate" name="adoptionDate" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="dod">Date of Death (DOD)</label>
                            <input class="border border-gray rounded" type="text" id="dod" name="dod" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="p-1">
                            <p class="block text-gray">Add Additional Photos</p>
                        </div>
                        <div className="bg-gray h-16 w-16 p-1">
                            {/* image will go here */}
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="aboutPet">About Pet</label>
                            <input class="border border-gray rounded" type="text" id="aboutPet" name="aboutPet" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="sex">Sex</label>
                            <input class="border border-gray rounded" type="text" id="sex" name="sex" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="reproductiveStatus">Reproductive Status</label>
                            <input class="border border-gray rounded" type="text" id="reproductiveStatus" name="reproductiveStatus" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="alteredDate">Altered Date</label>
                            <input class="border border-gray rounded" type="text" id="alteredDate" name="alteredDate" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="tattooNumber">Tattoo Number</label>
                            <input class="border border-gray rounded" type="text" id="tattooNumber" name="tattooNumber" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="microchipNumber">Microchip Number</label>
                            <input class="border border-gray rounded" type="text" id="microchipNumber" name="microchipNumber" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="petSize">Pet Size</label>
                            <input class="border border-gray rounded" type="text" id="petSize" name="petSize" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="energyLevel">Energy Level</label>
                            <input class="border border-gray rounded" type="text" id="energyLevel" name="energyLevel" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="hairLength">Hair Length</label>
                            <input class="border border-gray rounded" type="text" id="hairLength" name="hairLength" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="eyeColor">Eye Color</label>
                            <input class="border border-gray rounded" type="text" id="eyeColor" name="eyeColor" />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="text-gray block" for="hairColor">Hair Color</label>
                            <input class="border border-gray rounded" type="text" id="hairColor" name="hairColor" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="specialNeeds">Special Needs</label>
                            <input class="border border-gray rounded" type="text" id="specialNeeds" name="specialNeeds" />
                        </div>
                        <div className="p-1">
                            <label class="text-gray block" for="socializedWith">Socialized With</label>
                            <input class="border border-gray rounded" type="text" id="socializedWith" name="socializedWith" />
                        </div>
                    </div>
                    <div className="p-1">
                        <label class="text-gray block" for="socializedWith">Socialized With</label>
                        <input class="border border-gray rounded" type="text" id="socializedWith" name="socializedWith" />
                    </div>
                    <div className="flex flex-row">
                        <div className="p-1">
                            <label class="border-2 border-green rounded-lg bg-green hover:cursor-pointer hover:bg-white hover:text-green" for="save">save</label>
                            <input type="button" id="save" name="save" />
                        </div>
                        <div className="p-1">
                            <label class="border-2 border-red rounded-lg bg-red hover:cursor-pointer hover:bg-white hover:text-red" for="delete">delete</label>
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
