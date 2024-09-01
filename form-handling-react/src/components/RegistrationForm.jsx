import React, { useState } from 'react'

export default function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    if (!username) {
        setErrors("Username is required.");
    }
    if (!email) {
        setErrors("Email is required.");
    }
    if (!password) {
        setErrors("Password is required.");
    }
    return (
        <>
            <h1>Registration Form</h1>
            <form onSubmit={handelSubmit}>
                <input type='text' name='userName' value={username} onChange={e => setUsername(e.target.value)}>User Name</input>
                <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)}>Email</input>
                <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} >Password</input>
            </form>
        </>
    )
}