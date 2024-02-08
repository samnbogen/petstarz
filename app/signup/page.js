"use client";
import React, { useState } from 'react';
import SignUp from './signup';

export default function Page() {

    /*const [questionnaire, setQuestionnaire] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null); //'user' or 'admin' or null

    const handleLogin = (role) => {
        setIsLoggedIn(true);
        setUserRole(role);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserRole(null);
    };

    function handleAddQuestion(answer) {

        setQuestionnaire((prevAnswer) => [...(prevAnswer || []), answer]);
    }*/

    return (
        <>
            <SignUp />
            {/*<div>
                {isLoggedIn ? (
                    <div>
                        <h1>Welcome!</h1>
                        {userRole === 'admin' ? (
                            <h2>You are an Admin</h2>
                        ) : (
                            <h2>You are a User</h2>
                        )}
                        <button className="border-2 border-rose-500" onClick={handleLogout}>Log out</button>
                    </div>
                ) : (
                    <LoginForm onLoginSuccess={handleLogin} />
                )}
            </div>*/}
        </>
    )
}