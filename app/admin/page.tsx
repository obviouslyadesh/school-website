"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/admin/login')
      } else {
        setUser(session.user)
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.push('/admin/login')
      } else {
        setUser(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  if (!user) return null

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Notices</h2>
            <p className="text-gray-600 mb-4">Add, edit, or remove notices</p>
            <button className="text-blue-600">Go to Notices →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Manage FAQs</h2>
            <p className="text-gray-600 mb-4">Update frequently asked questions</p>
            <button className="text-blue-600">Go to FAQs →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Contact Messages</h2>
            <p className="text-gray-600 mb-4">View messages from visitors</p>
            <button className="text-blue-600">View Messages →</button>
          </div>
        </div>
      </div>
    </div>
  )
}




