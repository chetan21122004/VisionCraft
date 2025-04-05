"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { User, Mail, Lock } from "lucide-react"
import RoleSelector, { type Role } from "@/components/role-selector"

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<Role>("institution")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would implement the actual registration logic
    console.log("Registration attempt:", { selectedRole, fullName, email, password })
    // You would typically make an API call here
  }

  return (
    <>
      <div className="flex border-b">
        <Link href="/auth/login" className="flex-1 py-2 text-center font-medium text-gray-500 hover:text-gray-700">
          Login
        </Link>
        <Link
          href="/auth/register"
          className="flex-1 border-b-2 border-emerald-500 py-2 text-center font-medium text-emerald-500"
        >
          Sign Up
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4">
        <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />

        <div className="space-y-1">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <User className="h-5 w-5" />
            </div>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

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

        <div className="space-y-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Lock className="h-5 w-5" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 py-2 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Sign Up
        </button>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-emerald-500 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </>
  )
}

