import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase/client"

// This would normally fetch from Supabase
const sampleNotices = [
  {
    id: "1",
    title: "Summer Vacation Announcement",
    content: "School will remain closed from June 1st to June 30th for summer vacation.",
    date: "2024-05-15",
    priority: "high",
  },
  {
    id: "2",
    title: "Parent-Teacher Meeting",
    content: "Parent-Teacher meeting scheduled for May 25th, 2024 at 9:00 AM.",
    date: "2024-05-10",
    priority: "medium",
  },
  {
    id: "3",
    title: "Sports Day Celebration",
    content: "Annual Sports Day will be held on May 30th, 2024.",
    date: "2024-05-05",
    priority: "low",
  },
]

export default function NoticesPage() {
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

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Notices & Announcements</h1>
        <p className="text-gray-600 text-center mb-12">
          Stay updated with the latest news and announcements from our school
        </p>

        <div className="space-y-4">
          {sampleNotices.map((notice) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}