import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  BarChart,
  Package,
  Users,
  ShoppingCart,
  Megaphone,
  Boxes,
  FileText,
  Bell,
  Settings
} from 'lucide-react';

const DashboardLayout =()=> {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-screen">
      <aside className="bg-gray-800 text-white p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <LayoutDashboard size={20} />
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="flex items-center gap-3 py-2 px-4 rounded bg-gray-900">
              <BarChart size={20} />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <Package size={20} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <Users size={20} />
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700 relative">
              <ShoppingCart size={20} />
              <span>Orders</span>
              <span className="absolute right-4 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">8</span>
            </Link>
          </li>
          <li>
            <Link to="/marketing" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <Megaphone size={20} />
              <span>Marketing</span>
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <Boxes size={20} />
              <span>Inventory</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <FileText size={20} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700 relative">
              <Bell size={20} />
              <span>Notifications</span>
              <span className="absolute right-4 bg-red-500 text-xs text-white rounded-full px-2 py-0.5">4</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center gap-3 py-2 px-4 rounded hover:bg-gray-700">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;