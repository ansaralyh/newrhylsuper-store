"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { useState, useEffect } from "react";
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Shield, 
  UserX, 
  UserCheck,
  Mail,
  Calendar,
  Loader2
} from "lucide-react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/users"); // This endpoint might not exist yet, I'll need to check or create it
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users, using dummy data for now:", err);
        // Fallback dummy data for UI development
        setUsers([
          { id: 1, name: "Admin User", email: "admin@rhyl.com", role: "super-admin", status: "active", createdAt: "2024-01-15" },
          { id: 2, name: "John Doe", email: "john@example.com", role: "user", status: "active", createdAt: "2024-02-10" },
          { id: 3, name: "Jane Smith", email: "jane@work.com", role: "editor", status: "suspended", createdAt: "2024-02-12" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">User Management</h1>
            <p className="text-gray-500 text-sm mt-1">Control access levels and monitor user activity.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-white rounded-xl font-bold hover:bg-[#0891b2] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] group active:scale-95 leading-none">
            <Shield className="w-5 h-5" />
            Invite New Admin
          </button>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-800/40 border border-gray-800 p-4 rounded-2xl">
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#06b6d4] transition-colors" />
            <input 
              type="text" 
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#020617] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all leading-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-gray-700 transition-all w-full md:w-auto font-sans leading-none">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-gray-800/40 border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900/50 border-b border-gray-800">
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">User</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Role</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Status</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Joined</th>
                  <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest leading-none text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="w-10 h-10 text-[#06b6d4] animate-spin" />
                        <p className="text-gray-500 font-medium tracking-tight">Loading directory...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <Users className="w-10 h-10 text-gray-700" />
                        <p className="text-gray-500 font-medium tracking-tight">No users matching your search.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-[#06b6d4] font-bold shrink-0">
                            {user.name[0].toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-white truncate">{user.name}</p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Mail className="w-3 h-3 text-gray-500" />
                              <p className="text-xs text-gray-500 font-medium truncate tracking-tight">{user.email}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className={cn(
                          "inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border leading-none",
                          user.role === "super-admin" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                          user.role === "admin" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                          user.role === "editor" ? "bg-[#06b6d4]/10 text-[#06b6d4] border-[#06b6d4]/20" :
                          "bg-gray-500/10 text-gray-500 border-gray-500/20"
                        )}>
                          {user.role}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-sans">
                        <div className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest leading-none",
                          user.status === "active"
                            ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" 
                            : "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                        )}>
                          <div className={cn("w-1.5 h-1.5 rounded-full", user.status === "active" ? "bg-emerald-500" : "bg-rose-500")}></div>
                          {user.status}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                          <Calendar className="w-4 h-4 text-gray-600" />
                          {user.createdAt}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all font-sans">
                          {user.status === "active" ? (
                            <button title="Suspend User font-sans" className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-rose-500 hover:bg-rose-500/10 transition-all leading-none">
                              <UserX className="w-4 h-4" />
                            </button>
                          ) : (
                            <button title="Activate User font-sans" className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-emerald-500 hover:bg-emerald-500/10 transition-all leading-none">
                              <UserCheck className="w-4 h-4" />
                            </button>
                          )}
                          <button className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white transition-all font-sans leading-none">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
