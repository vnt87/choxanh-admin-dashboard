import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

export default function Orders() {
  const [orders] = useState([
    {
      id: "ORD001",
      customer: "John Doe",
      status: "Processing",
      total: "$120.00",
      date: "2023-10-15",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      status: "Shipped",
      total: "$95.50",
      date: "2023-10-14",
    },
    {
      id: "ORD003",
      customer: "Acme Corp",
      status: "Delivered",
      total: "$450.00",
      date: "2023-10-12",
    },
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Orders</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
