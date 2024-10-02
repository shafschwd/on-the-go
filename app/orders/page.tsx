import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import Link from "next/link"
import { Package, Eye, Truck } from "lucide-react"

const orders = [
  { id: "ORD001", date: "2023-05-15", status: "Delivered", total: "$25.99" },
  { id: "ORD002", date: "2023-05-16", status: "In Transit", total: "$34.50" },
  { id: "ORD003", date: "2023-05-17", status: "Processing", total: "$18.75" },
]

const OrdersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Truck className="h-4 w-4 mr-1" /> Track
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-8">
      <Link href="/booking" passHref>
        <Button><Package className="h-5 w-5 mr-2" /> Create New Order</Button>
      </Link>
      </div>
    </div>
  )
}

// Export as the default
export default OrdersPage;
