"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { userAgent } from "next/server";

export const signUp = async ({ username, email, password }) => {
    const supabase = await createClient();

    const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { username },
        },
    });

    if (error) {
        return { status: error?.message, user: null };
    }
    if (!data?.user) {
        return { status: "User already exists, please login", user: null };
    }

    return { status: "success", user: data.user };
};

export const signIn = async ({ email, password }) => {
    if (!email || !password) {
        return { status: "Email and password are required", user: null };
    }

    const supabase = await createClient();

    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return { status: error.message || "An error occurred", user: null };
    }

    return { status: "success", user: data.user };
}

export const signOut = async () => {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut();
    if (error) {
        redirect("/error")
    }
    redirect("/login")
}

export const getCurrentUser = async () => {
    const supabase = await createClient();

    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.error("Error fetching user", error.message);
        return null;
    }

    return user;

}

export const sendPasswordResetEmail = async ({ email }) => {
    const supabase = await createClient();
    
    // Get the origin safely
    const origin = (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    // Send reset email with redirect link
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/reset-password`,
    });

    if (error) {
        console.error("Error sending reset email:", error);
        return { status: "error", message: error.message };
    }

    return { status: "success", message: "Reset Email sent!" };
};


export const resetPassword = async ({ password, code }) => {
    const supabase = await createClient();
    if (!code) {
        return { status: "error", message: "Invalid or missing reset code." };
    }
    console.log("Reset code received:", code);


    // Exchange the reset token (code) for a session
    const { error: codeError } = await supabase.auth.exchangeCodeForSession(code);
    if (codeError) {
        console.error("Code exchange error:", codeError);
        return { status: "error", message: codeError.message };
    }

    // Update the user's password
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
        console.error("Password update error:", error);
        return { status: "error", message: error.message };
    }

    return { status: "success", message: "Password reset successfully" };
};
