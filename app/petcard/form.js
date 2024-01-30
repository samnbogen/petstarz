"use client";

import {useState} from "react";

export default function PetCardForm() {
    return (
        <div  className="border border-solid border-white p-4">
            <div>
                <h1>General Information</h1>
            </div>
            <div> 
                <div className="">
                    <div>
                        <label for="currentOwner">Current Owner</label>
                        <input type="text" id="currentOwner" name="currentOwner" />
                    </div>
                    <div>
                        <label for="petName">Pet Name</label>
                        <input type="text" id="petName" name="petName" />
                    </div>
                    <div>
                        <label for="species">Species</label>
                        <input type="text" id="species" name="species" />
                    </div>
                </div>
            </div>
        </div>
    )
};