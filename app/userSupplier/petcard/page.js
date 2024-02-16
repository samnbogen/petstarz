"use client";

import Header from '/app/components/header.js';
import FormNav from '/app/userSupplier/petcard/formnav.js';
// import { useState } from 'react';
// import PetCardForm from "./form.js";
// import RecordsForm from "./recordsform.js";
// import ContactsForm from "./contactsform.js";
// import PedigreeForm from "./pedigreeform.js";

export default function Home() {
  return (
    <main>
      <Header text="PetStarz" text2="The  Pawsitive  Online Source for Finding Pets."/>
      <FormNav />
  </main>
  );
}