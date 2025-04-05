'use client';

import React from "react";
import { cn } from "@/lib/utils"; // this should exist if you used shadcn init
import { Button } from "@/components/ui/button";

export function Sidebar({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <aside className={cn("w-64 bg-gray-100 p-4", className)}>{children}</aside>;
}

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return <div className="font-bold text-lg mb-4">{children}</div>;
}

export function SidebarContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function SidebarMenu({ children }: { children: React.ReactNode }) {
  return <nav className="flex flex-col gap-2">{children}</nav>;
}

export function SidebarMenuItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return <Button variant="ghost" className="justify-start" onClick={onClick}>{label}</Button>;
}

export function SidebarMenuButton({ icon, label }: { icon?: React.ReactNode; label: string }) {
  return (
    <Button variant="ghost" className="flex items-center gap-2 justify-start">
      {icon}
      {label}
    </Button>
  );
}
