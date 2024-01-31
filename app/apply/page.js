"use client";
import React, { useState } from 'react';
import Form from './form';

export default function Page() {

    const [questionnaire, setQuestionnaire] = useState([])

    function handleAddQuestion(answer) {

        setQuestionnaire((prevAnswer) => [...(prevAnswer || []), answer]);
    }

    return (
        <Form onAddQuestion={handleAddQuestion} />
    )
}