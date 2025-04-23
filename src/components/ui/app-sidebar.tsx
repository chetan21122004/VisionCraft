"use client"

import { usePathname } from "next/navigation"
import { BarChart3, Building2, Package, ShoppingCart, FileText, Book } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  
} from "./sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      href: "/admin/",
      icon: BarChart3,
    },
    {
      title: "NGOs",
      href: "/admin/ngos",
      icon: Building2,
    },
    {
      title: "Institution notebooks ",
      href: "/admin/uploaded-notebooks",
      icon: Book,
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: ShoppingCart,
    },
    {
      title: "Inventory",
      href: "/admin/inventory",
      icon: Package,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: FileText,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-600 text-white">
            <Book className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">VisionCraft</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
            {routes.map((route) => (
              <button
              key={route.href}
              className={cn(
                "flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100",
                pathname === route.href && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              onClick={() => (window.location.href = route.href)}
              >
              <route.icon className="h-5 w-5" />
              <span>{route.title}</span>
              </button>
            ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

