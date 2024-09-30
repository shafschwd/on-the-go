import Link from 'next/link'
import { Package } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Package className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-gray-800">On-The-Go</span>
            </Link>
            <p className="text-gray-600">Fast and reliable delivery services</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-800">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600">1234 Delivery Street</p>
            <p className="text-gray-600">City, State 12345</p>
            <p className="text-gray-600">Email: info@onthego.com</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2024 On-The-Go. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}