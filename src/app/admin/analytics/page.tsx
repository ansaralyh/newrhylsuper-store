"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  Download,
  Calendar,
  ArrowUpRight
} from "lucide-react";

const revenueData = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 198 },
  { name: "Mar", revenue: 2000, orders: 150 },
  { name: "Apr", revenue: 2780, orders: 190 },
  { name: "May", revenue: 1890, orders: 120 },
  { name: "Jun", revenue: 2390, orders: 170 },
  { name: "Jul", revenue: 3490, orders: 210 },
];

const userData = [
  { name: "Jan", active: 400, new: 240 },
  { name: "Feb", active: 500, new: 310 },
  { name: "Mar", active: 620, new: 450 },
  { name: "Apr", active: 780, new: 590 },
  { name: "May", active: 900, new: 720 },
  { name: "Jun", active: 1100, new: 850 },
  { name: "Jul", active: 1350, new: 1100 },
];

const deviceData = [
  { name: "Mobile", value: 65 },
  { name: "Desktop", value: 25 },
  { name: "Tablet", value: 10 },
];

const COLORS = ["#06b6d4", "#3b82f6", "#8b5cf6"];

export default function AdminAnalyticsPage() {
  return (
    <AdminLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Analytics</h1>
            <p className="text-gray-500 text-sm mt-1">Deep dive into your store's performance metrics.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
              <Calendar className="w-4 h-4" />
              Last 30 Days
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#06b6d4] text-white rounded-xl text-sm font-bold hover:bg-[#0891b2] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] group">
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Export Data
            </button>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/40 border border-gray-800 p-6 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
                <ArrowUpRight className="w-3 h-3" />
                +14.2%
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Monthly Recurring Revenue</p>
            <h3 className="text-2xl font-bold text-white mt-1">£42,520.00</h3>
          </div>
          <div className="bg-gray-800/40 border border-gray-800 p-6 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
                <ArrowUpRight className="w-3 h-3" />
                +8.1%
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Customer Lifetime Value</p>
            <h3 className="text-2xl font-bold text-white mt-1">£184.20</h3>
          </div>
          <div className="bg-gray-800/40 border border-gray-800 p-6 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center text-[#06b6d4]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-rose-500 text-xs font-bold bg-rose-500/10 px-2 py-1 rounded-lg">
                -2.4%
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium">Average Order Value</p>
            <h3 className="text-2xl font-bold text-white mt-1">£52.40</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-gray-800/40 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Revenue Over Time</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `£${val}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1f2937", borderRadius: "12px" }}
                    itemStyle={{ color: "#06b6d4", fontWeight: "bold" }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Growth Chart */}
          <div className="bg-gray-800/40 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Active Users vs New Signs</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: '#1f2937', radius: 4 }}
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1f2937", borderRadius: "12px" }}
                  />
                  <Bar dataKey="active" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="new" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="bg-gray-800/40 border border-gray-800 rounded-3xl p-8 lg:col-span-2">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Customer Demographics</h3>
                <p className="text-gray-500 text-sm mb-8 font-medium">Where your customers are shopping from</p>
                <div className="space-y-4">
                  {deviceData.map((device, idx) => (
                    <div key={device.name} className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                      <span className="text-sm font-bold text-gray-400 flex-1">{device.name}</span>
                      <span className="text-sm font-bold text-white">{device.value}%</span>
                      <div className="w-32 h-1.5 bg-gray-900 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${device.value}%`, backgroundColor: COLORS[idx % COLORS.length] }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[250px] w-[250px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1f2937", borderRadius: "12px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
