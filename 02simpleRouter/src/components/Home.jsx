import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const [errors, setErrors] = useState({});
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!username.trim()) {
            validationErrors.username = "Username is required";
        }

        if (!email.trim()) {
            validationErrors.email = "Email is required";
        }

        if (!password.trim()) {
            validationErrors.password = "Passwords is required";
        } else if (password.length < 6) {
            validationErrors.password = "password should be at least 6 char"
        }

        if (password !== confirmPassword) {
            validationErrors.password = "Passwords do not match";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        navigate('/userdetails');

        
        alert("Form Submitted successfully");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-500 border shadow-lg rounded-lg w-96 h-2/3 flex items-center justify-center">
                <form
                    className="flex items-center justify-center flex-col h-1/2"
                    onSubmit={handleSubmit}
                >
        
                        <h1 className="mb-4 text-3xl">Login</h1>
                        <label>Name:</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="rounded-lg px-2 py-1"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                    
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="rounded-lg px-2 py-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="rounded-lg px-2 py-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="rounded-lg px-2 py-1"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                    <button
                        type="submit"
                        className="px-6 py-2 mt-4 mb-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
