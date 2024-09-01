import { useState } from 'react';

export default function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!username) {
            newErrors.username = "Username is required.";
        }
        if (!email) {
            newErrors.email = "Email is required.";
        }
        if (!password) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);

        // If there are no errors, proceed with form submission logic
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted");
            // Handle successful form submission here
        }
    };

    return (
        <>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button type='submit'>Register</button>
            </form>
        </>
    );
}
