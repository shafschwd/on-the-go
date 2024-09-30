import { Button } from "@/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Package, Truck } from "lucide-react"

// Define the component
const TrackPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Track Your Package</h1>
      <div className="flex space-x-4 mb-8">
        <Input placeholder="Enter tracking number" className="flex-grow" />
        <Button>
          <Search className="h-5 w-5 mr-2" /> Track
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tracking Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Package className="h-6 w-6 mr-4 text-primary" />
              <div>
                <p className="font-semibold">Package Received</p>
                <p className="text-sm text-gray-500">May 15, 2023 - 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center">
              <Truck className="h-6 w-6 mr-4 text-primary" />
              <div>
                <p className="font-semibold">In Transit</p>
                <p className="text-sm text-gray-500">May 16, 2023 - 2:30 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-4 text-primary" />
              <div>
                <p className="font-semibold">Out for Delivery</p>
                <p className="text-sm text-gray-500">May 17, 2023 - 10:15 AM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Export the component as default
export default TrackPage;
