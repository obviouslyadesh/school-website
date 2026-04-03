"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Upload } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

interface GalleryImage {
  id: string
  title: string
  description: string
  image_url: string
  category: string
}

export default function ManageGallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "general",
  })
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) toast.error("Failed to load gallery")
    else setImages(data || [])
    setLoading(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      toast.error("Please select an image")
      return
    }
    setUploading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(filePath, file)
    if (uploadError) {
      toast.error("Upload failed")
      setUploading(false)
      return
    }
    const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(filePath)

    const { error: dbError } = await supabase
      .from('gallery')
      .insert([{
        title: formData.title,
        description: formData.description,
        image_url: publicUrl,
        category: formData.category,
      }])
    if (dbError) {
      toast.error("Failed to save image data")
    } else {
      toast.success("Image uploaded")
      setFormData({ title: "", description: "", category: "general" })
      setFile(null)
      fetchImages()
    }
    setUploading(false)
  }

  const handleDelete = async (id: string, imageUrl: string) => {
    if (confirm("Delete this image?")) {
      const fileName = imageUrl.split('/').pop()
      if (fileName) {
        await supabase.storage.from('gallery').remove([fileName])
      }
      const { error } = await supabase.from('gallery').delete().eq('id', id)
      if (error) toast.error("Delete failed")
      else { toast.success("Deleted"); fetchImages() }
    }
  }

  return (
    <div>
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Manage Gallery</h1>
      <Card className="mb-8">
        <CardContent className="pt-6">
          <form onSubmit={handleUpload} className="space-y-4">
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
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full border rounded-md px-3 py-2"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <input type="file" accept="image/*" onChange={handleFileChange} required />
            </div>
            <Button type="submit" disabled={uploading}>
              <Upload className="h-4 w-4 mr-2" />
              {uploading ? "Uploading..." : "Upload Image"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {loading ? <p>Loading...</p> : (
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img) => (
            <Card key={img.id}>
              <CardContent className="pt-6">
                <img src={img.image_url} alt={img.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="font-semibold">{img.title}</h3>
                <p className="text-sm text-gray-500">{img.category}</p>
                <Button variant="destructive" size="sm" className="mt-2" onClick={() => handleDelete(img.id, img.image_url)}>
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}