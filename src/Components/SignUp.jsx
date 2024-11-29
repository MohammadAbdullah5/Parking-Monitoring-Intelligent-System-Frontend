import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation
import axios from "axios"; // Import axios for API calls
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    } else {
      const response = await axios.post(
        "https://aiparkingsystem-0ihqbt7l.b4a.run/api/v1/users/signup",
        {
          email: email,
          password: confirmPassword,
        }
        // After successful signup, redirect the user to the sign-in page
      );
      if (response.status === 201) {
        toast.success("Sign up successful!");
        navigate("/signin");
      } else {
        toast.error("Sign up failed. Please try again.");
      }
    }
    // You can add your authentication logic here (e.g., API call)
    console.log("Name:", name, "Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
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
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account?
          <a href="/signin" className="text-teal-500 hover:underline">
            {" "}
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
