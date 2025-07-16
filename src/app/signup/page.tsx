"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Header from "@/component/Header";

export default function SignupPage() {
  const router = useRouter(); // Initialize router

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false); // checkbox state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }

    if (!agreed) {
      setError("You must agree to terms & conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed.");
        return;
      }

      // Reset form and show success
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setAgreed(false);
      setError("");
      setSubmitted(true);

      // Redirect to login page after successful signup
      router.push("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Header showLinks={true} noBackground={false} />

      <div className="flex justify-center items-center w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-xl shadow-xl shadow-gray-400 overflow-hidden max-w-5xl w-full h-auto">
          {/* Left: Form */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Get Started</h2>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            {submitted && (
              <p className="text-green-600 text-sm mb-4 text-center">
                Signup successful!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Name:</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="px-4 py-1 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Email:</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Password:</label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium mb-1">Confirm Password:</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={handleCheckbox}
                  className="w-4 h-4"
                />
                <label htmlFor="terms" className="text-sm select-none">
                  I agree to terms & conditions.
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-950 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:block relative w-full h-[600px]">
            <img
              src="/images/signup.jpg"
              alt="Signup Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
