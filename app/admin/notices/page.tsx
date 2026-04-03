"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil, Trash2, Plus } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

interface Notice {
  id: string
  title: string
  content: string
  priority: string
  date: string
}

export default function ManageNotices() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    priority: "medium",
    date: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    fetchNotices()
  }, [])

  const fetchNotices = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('date', { ascending: false })
    if (error) {
      toast.error("Failed to load notices")
    } else {
      setNotices(data || [])
    }
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingNotice) {
      const { error } = await supabase
        .from('notices')
        .update(formData)
        .eq('id', editingNotice.id)
      if (error) {
        toast.error("Failed to update notice")
      } else {
        toast.success("Notice updated")
        fetchNotices()
        closeModal()
      }
    } else {
      const { error } = await supabase
        .from('notices')
        .insert([formData])
      if (error) {
        toast.error("Failed to create notice")
      } else {
        toast.success("Notice created")
        fetchNotices()
        closeModal()
      }
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this notice?")) {
      const { error } = await supabase
        .from('notices')
        .delete()
        .eq('id', id)
      if (error) {
        toast.error("Failed to delete")
      } else {
        toast.success("Notice deleted")
        fetchNotices()
      }
    }
  }

  const openEditModal = (notice: Notice) => {
    setEditingNotice(notice)
    setFormData({
      title: notice.title,
      content: notice.content,
      priority: notice.priority,
      date: notice.date,
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingNotice(null)
    setFormData({
      title: "",
      content: "",
      priority: "medium",
      date: new Date().toISOString().split('T')[0],
    })
  }

  return (
    <div>
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Notices</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4 mr-2" /> Add Notice
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {notices.map((notice) => (
            <Card key={notice.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{notice.title}</CardTitle>
                    <p className="text-sm text-gray-500">{notice.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => openEditModal(notice)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(notice.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{notice.content}</p>
                <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                  notice.priority === 'high' ? 'bg-red-100 text-red-800' :
                  notice.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {notice.priority.toUpperCase()}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">{editingNotice ? "Edit Notice" : "Add Notice"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea
                  required
                  rows={4}
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Priority</label>
                <select
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  required
                  className="w-full border rounded-md px-3 py-2"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={closeModal}>Cancel</Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}