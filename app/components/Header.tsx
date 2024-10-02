"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { Package, User, LogOut } from "lucide-react"

export default function Header() {
  const [userType, setUserType] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkUserType = () => {
      const storedUserType = localStorage.getItem("userType")
      setUserType(storedUserType)
    }

    checkUserType()

    // Listen for the custom login event
    window.addEventListener('onLogin', checkUserType)

    // Listen for changes in localStorage
    window.addEventListener("storage", checkUserType)

    return () => {
      window.removeEventListener('onLogin', checkUserType)
      window.removeEventListener("storage", checkUserType)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userType")
    setUserType(null)
    router.push("/")
  }

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-gray-800">On-The-Go</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            {userType === "admin" ? (
              <li><Link href="/admin" className="text-gray-600 hover:text-gray-800">Dashboard</Link></li>
            ) : (
              <li><Link href="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link></li>
            )}
            <li><Link href="/orders" className="text-gray-600 hover:text-gray-800">Orders</Link></li>
            <li><Link href="/tracking" className="text-gray-600 hover:text-gray-800">Tracking</Link></li>
            <li><Link href="/support" className="text-gray-600 hover:text-gray-800">Support</Link></li>
          </ul>
        </nav>
        {userType ? (
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="text-primary">
              <User className="mr-2 h-4 w-4" />
              {userType === "admin" ? "Admin" : "Customer"}
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        ) : (
          <Link href="/login" passHref>
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </header>
  )
}