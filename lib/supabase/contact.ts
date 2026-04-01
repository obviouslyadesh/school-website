import { supabase } from './client'

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactMessage(message: ContactMessage) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([message])
    .select()
  
  if (error) throw error
  return data[0]
}

export async function getContactMessages() {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function markMessageAsRead(id: string) {
  const { error } = await supabase
    .from('contact_messages')
    .update({ is_read: true })
    .eq('id', id)
  
  if (error) throw error
  return true
}