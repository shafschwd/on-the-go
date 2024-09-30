import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package, Truck, CreditCard, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">On-The-Go Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-4 w-4" /> Active Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <Link href="/orders" passHref>
              <Button variant="link" className="mt-2">View Orders</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="mr-2 h-4 w-4" /> In Transit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
            <Link href="/tracking" passHref>
              <Button variant="link" className="mt-2">Track Packages</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" /> Pending Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1</p>
            <Link href="/payments" passHref>
              <Button variant="link" className="mt-2">View Invoices</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" /> Support Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
            <Link href="/support" passHref>
              <Button variant="link" className="mt-2">Contact Support</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recent On-The-Go Activity</h2>
        {/* Add a table or list of recent activities here */}
      </div>
    </div>
  )
}

// Export the component as the default export
export default DashboardPage;
