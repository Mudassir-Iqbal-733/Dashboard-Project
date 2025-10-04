import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar';


const DashboardLayout =()=> {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-screen">
      <aside className="bg-gray-800 text-white p-4">
        <Sidebar />
      </aside>
      <main className="bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4">Main Content-- Api</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;