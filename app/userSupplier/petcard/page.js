"use client";

import Image from "next/image";
import PetCardForm from "./Form.js";
import Navbar from '/app/components/navbar.js';
import FormNav from "./formnav.js";
import RecordsForm from "./recordsform.js";
import ContactsForm from "./contactsform.js";
import PedigreeForm from "./pedigreeform.js";

export default function Home() {
  return (
    <main>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="mt-10 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1 
                className="text-3xl text-center text-black hover:text-light-violet z-40"
                style={{ fontFamily: 'Pacifico' }}>
                    This is the petcard page.
                </h1>
            </div>
            <FormNav /> {/* FormNav will allow the user to switch between forms with ease. For now, all forms are displayed for ease of development */}
            <PetCardForm />
            <RecordsForm />
            <ContactsForm />
            <PedigreeForm />
        </div>
    </main>
  );
}