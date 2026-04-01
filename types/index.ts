export interface Notice {
  id: string
  title: string
  content: string
  date: string
  priority: 'low' | 'medium' | 'high'
  created_at: string
}

export interface GalleryImage {
  id: string
  title: string
  description?: string
  image_url: string
  category: string
  date: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  order: number
}