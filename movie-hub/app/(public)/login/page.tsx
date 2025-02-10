import Link from "next/link";
import { SubmitButton } from "../../../components/auth/submit-button";
import { Metadata } from "next";
import { LoginForm } from "../../../components/auth/login/login-form";

export const metadata: Metadata = {
  title: "Log In",
};

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold text-gray-800">Login</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to login
          </p>
        </div>
        <LoginForm>
          <SubmitButton>Login</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Don't have an account? "}
            <Link href="/register" className="font-semibold text-gray-800">
              Sign up
            </Link>
            {" for free."}
          </p>
        </LoginForm>
      </div>
    </div>
  );
}
