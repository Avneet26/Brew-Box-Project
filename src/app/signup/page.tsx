"use client";

import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-black px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        {submitted && (
          <p className="text-green-600 text-sm mb-4 text-center">
            Signup successful!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <label className="col-span-1 font-medium text-right">Name:</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="col-span-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-4">
            <label className="col-span-1 font-medium text-right">Email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="col-span-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-4">
            <label className="col-span-1 font-medium text-right">
              Password:
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="col-span-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-4">
            <label className="col-span-1 font-medium text-right">
              Confirm:
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="col-span-2 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
