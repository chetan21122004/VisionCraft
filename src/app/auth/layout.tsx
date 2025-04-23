import type React from "react"
import Logo from "@/components/logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center space-y-2">
          <Logo />
          <p className="text-center text-sm text-gray-500">Sustainable Notebooks for a Better Future</p>
        </div>
        {children}
        <div className="text-center text-xs text-gray-500">
          <p>
            By signing up, you agree to our{" "}
            <a href="#" className="text-emerald-500 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-emerald-500 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p className="mt-2">
            Need help?{" "}
            <a href="#" className="text-emerald-500 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

