"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Search, MapPin, Package, Truck } from "lucide-react"

// Mock data for tracking details
const trackingData = [
  { id: "ORD001", status: "Package Received", date: "September 15, 2024", time: "9:00 AM", icon: Package },
  { id: "ORD002", status: "In Transit", date: "September 16, 2024", time: "2:30 PM", icon: Truck },
  { id: "ORD003", status: "Out for Delivery", date: "September 17, 2024", time: "10:15 AM", icon: MapPin },
]

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState(trackingData)

  const handleTracking = () => {
    // In a real application, you would fetch the tracking data based on the tracking number
    // For this example, we'll just set the mock data
    setTrackingResult(trackingData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Track Your Package</h1>
      <div className="flex space-x-4 mb-8">
        <Input 
          placeholder="Enter tracking number" 
          className="flex-grow"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <Button onClick={handleTracking}>
          <Search className="h-5 w-5 mr-2" /> Track
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tracking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trackingResult.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center">
                  <Icon className="h-6 w-6 mr-4 text-primary" />
                  <div>
                    <p className="text-sm text-gray-900">Order ID: {item.id}</p>
                    <p className="font-semibold">{item.status}</p>
                    <p className="text-sm text-gray-500">
                      {item.date} - {item.time}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TrackingPage