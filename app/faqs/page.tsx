"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getFAQs } from "@/lib/supabase/faqs"
import { FAQ } from "@/types"

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    loadFAQs()
  }, [])

  const loadFAQs = async () => {
    setLoading(true)
    const data = await getFAQs()
    setFaqs(data)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p>Loading FAQs...</p>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about our school
        </p>

        <div className="space-y-4">
          {faqs.length === 0 ? (
            <p className="text-center text-gray-500">No FAQs available at the moment.</p>
          ) : (
            faqs.map((faq, index) => (
              <Card key={faq.id} className="cursor-pointer">
                <CardHeader onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <CardTitle className="text-lg flex justify-between items-center">
                    {faq.question}
                    <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                  </CardTitle>
                </CardHeader>
                {openIndex === index && (
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}