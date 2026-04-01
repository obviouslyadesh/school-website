export default function Page() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {getPageTitle()}
        </h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-600">
            Content coming soon. This page will be updated with detailed information.
          </p>
        </div>
      </div>
    </div>
  )
}

function getPageTitle() {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  switch (path) {
    case '/about/why-us':
      return 'Why Choose Us'
    case '/about/mission':
      return 'Our Mission & Vision'
    case '/about/facilities':
      return 'School Facilities'
    case '/about/principal-message':
      return "Principal's Message"
    case '/gallery':
      return 'Photo Gallery'
    case '/faqs':
      return 'Frequently Asked Questions'
    default:
      return 'Page Title'
  }
}