"use client";

import { resetPassword, signIn } from "@/actions/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ResetPassword = () => {

    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const credentials = {
            password: formData.get("password"),
        }
        const confirmPassword = formData.get("confirmPassword");

        if (credentials.password !== confirmPassword) {
            setError("Passwords do not match");
            return setIsLoading(false);
        }

        const res = await resetPassword({
            password: credentials.password,
            code: searchParams.get("code"),
        });
        if (res.status === "success") {
            router.push('/')
        } else {
            setError(res.message)
        }
        setIsLoading(false)
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[90%] sm:w-[60%] md:w-[45%] lg:w-[38%] xl:w-[32%]">
                <form className="shadow-lg p-6 rounded-md w-full" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold text-center">Reset Password</h1>

                    <fieldset className="flex flex-col gap-4 mt-4">
                        <legend className="sr-only">NewPassword Form</legend>

                        {/* Password Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-lg font-medium text-primary">New Password</label>
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

                        {/* Confirm Password Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-lg font-medium text-primary">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
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

                    {/* ResetPassword Button */}
                    <button type="submit" className="bg-primary w-full rounded-md py-3 hover:bg-secondary cursor-pointer mt-3 flex justify-center items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={isloading}>
                        Create New Password
                        {isloading && (
                            <span className="loader"></span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
