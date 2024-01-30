import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10">
    <div>
      <div className="bg-green max-w-screen h-16 flex flew-row items-center">
        <div className="flex items-center ml-10">
        <img src={'/flag.svg'} alt="description"/>
        <h1 className="text-black text-xs ml-2">Canadian residents only</h1>
        </div>
      </div>
      <div className="bg-white flex flew-row items-center justify-end h-14">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-light-gray hover:text-green px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-light-gray hover:text-green px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-light-gray hover:text-green px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-light-gray hover:text-green px-3 py-2 rounded-md text-sm font-medium">Contact</a>
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
