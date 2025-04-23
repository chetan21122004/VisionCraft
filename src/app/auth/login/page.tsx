"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock } from "lucide-react"
import RoleSelector from "@/components/role-selector"
import { useRouter } from "next/navigation"

// Define the Role type locally
type Role = "college" | "retailers" | "users"

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<Role>("college")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const loginData = {
      role: selectedRole,
      email,
      password,
      rememberMe,
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })
      
      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData,selectedRole);
          switch(selectedRole) {
            case 'college':
              localStorage.setItem('AuthCollege', JSON.stringify(responseData.data));
              window.location.href = "/college";
              break;
            case 'users':
              localStorage.setItem('AuthCustomer', JSON.stringify(responseData.data));
              window.location.href = "/coustomer";
              break;
            case 'retailers':
              localStorage.setItem('AuthRetailer', JSON.stringify(responseData.data));
              window.location.href = "/retailers";
              break;
            default:
              console.error('Unknown selectedRole:', selectedRole);
          }
        
        if (selectedRole === "college") {
          router.push("/college");
        } else if (selectedRole === "users") {
          router.push("/coustomer");
        } else {
          router.push("/retailers");
        }
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Login failed")
      }
    } catch (error) {
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <>
      <div className="flex border-b">
        <Link
          href="/auth/login"
          className="flex-1 border-b-2 border-emerald-500 py-2 text-center font-medium text-emerald-500"
        >
          Login
        </Link>
        <Link href="/auth/register" className="flex-1 py-2 text-center font-medium text-gray-500 hover:text-gray-700">
          Sign Up
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4">
        <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email or Mobile Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Mail className="h-5 w-5" />
            </div>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Enter your email or mobile number"
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

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <Link href="/auth/forgot-password" className="text-sm text-emerald-500 hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 py-2 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </>
  )
}

