// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// const navItems = [
//   { name: "Home", href: "/" },
//   {
//     name: "About Us",
//     href: "#",
//     dropdown: [
//       { name: "Why Us", href: "/about/why-us" },
//       { name: "Mission", href: "/about/mission" },
//       { name: "Facilities", href: "/about/facilities" },
//       { name: "Principal's Message", href: "/about/principal-message" },
//       { name: "Gallery", href: "/gallery" },
//       { name: "FAQs", href: "/faqs" },
//     ],
//   },
//   { name: "Notices", href: "/notices" },
//   { name: "Contact", href: "/contact" },
// ]

// export function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-blue-600">
//               Babal School
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             {navItems.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
//                         {item.name}
//                         <ChevronDown className="ml-1 h-4 w-4" />
//                       </button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       {item.dropdown.map((subItem) => (
//                         <DropdownMenuItem key={subItem.name} asChild>
//                           <Link href={subItem.href} className="w-full cursor-pointer">
//                             {subItem.name}
//                           </Link>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <div className="space-y-1">
//                     <div className="px-3 py-2 text-gray-700 font-medium">
//                       {item.name}
//                     </div>
//                     <div className="pl-4 space-y-1">
//                       {item.dropdown.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           href={subItem.href}
//                           className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    dropdown: [
      { name: "Why Us", href: "/about/why-us" },
      { name: "Our Philosophy", href: "/about/mission" },
      { name: "Facilities", href: "/about/facilities" },
      { name: "Principal's Desk", href: "/about/principal-message" },
      { name: "Gallery", href: "/gallery" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  { name: "Notices", href: "/notices" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo - Refined Typography */}
          <div className="flex items-center">
            <Link href="/" className="group flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tighter text-slate-950 uppercase">
                Babal School
              </span>
              <span className="text-[10px] tracking-[0.3em] text-amber-600 uppercase mt-1 font-medium overflow-hidden">
                Excellence since 1995
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-slate-500 hover:text-slate-950 transition-colors text-xs uppercase tracking-widest font-medium group">
                        {item.name}
                        <ChevronDown className="ml-1 h-3 w-3 text-slate-400 group-hover:text-amber-600 transition-colors" strokeWidth={1.5} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-none border-slate-100 shadow-xl min-w-[180px] p-2">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild className="focus:bg-slate-50 focus:text-slate-950 rounded-none cursor-pointer">
                          <Link href={subItem.href} className="w-full py-2 px-3 text-xs uppercase tracking-wider text-slate-600">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-slate-950 transition-colors text-xs uppercase tracking-widest font-medium border-b border-transparent hover:border-slate-950 pb-1"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Added a distinctive CTA for the contact button */}
            <Button asChild variant="outline" className="rounded-none border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white transition-all text-xs uppercase tracking-widest px-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-950"
            >
              {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Minimalist Reveal */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 pt-4 pb-8 space-y-6">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">
                      {item.name}
                    </div>
                    <div className="pl-4 flex flex-col space-y-4 border-l border-slate-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-sm text-slate-600 hover:text-amber-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-sm uppercase tracking-widest text-slate-900 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="w-full rounded-none bg-slate-950 text-white py-6">
               <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}