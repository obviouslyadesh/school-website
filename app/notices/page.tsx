"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getNotices } from "@/lib/supabase/notices"
import { Notice } from "@/types"

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNotices()
  }, [])

  const loadNotices = async () => {
    setLoading(true)
    const data = await getNotices()
    setNotices(data)
    setLoading(false)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p>Loading notices...</p>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Notices & Announcements</h1>
        <p className="text-gray-600 text-center mb-12">
          Stay updated with the latest news and announcements from our school
        </p>

        <div className="space-y-4">
          {notices.length === 0 ? (
            <p className="text-center text-gray-500">No notices available at the moment.</p>
          ) : (
            notices.map((notice) => (
              <Card key={notice.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{notice.title}</CardTitle>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        notice.priority
                      )}`}
                    >
                      {notice.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{notice.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{notice.content}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}