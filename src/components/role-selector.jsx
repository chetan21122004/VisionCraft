"use client"


import { Building2, ShoppingBag, User } from "lucide-react"




export default function RoleSelector({ selectedRole, onRoleChange }) {
  const roles = [
    {
      id: "college",
      label: "College",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      id: "retailers",
      label: "Retailers",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      id: "users",
      label: "users",
      icon: <User className="h-5 w-5" />,
    },
  ]

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Choose your role:</p>
      <div className="grid grid-cols-3 gap-3">
        {roles.map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => onRoleChange(role.id)}
            className={`flex flex-col items-center justify-center rounded-md border p-3 transition-all ${
              selectedRole === role.id
                ? "border-emerald-500 bg-emerald-50 text-emerald-500"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {role.icon}
            <span className="mt-1 text-xs">{role.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

