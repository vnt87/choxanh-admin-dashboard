import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const employeesData = [
  { id: 1, name: "John Doe", position: "Warehouse Manager", department: "Management", hireDate: "2020-01-15" },
  { id: 2, name: "Jane Smith", position: "Inventory Specialist", department: "Inventory", hireDate: "2020-03-22" },
  { id: 3, name: "Mike Johnson", position: "Forklift Operator", department: "Operations", hireDate: "2020-05-10" },
  { id: 4, name: "Emily Brown", position: "Shipping Coordinator", department: "Logistics", hireDate: "2020-07-05" },
  { id: 5, name: "David Lee", position: "Receiving Clerk", department: "Inventory", hireDate: "2020-09-18" },
  { id: 6, name: "Sarah Wilson", position: "Quality Control Inspector", department: "Quality Assurance", hireDate: "2021-01-30" },
  { id: 7, name: "Tom Anderson", position: "Packing Specialist", department: "Operations", hireDate: "2021-04-12" },
  { id: 8, name: "Lisa Taylor", position: "Inventory Analyst", department: "Inventory", hireDate: "2021-06-25" },
  { id: 9, name: "Chris Martinez", position: "Maintenance Technician", department: "Maintenance", hireDate: "2021-08-14" },
  { id: 10, name: "Amanda Clark", position: "Safety Coordinator", department: "Safety", hireDate: "2021-10-03" },
];

const Users = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Employee Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input placeholder="Search employees..." className="max-w-sm" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Hire Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeesData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.hireDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
