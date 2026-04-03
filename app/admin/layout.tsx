"use client"


import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { LogOut, LayoutDashboard, Megaphone, HelpCircle, Images, Mail, ChevronRight } from "lucide-react"

const adminNavItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Notices", href: "/admin/notices", icon: Megaphone },
  { name: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { name: "Gallery", href: "/admin/gallery", icon: Images },
  { name: "Messages", href: "/admin/messages", icon: Mail },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  // Find the current active item for the dynamic header
  const activeItem = adminNavItems.find(item => item.href === pathname) || { name: "Dashboard" }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#FDFEFE] flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      
      {/* --- 1. TOP NAVIGATION --- */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* BRANDING */}
            <Link href="/" className="group flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tighter text-slate-950 uppercase">
                Babal School
              </span>
              <span className="text-[9px] tracking-[0.3em] text-amber-600 uppercase mt-1 font-semibold">
                Registry Portal
              </span>
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden md:flex items-center space-x-1">
              {adminNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isActive 
                        ? "bg-slate-950 text-white" 
                        : "text-slate-400 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-6">
              <button
                onClick={handleLogout}
                className="text-slate-400 hover:text-red-600 transition-all flex items-center gap-2 group"
              >
                 <LogOut size={14} />
                 <span className="text-xs font-bold uppercase tracking-widest">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- 2. DYNAMIC PAGE HEADER --- */}
      <section className="bg-white border-b border-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-3 font-bold">
            <span>Admin</span>
            <ChevronRight size={10} />
            <span className="text-amber-600">{activeItem.name}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 italic">
            Manage {activeItem.name}
          </h1>
        </div>
      </section>

      {/* --- 3. MAIN CONTENT LAYER --- */}
      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-12 py-12 w-full">
        {children}
      </main>

      {/* --- 4. BALANCED FOOTER --- */}
      <footer className="mt-auto py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">
                  Babal School Administration
               </span>
               <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">
                  Confidential System &bull; 2026 
               </span>
            </div>
            
            <div className="flex gap-8">
               <Link href="/admin/messages" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900">Help Desk</Link>
               <Link href="/" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900">View Live Site</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}