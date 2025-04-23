"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the actual password reset logic
    console.log("Password reset request for:", email)
    // You would typically make an API call here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="space-y-4 pt-4 text-center">
        <h2 className="text-xl font-bold">Check Your Email</h2>
        <p className="text-gray-600">
          We&apos;ve sent a password reset link to <strong>{email}</strong>
        </p>
        <p className="text-sm text-gray-500">
          Didn&apos;t receive the email? Check your spam folder or{" "}
          <button onClick={() => setSubmitted(false)} className="text-emerald-500 hover:underline">
            try again
          </button>
        </p>
        <div className="pt-4">
          <Link href="/auth/login" className="text-emerald-500 hover:underline">
            Return to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-4 pt-4 text-center">
        <h2 className="text-xl font-bold">Forgot Password</h2>
        <p className="text-gray-600">Enter your email address and we&apos;ll send you a link to reset your password.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4">
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 py-2 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Send Reset Link
        </button>

        <div className="text-center text-sm">
          <Link href="/auth/login" className="text-emerald-500 hover:underline">
            Back to login
          </Link>
        </div>
      </form>
    </>
  )
}

