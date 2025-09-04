import React from 'react';
import { BarChart, ShoppingBag, Percent, Expand } from 'lucide-react';

const stats = [
  {
    label: 'Total Revenue',
    value: '$245,678',
    change: '+12% (+$26,800)',
    icon: <BarChart size={20} />,
    chart: <svg width="80" height="32"><polyline points="0,20 20,25 40,10 60,30 80,15" fill="none" stroke="#22c55e" strokeWidth="2"/></svg>
  },
  {
    label: 'Average Order Value',
    value: '$67.42',
    change: '+8% (+$4.85)',
    icon: <ShoppingBag size={20} />,
    chart: <svg width="80" height="32"><polyline points="0,30 20,10 40,25 60,15 80,25" fill="none" stroke="#22c55e" strokeWidth="2"/></svg>
  },
  {
    label: 'Conversion Rate',
    value: '4.8%',
    change: '+0.3% (+24 Orders)',
    icon: <Percent size={20} />,
    chart: <svg width="80" height="32"><polyline points="0,25 20,20 40,30 60,10 80,20" fill="none" stroke="#22c55e" strokeWidth="2"/></svg>
  }
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 relative">
          <div className="flex items-center gap-3">
            <div className="bg-gray-900 rounded-lg p-2 text-white flex items-center justify-center">
              {stat.icon}
            </div>
            <span className="font-medium text-gray-700">{stat.label}</span>
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              <Expand size={18} />
            </button>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div className="flex items-center gap-2">
            <span className="text-green-600 text-sm font-semibold">↗ {stat.change}</span>
          </div>
          <div className="mt-2">{stat.chart}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;