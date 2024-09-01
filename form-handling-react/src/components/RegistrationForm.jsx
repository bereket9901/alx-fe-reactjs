import React, { useState } from 'react'

export default function RegistrationForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const handelChange = (e) => {
        const [name, value] = e.target;
        setFormData({ ...formData, [name]: value })

    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <h1>Registration Form</h1>
            <form onSubmit={handelSubmit}>
                <input type='text' name='username' value={formData.username} onChange={handelChange}>User Name</input>
                <input type='email' name='email' value={formData.email} onChange={handelChange}>Email</input>
                <input type='password' name='password' value={formData.password} onChange={handelChange}>Password</input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
