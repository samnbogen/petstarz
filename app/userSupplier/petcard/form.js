export default function PetCardForm() {

// add photo
// fixed - yes/no 
// size - small, medium, large, extra large
// about section (additional info)
// name required
// age required 
// sex - drop down 
// species - drop down (dog, cat, other)
// if cat or dog (breed) if other (type)

    return (
        <div  className="border rounded-b-lg border-light-gray p-4 w-2/5 bg-white">
            <div class="flex flex-row">
                <div className="p-1">
                    <label class="text-gray block" for="currentOwner">Current Owner</label>
                    <input class="border border-light-gray rounded" type="text" id="currentOwner" name="currentOwner" />
                </div>
                <div>
                    <p>Placeholder for "searchable" toggle button</p>
                </div>
            </div>
            <div class="flex flex-row">
                <div className="p-1">
                    <label class="text-gray block" for="petName">Pet Name</label>
                    <input class=" border border-light-gray rounded" type="text" id="petName" name="petName" />
                </div>
                <div>
                    <p>Placeholder for "active" toggle button</p>
                </div>
            </div>
            <div className="flex flex-row border border-red p-1"> {/*Why does this get pushed outside of the box??*/}
                    <label class="text-gray block" for="species">Species</label>
                    <input class=" border border-light-gray rounded" type="text" id="species" name="species" />
                    <label class="text-gray block" for="species">Species</label>
                    <input class=" border border-light-gray rounded" type="text" id="species" name="species" />
            </div>
            {/*New form is above this line*/}
            <div className="flex flex-row p-1">
                <div class="mr-1">
                    <div class="text-center text-white p-1 w-40 border-2 border-green bg-green rounded-lg hover:bg-white hover:cursor-pointer hover:text-green">
                        <p>Save</p>
                    </div>
                </div>
                <div class="ml-1">
                    <div class="text-center text-white p-1 w-40 border-2 border-red bg-red rounded-lg hover:bg-white hover:cursor-pointer hover:text-red">
                        <p>Cancel</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


//  <div>
//                 <h1 class="text-lg">General Information</h1>
//             </div>
//             <div className="flex flex-row">
//             <div className="ml-2 bg-gray h-16 w-16">
                
//             </div>
//                 <div class="text-justify-center">
//                 <div className="border border-white">
//                     <div className="p-1">
//                         <label class="text-gray block" for="currentOwner">Current Owner</label>
//                         <input class="w-1/3 border border-gray rounded" type="text" id="currentOwner" name="currentOwner" />
//                     </div>
//                     <div className="p-1">
//                         <label class="text-gray block" for="petName">Pet Name</label>
//                         <input class=" w-1/3 border border-gray rounded" type="text" id="petName" name="petName" />
//                     </div>
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="species">Species</label>
//                             <input class=" border border-gray rounded" type="text" id="species" name="species" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="breed">Breed</label>
//                             <input class="w-1/2 border border-gray rounded" type="text" id="breed" name="breed" />
//                         </div>
//                     </div>
//                 </div>
//                 <div  className="border border-solid border-white p-4 w-128">
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="postalCodeLocation">Postal Code Location</label>
//                             <input class="border border-gray rounded" type="text" id="postalCodeLocation" name="postalCodeLocation" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="price">Price</label>
//                             <input class="border border-gray rounded" type="text" id="price" name="price" />
//                         </div>
//                     </div>
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="dob">Date of Birth (DOB)</label>
//                             <input class="border border-gray rounded" type="text" id="dob" name="dob" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="adoptionDate">Adoption Date</label>
//                             <input class="border border-gray rounded" type="text" id="adoptionDate" name="adoptionDate" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="dod">Date of Death (DOD)</label>
//                             <input class="border border-gray rounded" type="text" id="dod" name="dod" />
//                         </div>
//                     </div>
//                     <div className="flex flex-col">
//                         <div className="p-1">
//                             <p class="block text-gray">Add Additional Photos</p>
//                         </div>
//                         <div className="bg-gray h-16 w-16 p-1">
                        
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="aboutPet">About Pet</label>
//                             <input class="border border-gray rounded" type="text" id="aboutPet" name="aboutPet" />
//                         </div>
//                     </div>
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="sex">Sex</label>
//                             <select class="border border-gray rounded w-40" type="text" id="sex" name="sex">
//                                 <option selected>Choose a sex</option>
//                                 <option value = "male">Male</option>
//                                 <option value = "female">Female</option>
//                             </select>
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="reproductiveStatus">Reproductive Status</label>
//                             <input class="border border-gray rounded" type="text" id="reproductiveStatus" name="reproductiveStatus" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="alteredDate">Altered Date</label>
//                             <input class="border border-gray rounded" type="text" id="alteredDate" name="alteredDate" />
//                         </div>
//                     </div>
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="tattooNumber">Tattoo Number</label>
//                             <input class="border border-gray rounded" type="text" id="tattooNumber" name="tattooNumber" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="microchipNumber">Microchip Number</label>
//                             <input class="border border-gray rounded" type="text" id="microchipNumber" name="microchipNumber" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="petSize">Pet Size</label>
//                             <input class="border border-gray rounded" type="text" id="petSize" name="petSize" />
//                         </div>
//                     </div>
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="energyLevel">Energy Level</label>
//                             <input class="border border-gray rounded" type="text" id="energyLevel" name="energyLevel" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="hairLength">Hair Length</label>
//                             <input class="border border-gray rounded" type="text" id="hairLength" name="hairLength" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="eyeColor">Eye Color</label>
//                             <input class="border border-gray rounded" type="text" id="eyeColor" name="eyeColor" />
//                         </div>
//                     </div>
//                     <div className="flex flex-row">
//                         <div className="p-1">
//                             <label class="text-gray block" for="hairColor">Hair Color</label>
//                             <input class="border border-gray rounded" type="text" id="hairColor" name="hairColor" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="specialNeeds">Special Needs</label>
//                             <input class="border border-gray rounded" type="text" id="specialNeeds" name="specialNeeds" />
//                         </div>
//                         <div className="p-1">
//                             <label class="text-gray block" for="socializedWith">Socialized With</label>
//                             <input class="border border-gray rounded" type="text" id="socializedWith" name="socializedWith" />
//                         </div>
//                     </div>
//                     <div className="p-1">
//                         <label class="text-gray block" for="socializedWith">Socialized With</label>
//                         <input class="border border-gray rounded" type="text" id="socializedWith" name="socializedWith" />
//                     </div> /*}
//                 </div>