import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate from react-router-dom

const SignIn = () => {
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your authentication logic here (e.g., API call).
        console.log("Email:", email, "Password:", password);
        // After successful authentication, you can redirect the user
        navigate('/dashboard'); // Use navigate to redirect
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-300"
                >
                    Sign In
                </button>
                <p className="text-center mt-4">
                    Don't have an account? 
                    <a href="/signup" className="text-teal-500 hover:underline"> Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
