
// Actually simpler to rewrite the page content to include the form or import a new LoginForm component.
// But wait, the LoginButton component ALREADY had the buttons. 
// I should probably make a new component for the form or just inline it here for simplicity as requested in the plan.
// Plan said "Replace simple LoginButton with a full Email/Password form".
// Let's inline the form logic here.

import LoginForm from "@/components/LoginForm"; // I'll create this next to keep page clean or just inline here.
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col items-center gap-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary-500 mb-2">CallDoc</h1>
                    <p className="text-gray-500">Your Personal Healthcare Assistant</p>
                </div>

                <div className="w-full bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-sm font-bold text-gray-900 mb-6 text-center">Sign in to continue</h2>

                    <LoginForm />

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-primary-600 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </div>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        By logging in, you agree to our Terms and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
