//build supplier profile page

"use client";
import React, { useState } from 'react';
import Header from '/app/components/header.js';
import Review from '/app/review/review.js';

export default function Page() {

    return (
        <main>
            <Header text="Profile"/>
            <div className=' flex flex-col md:flex-row mt-36 m-12 border-green border-2'>
                <div className='w-full md:w-1/4 flex justify-center items-start m-10'>
                    <img src='/sam.jpg' alt='profile picture' style={{width: '200px', height: '200px', objectFit: 'cover'}}/>
                </div>
                <div className='w-full md:w-3/4 flex flex-wrap'>
                    <div className='w-1/2 p-10'>
                        <h1 class="font-bold">Company</h1>
                        <h1 class="font-bold">Location</h1>
                        <h1 class="font-bold">Phone Number</h1>
                        <h1 class="font-bold">Email</h1>
                        <h1 class="font-bold">Website</h1>
                    </div>
                    <div className='w-1/2 p-10'>
                        <h2>Patty's Pets</h2>
                        <h2>Calgary, AB</h2>
                        <h2>403-882-8080</h2>
                        <h2>info@patty.com</h2>
                        <h2>www.pattyspets.com</h2>
                    </div>
                    <div className='w-full p-6'>
                        <h2>We are a family-owned and operated pet breeder that specializes in raising healthy, happy, and well-socialized puppies and kittens of various breeds. We have been breeding animals for over 10 years, and we are passionate about providing quality pets to loving homes. We follow the highest standards of breeding practices, including genetic testing, health screening, vaccination, deworming, and microchipping. We also provide lifetime support and advice to our customers, and we offer a health guarantee for every pet we sell. Our animals are raised in a clean, comfortable, and stimulating environment, where they receive plenty of attention, care, and socialization. We welcome visitors to our facility, where you can meet our breeding stock and see our available puppies and kittens. We also have a website where you can view our photos, videos, testimonials, and contact information. Whether you are looking for a companion, a show prospect, or a service animal, we have the perfect pet for you. Contact us today to find your furry friend.</h2>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row m-12 border-green border-2'>
                <div className='w-full flex justify-center items-center'>
                    <h1 class="font-bold">Available Pets</h1>                    
                </div>
            </div>
            <div className='flex flex-col md:flex-row m-12 border-green border-2'>
                <div className='w-full flex justify-center items-center'>
                    <Review/>
                </div>
            </div>
        </main>
    )
}