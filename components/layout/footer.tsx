// import Link from "next/link"
// import { Mail, Phone, MapPin } from "lucide-react"
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* About */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">School Name</h3>
//             <p className="text-gray-400 text-sm">
//               Providing quality education since 2006. Shaping young minds for a better tomorrow.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about/why-us" className="text-gray-400 hover:text-white text-sm">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/notices" className="text-gray-400 hover:text-white text-sm">
//                   Notices
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/gallery" className="text-gray-400 hover:text-white text-sm">
//                   Gallery
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center gap-2 text-gray-400 text-sm">
//                 <MapPin className="h-4 w-4" />
//                 123 School Street, City, Nepal
//               </li>
//               <li className="flex items-center gap-2 text-gray-400 text-sm">
//                 <Phone className="h-4 w-4" />
//                 +977 9800000000
//               </li>
//               <li className="flex items-center gap-2 text-gray-400 text-sm">
//                 <Mail className="h-4 w-4" />
//                 babalschool@gamil.com
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaFacebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaTwitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaInstagram size={20} />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
//           <p>&copy; 2026 School Name. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }



import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Identity - Taking up more space for impact */}
          <div className="md:col-span-5">
            <Link href="/" className="group flex flex-col leading-none mb-6">
              <span className="text-xl font-bold tracking-tighter uppercase">
                Babal School
              </span>
              <span className="text-[10px] tracking-[0.3em] text-amber-600 uppercase mt-1 font-medium">
                Established 1995
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              Dedicated to the pursuit of academic distinction and the development of 
              character in an ever-evolving global landscape.
            </p>
            <div className="flex space-x-5 mt-8">
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition-colors duration-300">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-6">Navigation</h3>
            <ul className="space-y-4">
              {["About Us", "Notices", "Contact", "Gallery"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "-")}`} 
                    className="text-slate-500 hover:text-slate-950 text-sm font-light transition-colors border-b border-transparent hover:border-slate-200 pb-0.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-6">Registry</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-500 text-sm font-light">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-600" strokeWidth={1.5} />
                <span>123 School Street, <br />City, Nepal</span>
              </li>
              <li className="flex items-center gap-4 text-slate-500 text-sm font-light">
                <Phone className="h-4 w-4 text-amber-600" strokeWidth={1.5} />
                +977 9800000000
              </li>
              <li className="flex items-center gap-4 text-slate-500 text-sm font-light">
                <Mail className="h-4 w-4 text-amber-600" strokeWidth={1.5} />
                hello@babalschool.edu.np
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="border-t border-slate-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[11px] uppercase tracking-widest leading-none">
            &copy; 2026 Babal School. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-slate-400 hover:text-slate-900 text-[11px] uppercase tracking-widest transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-slate-900 text-[11px] uppercase tracking-widest transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}