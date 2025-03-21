"use client";

import { signIn } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
    
    const [error, setError] = useState(null);
        const [isloading, setIsLoading] = useState(false);
        const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const credentials = {
            email: formData.get("email"),
            password: formData.get("password"),
        }

        const res = await signIn(credentials);
        if (res.status === "success") {
            router.push('/')
        } else {
            setError(res.status)
        }
        setIsLoading(false)
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[90%] sm:w-[60%] md:w-[45%] lg:w-[38%] xl:w-[32%]">
                <form className="shadow-lg p-6 rounded-md w-full" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>

                    <fieldset className="flex flex-col gap-4 mt-4">
                        <legend className="sr-only">Login Form</legend>

                        {/* Email Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-lg font-medium text-primary">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                className="border-2 py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary"
                                onChange={() => setError(null)}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-lg font-medium text-primary">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*******"
                                className="border-2 py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary"
                                onChange={() => setError(null)}
                                required
                            />
                        </div>
                    </fieldset>

                    {/* error */}

                    {error && (
                        <div className="mt-1 text-center text-sm">
                            <p className="text-red-500">*{error}</p>
                        </div>
                    )}

                    {/* Login Button */}
                    <button type="submit" className="bg-primary w-full rounded-md py-3 hover:bg-secondary cursor-pointer mt-3 flex justify-center items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isloading}>
                        Login
                        {isloading && (
                            <span className="loader"></span>
                        )}
                    </button>

                    {/* Links: Register & Forgot Password */}
                    <div className="flex max-lg:flex-col justify-between items-center mt-4">
                        <p className="text-sm">
                            Don't have an account?
                            <Link href="/register" className="text-secondary ml-1 cursor-pointer hover:underline">
                                Sign Up
                            </Link>
                        </p>
                        <Link href="/forgot-password" className="text-sm cursor-pointer hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
