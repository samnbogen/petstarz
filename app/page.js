"use client";
import { useState } from 'react';
import Navbar from './navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex pt-36">
        <h1 
          className="text-3xl text-center text-black hover:text-light-gray"
          style={{ fontFamily: 'Pacifico' }}>
            This is the home page.
        </h1>
        <p className="text-3xl">
          This is some text.
        </p>
      </div>
    </main>
  );
}
