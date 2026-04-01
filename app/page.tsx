import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const stats = [
    { icon: Users, label: "Students", value: "1,200+" },
    { icon: GraduationCap, label: "Teachers", value: "85+" },
    { icon: Trophy, label: "Awards", value: "50+" },
    { icon: BookOpen, label: "Courses", value: "30+" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to School Name
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nurturing Young Minds, Building Bright Futures
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link href="/about/why-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600 mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our School</h2>
              <p className="text-gray-600 mb-6">
                We are committed to providing excellence in education, fostering creativity, 
                and developing well-rounded individuals who are prepared to face the challenges 
                of tomorrow.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Modern facilities and technology</li>
                <li>✓ Experienced and dedicated teachers</li>
                <li>✓ Comprehensive curriculum</li>
                <li>✓ Focus on holistic development</li>
              </ul>
              <Button asChild>
                <Link href="/about/why-us">Read More</Link>
              </Button>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">School Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}