// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react"
// import Link from "next/link"

// export default function Home() {
//   const stats = [
//     { icon: Users, label: "Students", value: "1,200+" },
//     { icon: GraduationCap, label: "Teachers", value: "85+" },
//     { icon: Trophy, label: "Awards", value: "50+" },
//     { icon: BookOpen, label: "Courses", value: "30+" },
//   ]

//   return (
//     <div>
//       {/* Hero Section */}
//       {/* <section className="relative bg-gradient-to-r from-silver-600 to-yellow-800 text-white py-20"> */}
//       <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Welcome to Best School
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
//             Nurturing Young Minds, Building Bright Futures
//           </p>
//           <div className="flex gap-4 justify-center">
//             <Button asChild size="lg" variant="secondary">
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-blue hover:text-black-600">
//               <Link href="/about/why-us">Learn More</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {/* <section className="py-16 bg-gray-50"> */}
//       <section className="h-12 w-12 text-amber-500 mx-auto mb-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon
//               return (
//                 <Card key={index} className="text-center">
//                   <CardContent className="pt-6">
//                     <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//                     <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
//                     <div className="text-gray-600 mt-2">{stat.label}</div>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* About Preview */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">About Our School</h2>
//               <p className="text-gray-600 mb-6">
//                 We are committed to providing excellence in education, fostering creativity, 
//                 and developing well-rounded individuals who are prepared to face the challenges 
//                 of tomorrow.
//               </p>
//               <ul className="space-y-2 text-gray-600 mb-6">
//                 <li>✓ Modern facilities and technology</li>
//                 <li>✓ Experienced and dedicated teachers</li>
//                 <li>✓ Comprehensive curriculum</li>
//                 <li>✓ Focus on holistic development</li>
//               </ul>
//               <Button asChild>
//                 <Link href="/about/why-us">Read More</Link>
//               </Button>
//             </div>
//             <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
//               <p className="text-gray-500">School Image Placeholder</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



// #golden color 

// import { But



// normal without image slider
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react"
// import Link from "next/link"

// export default function Home() {
//   const stats = [
//     { icon: Users, label: "Enrolled Students", value: "1,200" },
//     { icon: GraduationCap, label: "Expert Faculty", value: "85" },
//     { icon: Trophy, label: "Global Awards", value: "50" },
//     { icon: BookOpen, label: "Curriculums", value: "30" },
//   ]

//   return (
//     <div className="min-h-screen bg-white selection:bg-slate-900 selection:text-white">
//       {/* Hero Section - Minimalist & Airy */}
//       <section className="relative bg-white text-slate-900 py-32 border-b border-slate-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//           <span className="inline-block text-amber-600 font-medium tracking-[0.2em] uppercase text-xs mb-6">
//             Est. 1995 — Excellence in Education
//           </span>
//           <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tighter text-slate-950">
//             Nurturing <span className="font-semibold text-slate-900">Young Minds</span>
//           </h1>
//           <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-slate-500 font-light leading-relaxed">
//             A sanctuary for academic rigor and creative exploration, shaping the leaders of a modern world.
//           </p>
//           <div className="flex gap-6 justify-center items-center">
//             <Button asChild size="lg" className="rounded-none px-8 bg-slate-950 text-white hover:bg-slate-800 transition-all duration-300">
//               <Link href="/contact">Contact Us</Link>
//             </Button>
//             <Link href="/about/why-us" className="text-sm font-medium border-b border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section - Flat Minimalist */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-slate-100">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon
//               return (
//                 <div key={index} className="p-10 border-r border-b border-slate-100 group hover:bg-slate-50 transition-colors">
//                   <Icon className="h-6 w-6 text-slate-400 group-hover:text-amber-600 transition-colors mb-6" strokeWidth={1.5} />
//                   <div className="text-4xl font-light text-slate-900 mb-1">{stat.value}</div>
//                   <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">{stat.label}</div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* About Preview - Asymmetric Layout */}
//       <section className="py-32 bg-slate-50/50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-20 items-start">
//             <div className="sticky top-10">
//               <h2 className="text-sm uppercase tracking-[0.3em] text-amber-600 font-semibold mb-6">Our Philosophy</h2>
//               <h3 className="text-4xl font-light mb-8 text-slate-900 leading-tight">
//                 Beyond the classroom, <br/> we build character.
//               </h3>
//               <p className="text-slate-500 text-lg mb-8 font-light leading-relaxed">
//                 We believe that true education is a journey of self-discovery. Our modern campus provides the canvas; our students provide the vision.
//               </p>
//               <Button asChild variant="outline" className="rounded-none border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all px-10">
//                 <Link href="/about/why-us">Discover More</Link>
//               </Button>
//             </div>
            
