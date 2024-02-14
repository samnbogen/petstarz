"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import AuthProvider from './auth-provider';
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  console.log(session);

  return (
    <AuthProvider>
    <nav className="fixed w-full z-50">
      <div>
        <div className="bg-green max-w-screen h-16 flex flew-row items-center">
          <div className="flex items-center ml-10">
            <img src={"/flag.svg"} alt="description" />
            <h1 className="text-black text-xs ml-2">Canadian residents only</h1>
          </div>
        </div>
        <div className="bg-black flex flew-row items-center justify-between h-14">
          <div className="max-w-7xl sm:px-6 lg:px-8 flex flex-row items-center justify-start">
            <Link href={"/"}>
              <img
                src={"/logo-petstarz-w.svg"}
                alt="description"
                className="h-8 w-auto"/>
            </Link>
            <h2 className="text-white text-xs ml-4">PAWSitive PetStarz Inc.</h2>
          </div>

          <div className="flex items-center flew-row justify-end  ">
            <div className="hidden md:block">
              <div className="mr-2 flex items-baseline space-x-3">
                <p
                  className={`block py-2.5 px-4 rounded transition duration-200 
                link ${pathname === "/" ? "text-green font-bold" : "hover:text-green text-white" }`}>
                  <Link href={"/"}>Home</Link>
                </p>
                <p
                  className={`block py-2.5 px-4 rounded transition duration-200 
                link ${pathname === "/apply" ? "text-green font-bold" : "hover:text-green text-white"}`}>
                  <Link href={"/userFoster/apply"}>Apply</Link>
                </p>
                <p
                  className={`block py-2.5 px-4 rounded transition duration-200 
                link ${pathname === "/about"? "text-green font-bold" : "hover:text-green text-white"}`}>
                  <Link href={"/tab/about"}>About</Link>
                </p>
                <p className={`block py-2.5 px-4 rounded transition duration-200 
                            link ${ pathname === "/contact" ? "text-green font-bold" : "hover:text-green text-white" }`}>
                  <Link href={"/tab/contact"}>Contact</Link>
                </p>
                
                <div className="relative">
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="text-white block py-2.5 px-4 rounded transition duration-200 link hover:text-green">
                    Menu
                  </button>
                  {dropdownOpen && (
                    <div
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu">
                        <Link
                          href={"/userSupplier/petcard"}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray"
                          role="menuitem">
                          Petcard
                        </Link>
                        <Link
                          href={"/tab/about"}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray"
                          role="menuitem">
                          About
                        </Link>
                        <Link
                          href={"/tab/contact"}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray"
                          role="menuitem">
                          Contact
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {session ? (
                      <button className="ml-10 bg-green hover:bg-light-gray text-white text-xs py-2 px-4 rounded-full" onClick={() => signOut()}>
                        Email: {session.user.email} | Role: {session.user.role} |
                        Log out
                      </button>
                    ):(
                      <button className="ml-10 bg-green hover:bg-light-gray text-white text-xs py-2 px-4 rounded-full">
                          
                          <Link href={'/login'}>Login</Link>
                      </button>
                  )}
                
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light-gray hover:text-white hover:bg-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-white">
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden fixed right-0`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-white w-32 rounded-md ">
          <Link href={"/"}>Home</Link>
          <Link href={"/apply"}>Apply</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </nav>
    </AuthProvider>
  );
}
