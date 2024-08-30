import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const inventoryData = [
  { id: 1, name: "Laptop", category: "Electronics", quantity: 50, location: "A1" },
  { id: 2, name: "T-shirt", category: "Clothing", quantity: 100, location: "B2" },
  { id: 3, name: "Desk Chair", category: "Furniture", quantity: 25, location: "C3" },
  { id: 4, name: "Smartphone", category: "Electronics", quantity: 75, location: "A2" },
  { id: 5, name: "Jeans", category: "Clothing", quantity: 80, location: "B3" },
  { id: 6, name: "Bookshelf", category: "Furniture", quantity: 15, location: "C1" },
  { id: 7, name: "Tablet", category: "Electronics", quantity: 30, location: "A3" },
  { id: 8, name: "Sweater", category: "Clothing", quantity: 60, location: "B1" },
  { id: 9, name: "Office Desk", category: "Furniture", quantity: 20, location: "C2" },
  { id: 10, name: "Headphones", category: "Electronics", quantity: 40, location: "A4" },
];

const Inventory = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search inventory..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;