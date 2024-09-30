import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Package } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-gray-800">On-The-Go</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link></li>
            <li><Link href="/orders" className="text-gray-600 hover:text-gray-800">Orders</Link></li>
            <li><Link href="/tracking" className="text-gray-600 hover:text-gray-800">Tracking</Link></li>
            <li><Link href="/support" className="text-gray-600 hover:text-gray-800">Support</Link></li>
          </ul>
        </nav>
        <Link href="/login" passHref>
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </header>
  )
}