import { supabase } from './client'
import { Notice } from '@/types'

export async function getNotices() {
  const { data, error } = await supabase
    .from('notices')
    .select('*')
    .order('date', { ascending: false })
  
  if (error) {
    console.error('Error fetching notices:', error)
    return []
  }
  
  return data as Notice[]
}

export async function createNotice(notice: Omit<Notice, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('notices')
    .insert([notice])
    .select()
  
  if (error) throw error
  return data[0]
}

export async function updateNotice(id: string, updates: Partial<Notice>) {
  const { data, error } = await supabase
    .from('notices')
    .update(updates)
    .eq('id', id)
    .select()
  
  if (error) throw error
  return data[0]
}

export async function deleteNotice(id: string) {
  const { error } = await supabase
    .from('notices')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  return true
}