"use client";

import { useState } from "react";
import Header from "@/component/Header";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }

    setError("");
    setSubmitted(true);
    // TODO: Add real login logic here (API call + redirect)
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Header showLinks={true} noBackground={false} />

      <div className="flex justify-center items-center w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-xl shadow-gray-400 overflow-hidden max-w-5xl w-full h-auto">
          
          {/* Left: Form */}
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}
            {submitted && (
              <p className="text-green-600 text-sm mb-4 text-center">
                Login successful!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex justify-end mt-1">
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>


              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-orange-950 text-white py-2 rounded-md hover:bg-orange-900 transition font-semibold"
                >
                  Login
                </button>
              </div>
            </form>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block relative w-full h-[600px]">
            <img
              src="/images/login2.jpg"
              alt="Login Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
