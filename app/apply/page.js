"use client";
import React, { useState } from 'react';
import Form from './form';
import Navbar from '/app/components/navbar.js';
import Footer from '/app/components/footer.js';
import Header from '/app/components/header.js';

export default function Page() {

    

    const [questionnaire, setQuestionnaire] = useState([])

    function handleAddQuestion(answer) {

        setQuestionnaire((prevAnswer) => [...(prevAnswer || []), answer]);
    }

    return (
        <main>
            <Navbar />
            <Header text="Apply"/>
            <Form onAddQuestion={handleAddQuestion}/>
            <Footer />
        </main>
    )
}