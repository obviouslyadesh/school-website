import { supabase } from './client'
import { FAQ } from '@/types'

export async function getFAQs() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .eq('is_active', true)
    .order('order_num', { ascending: true })
  
  if (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
  
  return data as FAQ[]
}

export async function createFAQ(faq: Omit<FAQ, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('faqs')
    .insert([faq])
    .select()
  
  if (error) throw error
  return data[0]
}

export async function updateFAQ(id: string, updates: Partial<FAQ>) {
  const { data, error } = await supabase
    .from('faqs')
    .update(updates)
    .eq('id', id)
    .select()
  
  if (error) throw error
  return data[0]
}

export async function deleteFAQ(id: string) {
  const { error } = await supabase
    .from('faqs')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}