//             <div className="space-y-12">
//               {/* Image with extreme minimalist styling */}
//               <div className="aspect-[4/5] bg-slate-200 overflow-hidden shadow-2xl">
//                  <div className="w-full h-full flex items-center justify-center text-slate-400 uppercase tracking-widest text-xs italic">
//                    Campus Architectural View
//                  </div>
//               </div>
//               <div className="grid grid-cols-2 gap-8">
//                 <div className="space-y-2">
//                    <h4 className="font-medium text-slate-900">Holistic Growth</h4>
//                    <p className="text-sm text-slate-500 font-light">Balancing arts, athletics, and academic rigor.</p>
//                 </div>
//                 <div className="space-y-2">
//                    <h4 className="font-medium text-slate-900">Global Vision</h4>
//                    <p className="text-sm text-slate-500 font-light">Preparing students for international success.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Trophy, BookOpen, ArrowRight } from "lucide-react"

// 1. IMPORT YOUR IMAGES (High Performance Import)

import HeroOne from "../assets/images/hero-1.jpg"
import HeroTwo from "../assets/images/hero-2.jpg"
import HeroThree from "../assets/images/hero-3.jpg"
import HeroFour from "../assets/images/hero-4.jpg"

const heroImages = [HeroOne, HeroTwo, HeroThree, HeroFour]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-cycle slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Users, label: "Enrolled Students", value: "1,200" },
    { icon: GraduationCap, label: "Expert Faculty", value: "85" },
    { icon: Trophy, label: "Global Awards", value: "50" },
    { icon: BookOpen, label: "Curriculums", value: "30" },
  ]

  return (
    <main className="min-h-screen bg-white selection:bg-slate-950 selection:text-white">
      
      {/* --- HERO SECTION WITH OPTIMIZED SLIDER --- */}
      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden border-b border-slate-50">
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Subtle overlay to maintain text contrast */}
              <div className="absolute inset-0 bg-white/40 z-10" />
              <Image
                src={heroImages[currentImage]}
                alt="School Campus Life"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-amber-600 font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs mb-8"
          >
            Est. 1995 — A Legacy of Excellence
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-8xl font-extralight mb-8 tracking-tighter text-slate-950 leading-[1.1]"
          >
            Nurturing <span className="font-semibold text-slate-900">Young Minds</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-slate-700 font-light leading-relaxed"
          >
            A sanctuary for academic rigor and creative exploration, shaping the visionary leaders of a modern world.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Button asChild size="lg" className="rounded-none px-12 py-7 bg-slate-950 text-white hover:bg-slate-800 transition-all duration-300 w-full sm:w-auto text-xs uppercase tracking-widest">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Link href="/about/why-us" className="group text-xs uppercase tracking-widest font-bold border-b border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all flex items-center gap-2">
              Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Minimalist Progress Indicators */}
          <div className="absolute bottom-12 flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`h-[2px] transition-all duration-700 ${
                  i === currentImage ? "w-12 bg-slate-900" : "w-6 bg-slate-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (BORDER-GRID STYLE) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-slate-100">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="p-12 border-r border-b border-slate-100 group hover:bg-slate-50/50 transition-colors">
                  <Icon className="h-5 w-5 text-slate-300 group-hover:text-amber-600 transition-colors mb-8" strokeWidth={1.5} />
                  <div className="text-4xl font-light text-slate-950 mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- ABOUT PREVIEW (ASYMMETRIC) --- */}
      <section className="py-32 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            
            {/* Text Content */}
            <div className="md:col-span-5 sticky top-24">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold mb-8">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-light mb-10 text-slate-950 leading-[1.15] tracking-tighter">
                Beyond the classroom, <br/> we build <span className="italic font-serif">character</span>.
              </h3>
              <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed">
                We believe that true education is a journey of self-discovery. Our modern campus provides the canvas; our students provide the vision for a sustainable future.
              </p>
              <Button asChild variant="outline" className="rounded-none border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white transition-all px-10 py-6 h-auto text-xs uppercase tracking-widest">
                <Link href="/about/why-us">Read Our Full Story</Link>
              </Button>
            </div>
            
            {/* Visuals Content */}
            <div className="md:col-span-7 space-y-16">
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden shadow-[40px_40px_80px_-40px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.01] duration-700">
                 {/* Placeholder for a high-quality vertical shot of the library or building */}
                 <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                    <span className="text-slate-300 uppercase tracking-widest text-[10px] mb-4">Architectural Perspective</span>
                    <div className="w-px h-20 bg-slate-200 mb-4" />
                    <p className="text-slate-400 text-sm font-light italic uppercase tracking-wider underline underline-offset-8">Modern Campus Atrium</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-12">
                <div className="space-y-4">
                   <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900">Holistic Growth</h4>
                   <p className="text-sm text-slate-500 font-light leading-relaxed italic">A perfect balance between competitive arts, athletics, and academic rigor.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="text-xs uppercase tracking-widest font-bold text-slate-900">Global Vision</h4>
                   <p className="text-sm text-slate-500 font-light leading-relaxed italic">Curriculums designed to prepare students for international success and Ivy League paths.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}