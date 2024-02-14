"use client";

import Header from '/app/components/header.js';
import { useState } from 'react';
import PetCardForm from "./form.js";
import RecordsForm from "./recordsform.js";
import ContactsForm from "./contactsform.js";
import PedigreeForm from "./pedigreeform.js";
import AuthProvider from '../auth-provider.js'; // Don't remove or change anything to do with this, it might break the whole page :) 

export default function Home() {

  const [selectedForm, setSelectedForm] = useState('form1');

  const handleFormChange = (form) => {
    setSelectedForm(form);
  };

  return (
    <main>
      <Header text="PetStarz" text2="The  Pawsitive  Online Source for Finding Pets."/>
          <div className="flex min-h-screen flex-col items-center p-24">
            <div class="flex flex-row">
              <div>
                <h1 class="text-3xl pr-1">Pet</h1>
              </div>
              <div>
                <h1 class="text-3xl text-green">cards</h1>
              </div>
            </div>
              <div class="h-10 flex flex-row w-2/5">
                <div onClick={() => handleFormChange('form1')} class=" mr-1 p-1 rounded-t-lg w-1/4 bg-green hover:cursor-pointer"
                style={{ backgroundColor: selectedForm === 'form1' ? '#50D9A2' : 'gray' }}>
                    <h1 class="text-lg text-center text-white">General</h1>
                </div>
                <div onClick={() => handleFormChange('form2')}class=" mr-1 p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer"
                style={{ backgroundColor: selectedForm === 'form2' ? '#50D9A2' : 'gray' }}>
                    <h1 class="text-lg text-center text-white">Records</h1>
                </div>
                <div onClick={() => handleFormChange('form3')} class=" mr-1 p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer"
                style={{ backgroundColor: selectedForm === 'form3' ? '#50D9A2' : 'gray' }}>
                    <h1 class="text-lg text-center text-white">Contacts</h1>
                </div>
                <div onClick={() => handleFormChange('form4')} class="p-1 rounded-t-lg w-1/4 bg-gray hover:cursor-pointer"
                style={{ backgroundColor: selectedForm === 'form4' ? '#50D9A2' : 'gray' }}>
                    <h1 class="text-lg text-center text-white">Pedigree</h1>
                </div>
              </div>
            {selectedForm === 'form1' && <PetCardForm />}
            {selectedForm === 'form2' && <RecordsForm />}
            {selectedForm === 'form3' && <ContactsForm />}
            {selectedForm === 'form4' && <PedigreeForm />}
          </div>
  </main>
  );
}