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
        <div  className="border border-solid border-white p-4">
            <div>
                <h1>General Information</h1>
            </div>
            <div className="flex flex-row">
                <div className="border border-white h-16 w-16">
                    {/* image will go here */}
                </div>
                <div className="border border-white">
                    <div>
                        <label for="currentOwner">Current Owner</label>
                        <input type="text" id="currentOwner" name="currentOwner" />
                    </div>
                    <div>
                        <label for="petName">Pet Name</label>
                        <input type="text" id="petName" name="petName" />
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <label for="species">Species</label>
                            <input type="text" id="species" name="species" />
                        </div>
                        <div>
                            <label for="breed">Breed</label>
                            <input type="text" id="breed" name="breed" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
