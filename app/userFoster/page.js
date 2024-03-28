//build profile page

"use client";
import React, { useState } from 'react';
import Header from '/app/components/header.js';
import { useSession, signOut } from "next-auth/react";

export default function Page() {

    const { data: session } = useSession();

    return (
        <main>
            <Header text="Profile"/>
            <div className='flex flex-col md:flex-row mt-36 mb-12'>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img src='/sam.jpg' alt='profile picture' style={{width: '200px', height: '200px', objectFit: 'cover'}}/>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full'>
                        <h2>Name: {session.user.name}</h2>
                        <h2>Email: {session.user.email}</h2>
                        <h2>Role: {session.user.role}</h2>
                    </div>
                    <div className='w-full'>
                        <h2>Profile Description</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}