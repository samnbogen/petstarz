"use client";
import { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <header className="relative flex h-full pt-28">
        <div className='z-10 pt-36'>
          <h1 className="text-5xl text-center text-white font-bold">
            This is the home page.
          </h1>
          <h2 className="text-3xl text-center text-green"
            style={{ fontFamily: 'Pacifico' }}>
              The  Pawsitive  Online Source for Finding Pets.
          </h2>
        </div>
        <img src={'/cat.svg'} alt="description" className='z-0 absolute w-full h-72 object-cover brightness-50'/>
        
      </header>

      <div className="z-10 max-w-5xl w-screen h-screen items-center justify-between lg:flex ">
        <h1 
          className="text-3xl text-center hover:text-light-gray"
          style={{ fontFamily: 'Pacifico' }}>
            This is the home page.
        </h1>
        <p>
          This is some text.
        </p>
        <p>
          This is some more text.
        </p>
      </div>
      <Footer />
    </main>
  );
}
