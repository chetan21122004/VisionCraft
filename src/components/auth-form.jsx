// components/auth-form.tsx
'use client'
import AuthLayout from '@/app/auth/layout'
import { useState } from 'react'

export default function AuthForm() {
  const [isInstitution, setIsInstitution] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    institutionName: '',
    address: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        role: isInstitution ? 'institution' : 'user'
      })
    })

    const result = await response.json()
    if (result.success) {
      // Handle successful signup
    }
  }

  return (
    <AuthLayout 
      role={isInstitution ? 'institution' : 'user'}
      showAddressFields={isInstitution}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="w-full rounded border p-2 text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm text-gray-500">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
            className="w-full rounded border p-2 text-sm"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-emerald-500 text-white p-2 rounded"
        >
          {isInstitution ? 'Register Institution' : 'Sign Up'}
        </button>
      </form>
    </AuthLayout>
  )
}