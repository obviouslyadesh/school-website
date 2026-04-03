"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil, Trash2, Plus, ArrowUp, ArrowDown } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

interface FAQ {
  id: string
  question: string
  answer: string
  order_num: number
  is_active: boolean
}

export default function ManageFAQs() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null)
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    order_num: 0,
    is_active: true,
  })

  useEffect(() => {
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('order_num', { ascending: true })
    if (error) toast.error("Failed to load FAQs")
    else setFaqs(data || [])
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingFaq) {
      const { error } = await supabase
        .from('faqs')
        .update(formData)
        .eq('id', editingFaq.id)
      if (error) toast.error("Update failed")
      else { toast.success("FAQ updated"); fetchFAQs(); closeModal() }
    } else {
      const { error } = await supabase
        .from('faqs')
        .insert([{ ...formData, order_num: faqs.length }])
      if (error) toast.error("Create failed")
      else { toast.success("FAQ created"); fetchFAQs(); closeModal() }
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Delete this FAQ?")) {
      const { error } = await supabase.from('faqs').delete().eq('id', id)
      if (error) toast.error("Delete failed")
      else { toast.success("Deleted"); fetchFAQs() }
    }
  }

  const handleReorder = async (id: string, direction: 'up' | 'down') => {
    const index = faqs.findIndex(f => f.id === id)
    if (direction === 'up' && index === 0) return
    if (direction === 'down' && index === faqs.length - 1) return
    const newFaqs = [...faqs]
    const swapIndex = direction === 'up' ? index - 1 : index + 1
    ;[newFaqs[index].order_num, newFaqs[swapIndex].order_num] = [newFaqs[swapIndex].order_num, newFaqs[index].order_num]
    ;[newFaqs[index], newFaqs[swapIndex]] = [newFaqs[swapIndex], newFaqs[index]]
    for (let i = 0; i < newFaqs.length; i++) {
      await supabase.from('faqs').update({ order_num: i }).eq('id', newFaqs[i].id)
    }
    fetchFAQs()
  }

  const openEditModal = (faq: FAQ) => {
    setEditingFaq(faq)
    setFormData({
      question: faq.question,
      answer: faq.answer,
      order_num: faq.order_num,
      is_active: faq.is_active,
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingFaq(null)
    setFormData({ question: "", answer: "", order_num: 0, is_active: true })
  }

  return (
    <div>
      <Toaster />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage FAQs</h1>
        <Button onClick={() => setIsModalOpen(true)}><Plus className="mr-2" /> Add FAQ</Button>
      </div>
      {loading ? <p>Loading...</p> : (
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={faq.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{faq.question}</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleReorder(faq.id, 'up')} disabled={idx === 0}><ArrowUp size={16} /></Button>
                    <Button variant="outline" size="sm" onClick={() => handleReorder(faq.id, 'down')} disabled={idx === faqs.length-1}><ArrowDown size={16} /></Button>
                    <Button variant="outline" size="sm" onClick={() => openEditModal(faq)}><Pencil size={16} /></Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(faq.id)}><Trash2 size={16} /></Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{faq.answer}</p>
                <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${faq.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {faq.is_active ? 'Active' : 'Inactive'}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {/* Modal similar to notices – omitted for brevity but same pattern */}
    </div>
  )
}