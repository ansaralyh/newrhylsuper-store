"use client";

import { useSession } from "next-auth/react";
import { 
  Search, 
  Bell, 
  User, 
  Moon, 
  Sun,
  ChevronDown,
  Mail,
  Settings,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuHeader,
  DropdownMenuTrigger 
} from "@/components/ui/DropdownMenu"; // I'll need to create this or use a simple one

export function AdminHeader() {
  const { data: session } = useSession();
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="h-20 bg-[#0f172a] border-b border-gray-800/50 flex items-center justify-between px-8 sticky top-0 z-40">
      {/* Search Bar */}
      <div className="relative w-96 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/group-focus-within:text-[#06b6d4] transition-colors h-5 w-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search for anything..."
          className="w-full bg-gray-800/30 border border-gray-800 rounded-2xl py-2.5 pl-12 pr-4 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded border border-gray-700 bg-gray-800 text-[10px] text-gray-500 font-sans uppercase">Ctrl</kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-gray-700 bg-gray-800 text-[10px] text-gray-500 font-sans uppercase">K</kbd>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-[#06b6d4] hover:bg-gray-800 transition-all border border-gray-800"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-[#06b6d4] hover:bg-gray-800 transition-all border border-gray-800">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#0f172a]"></span>
        </button>

        <div className="h-8 w-px bg-gray-800"></div>

        {/* Profile */}
        <div className="flex items-center gap-4 group cursor-pointer p-1.5 rounded-2xl hover:bg-gray-800/50 transition-all border border-transparent hover:border-gray-800">
          <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/20 border border-[#06b6d4]/30 flex items-center justify-center text-[#06b6d4] font-bold text-lg">
            {session?.user?.name?.[0].toUpperCase() || "A"}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-white line-clamp-1">{session?.user?.name || "Admin"}</p>
            <p className="text-[10px] font-bold text-[#06b6d4] uppercase tracking-widest">
              {(session?.user as any)?.role || "Administrator"}
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
        </div>
      </div>
    </header>
  );
}
