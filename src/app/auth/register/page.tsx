"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Mail, Lock, Home, Building, Phone } from "lucide-react"
import RoleSelector from "@/components/role-selector"

// Define the Role type locally
type Role = "college" | "retailers" | "users"

export default function RegisterPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<Role>("college")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  // Address fields for institutions
  const [address, setAddress] = useState("")

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const userData = {
    role: selectedRole, // Make sure this matches your backend ('college' or 'user')
    fullName,
    email,
    password,
    contact,
    address // This is now a string
  };

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    const responseData = await response.json();

    if (response.ok) {
      // Store the user data in localStorage
      switch(selectedRole) {
        case 'college':
          localStorage.setItem('AuthCollege', JSON.stringify(responseData.data));
          window.location.href = "/college";
          break;
        case 'users':
          localStorage.setItem('AuthCustomer', JSON.stringify(responseData.data));
          window.location.href = "/customer";
          break;
        case 'retailers':
          localStorage.setItem('AuthRetailer', JSON.stringify(responseData.data));
          window.location.href = "/retailers";
          break;
        default:
          console.error('Unknown selectedRole:', selectedRole);
      }
      // Use router.push for client-side navigation
      if (selectedRole === "college") {
        router.push("/college");
      } else if (selectedRole === "users") {
        router.push("/coustomer");
      } else {
        router.push("/retailers");
      }
    } else {
      throw new Error(responseData.error || "Registration failed");
    }
   

  } catch (error) {
    alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

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
            {selectedRole === "college" ? "Institution Name" : "Full Name"}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              {selectedRole === "college" ? (
                <Building className="h-5 w-5" />
              ) : (
                <User className="h-5 w-5" />
              )}
            </div>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder={selectedRole === "college" ? "Enter institution name" : "Enter your full name"}
              required
            />
          </div>
        </div>

        {/* Common fields */}
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
  <label htmlFor="contact" className="text-sm font-medium">
    Contact Number
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
      <Phone className="h-5 w-5" />
    </div>
    <input
      id="contact"
      type="tel"
      value={contact}
      onChange={(e) => setContact(e.target.value)}
      className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      placeholder="Enter your contact number"
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


        <div className="space-y-1">
          <label htmlFor="street" className="text-sm font-medium">
            Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <Home className="h-5 w-5" />
            </div>
            <input
              id="street"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Enter street address"
              required
            />
          </div>
        </div>




        <button
          type="submit"
          className="w-full rounded-md bg-emerald-500 py-2 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Sign Up as {selectedRole === "college" ? "Institution" : selectedRole === "retailers" ? "Retailer" : "User"}
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