"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: ShoppingBag, label: "Products", href: "/admin/products" },
  { icon: ShoppingCart, label: "Orders", href: "/admin/orders" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-[#0f172a] text-gray-400 border-r border-gray-800 transition-all duration-300 z-50 flex flex-col",
      collapsed ? "w-20" : "w-64"
    )}>
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#06b6d4] rounded-xl flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          {!collapsed && (
            <span className="font-bold text-white text-xl tracking-tight">Rhyl<span className="text-[#06b6d4]">Admin</span></span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-[#06b6d4]/10 text-[#06b6d4]" 
                  : "hover:bg-gray-800/50 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5",
                isActive ? "text-[#06b6d4]" : "group-hover:text-[#06b6d4]"
              )} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
              {isActive && !collapsed && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#06b6d4] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-gray-800/50">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-rose-500/10 hover:text-rose-500 transition-all group"
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mt-2 w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-800/50 hover:text-white transition-all group"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {!collapsed && <span className="font-medium">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
