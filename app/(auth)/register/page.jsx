"use client";

import { signUp } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {

    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const credentials = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
        }
        const confirmPassword = formData.get("confirmPassword");

        if (credentials.password !== confirmPassword) {
            setError("Passwords do not match");
            return setIsLoading(false);
        }

        const res = await signUp(credentials);
        if (res.status === "success") {
            router.push('/login')
        } else {
            setError(res.status)
        }
        setIsLoading(false)
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[90%] sm:w-[60%] md:w-[45%] lg:w-[38%] xl:w-[32%]">
                <form className="shadow-lg p-6 rounded-md" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold text-center">Register</h1>

                    <fieldset className="flex flex-col gap-4 mt-4">
                        <legend className="sr-only">Registration Form</legend>

                        {/* Username */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-lg font-medium text-primary">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="john-doe"
                                className="border-2 py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary"
                                onChange={() => setError(null)}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
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

                        {/* Password */}
                        <div className="flex flex-col gap-1">
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

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="confirm-password" className="text-lg font-medium text-primary">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirmPassword"
                                placeholder="********"
                                className="border-2 py-3 px-4 rounded-xl focus:ring-2 focus:ring-primary"
                                onChange={() => setError(null)}
                                required
                            />
                        </div>
                    </fieldset>

                    {/* Errors */}
                    {error && (
                        <div className="mt-1 text-center text-sm">
                            <p className="text-red-500">*{error}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button type="submit" className="bg-primary w-full rounded-md py-3 hover:bg-secondary cursor-pointer mt-3 flex justify-center items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isloading}>
                        Create Account
                        {isloading && (
                            <span className="loader"></span>
                        )}
                    </button>

                    {/* Already have an account? */}
                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Already have an account?
                            <Link href="/login" className="text-secondary ml-1 cursor-pointer hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
