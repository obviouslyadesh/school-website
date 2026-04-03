"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  is_read: boolean
  created_at: string
}

export default function ViewMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) toast.error("Failed to load messages")
    else setMessages(data || [])
    setLoading(false)
  }

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from('contact_messages')
      .update({ is_read: true })
      .eq('id', id)
    if (error) toast.error("Failed to update")
    else {
      toast.success("Marked as read")
      fetchMessages()
    }
  }

  return (
    <div>
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
      {loading ? <p>Loading...</p> : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card key={msg.id} className={!msg.is_read ? "border-blue-400" : ""}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{msg.subject}</CardTitle>
                    <p className="text-sm text-gray-500">From: {msg.name} &lt;{msg.email}&gt;</p>
                    <p className="text-xs text-gray-400">{new Date(msg.created_at).toLocaleString()}</p>
                  </div>
                  {!msg.is_read && (
                    <Button size="sm" onClick={() => markAsRead(msg.id)}>
                      <CheckCircle className="h-4 w-4 mr-1" /> Mark Read
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{msg.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}