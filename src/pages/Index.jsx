import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const inventoryData = [
  { category: 'Electronics', value: 400 },
  { category: 'Clothing', value: 300 },
  { category: 'Furniture', value: 200 },
  { category: 'Books', value: 100 },
];

const shipmentData = [
  { month: 'Jan', inbound: 65, outbound: 60 },
  { month: 'Feb', inbound: 59, outbound: 80 },
  { month: 'Mar', inbound: 80, outbound: 70 },
  { month: 'Apr', inbound: 81, outbound: 90 },
  { month: 'May', inbound: 56, outbound: 50 },
  { month: 'Jun', inbound: 55, outbound: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Index = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={inventoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Shipment Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={shipmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inbound" fill="#8884d8" />
              <Bar dataKey="outbound" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-gray-400">Total Items</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">56</p>
              <p className="text-sm text-gray-400">Pending Orders</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-gray-400">Inventory Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-gray-400">Active Employees</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
