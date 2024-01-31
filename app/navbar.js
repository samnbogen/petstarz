"use client"
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="fixed w-full z-10">
    <div>
      <div className="bg-green max-w-screen h-16 flex flew-row items-center">
        <div className="flex items-center ml-10">
        <img src={'/flag.svg'} alt="description"/>
        <h1 className="text-black text-xs ml-2">Canadian residents only</h1>
        </div>
      </div>
      <div className="bg-black flex flew-row items-center justify-end h-14">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="mr-2 flex items-baseline space-x-3">             
                
                    <p className={`block py-2.5 px-4 rounded transition duration-200 
                            link ${pathname === '/' ? 'text-green font-bold' : 'hover:text-green text-white'}`}>
                        <Link href={'/'}>Home</Link>
                    </p>
                    <p className={`block py-2.5 px-4 rounded transition duration-200 
                            link ${pathname === '/apply' ? 'text-green font-bold' : 'hover:text-green text-white'}`}>
                        <Link href={'/apply'}>Apply</Link>
                    </p>
                    <p className={`block py-2.5 px-4 rounded transition duration-200 
                            link ${pathname === '/about' ? 'text-green font-bold' : 'hover:text-green text-white'}`}>
                        <Link href={'/about'}>About</Link>
                    </p>
                    <p className={`block py-2.5 px-4 rounded transition duration-200 
                            link ${pathname === '/contact' ? 'text-green font-bold' : 'hover:text-green text-white'}`}>
                        <Link href={'/contact'}>Contact</Link>
                    </p>
                
                <button className="ml-10 bg-green hover:bg-light-gray text-white text-xs py-2 px-4 rounded-full">
                    register now
                </button>
              </div>              
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-light-gray hover:text-white hover:bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-white">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-light-gray hover:bg-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-light-gray hover:bg-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-light-gray hover:bg-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-light-gray hover:bg-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
        </div>
    </nav>
  );
}
