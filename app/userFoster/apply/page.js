"use client";
import React, { useState } from 'react';
import Form from './form';
import Header from '/app/components/header.js';

export default function Page() {

    return (
        <>
            <Header text="Apply"/>
            <Form/>
        </>
    )
}