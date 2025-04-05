import type React from "react"
import { AppSidebar } from "@/components/ui/app-sidebar"
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
  )
}

