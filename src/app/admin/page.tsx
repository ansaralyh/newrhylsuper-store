"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Activity
} from "lucide-react";

// Helper to make Tailwind colors dynamic
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const stats = [
  { 
    label: "Total Revenue", 
    value: "£54,232", 
    change: "+12.5%", 
    isPositive: true, 
    icon: DollarSign, 
    color: "emerald" 
  },
  { 
    label: "Total Orders", 
    value: "1,254", 
    change: "+18.2%", 
    isPositive: true, 
    icon: ShoppingBag, 
    color: "blue" 
  },
  { 
    label: "Total Users", 
    value: "842", 
    change: "+5.4%", 
    isPositive: true, 
    icon: Users, 
    color: "purple" 
  },
  { 
    label: "Growth Rate", 
    value: "22.4%", 
    change: "-2.1%", 
    isPositive: false, 
    icon: TrendingUp, 
    color: "teal" 
  },
];

const activities = [
  { id: 1, user: "John Doe", action: "ordered 15x Organic Bananas", time: "2 minutes ago", amount: "£24.50" },
  { id: 2, user: "Sarah Smith", action: "new account registration", time: "15 minutes ago", amount: null },
  { id: 3, user: "Admin", action: "modified product 'Bread Toastie'", time: "1 hour ago", amount: null },
  { id: 4, user: "Mike Ross", action: "refunded order #4521", time: "3 hours ago", amount: "-£12.00" },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
            <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors">
              Export Report
            </button>
            <button className="px-4 py-2.5 bg-[#06b6d4] text-white rounded-xl text-sm font-bold hover:bg-[#0891b2] transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              + New Product
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="bg-gray-800/40 border border-gray-800 p-6 rounded-3xl hover:border-[#06b6d4]/30 transition-all hover:shadow-[0_0_30px_rgba(6,1182,212,0.05)] group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg",
                  stat.color === "emerald" ? "bg-emerald-500/10 text-emerald-500 shadow-emerald-500/5" :
                  stat.color === "blue" ? "bg-blue-500/10 text-blue-500 shadow-blue-500/5" :
                  stat.color === "purple" ? "bg-purple-500/10 text-purple-500 shadow-purple-500/5" :
                  "bg-[#06b6d4]/10 text-[#06b6d4] shadow-[#06b6d4]/5"
                )}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold",
                  stat.isPositive ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10"
                )}>
                  {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-8 bg-gray-800/40 border border-gray-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#06b6d4]"></div>
                <span className="text-xs text-gray-500 font-bold uppercase">Revenue</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Revenue Analytics</h3>
            <p className="text-sm text-gray-500 mb-8 font-medium">Monthly revenue performance breakdown</p>
            
            <div className="h-[300px] flex items-center justify-center bg-gray-900/50 rounded-2xl border border-dashed border-gray-700">
              <div className="text-center">
                <Activity className="w-10 h-10 text-gray-700 mx-auto mb-3" />
                <p className="text-gray-500 text-sm italic font-medium tracking-tight">Analytics Chart Component Loading...</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-4 bg-gray-800/40 border border-gray-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Recent Activity</h3>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-6">
              {activities.map((act) => (
                <div key={act.id} className="flex gap-4 group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gray-700/50 flex items-center justify-center text-gray-300 font-bold border border-gray-700 group-hover:bg-[#06b6d4]/10 group-hover:text-[#06b6d4] group-hover:border-[#06b6d4]/30 transition-all font-sans">
                      {act.user[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-bold tracking-tight">
                      {act.user} <span className="font-medium text-gray-500">{act.action}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{act.time}</p>
                  </div>
                  {act.amount && (
                    <div className={cn(
                      "text-xs font-bold shrink-0",
                      act.amount.startsWith("-") ? "text-rose-500" : "text-emerald-500"
                    )}>
                      {act.amount}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-xl text-xs font-bold text-gray-400 hover:text-white transition-all uppercase tracking-widest leading-none">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
