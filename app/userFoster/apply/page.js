"use client";
import React, { useState } from 'react';
import Form from './form';
import Header from '/app/components/header.js';

export default function Page() {

    

    const [questionnaire, setQuestionnaire] = useState([])

    function handleAddQuestion(answer) {

        setQuestionnaire((prevAnswer) => [...(prevAnswer || []), answer]);
    }

    return (
        <main>
            <Header text="Apply"/>
            <Form onAddQuestion={handleAddQuestion}/>
        </main>
    )
}