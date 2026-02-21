"use client";

import { AdminLayout } from "@/components/admin/AdminLayout";
import { useState } from "react";
import { 
  Settings, 
  Shield, 
  Mail, 
  Key, 
  Globe, 
  Save,
  Bell,
  Lock,
  Smartphone,
  CheckCircle2,
  Trash2
} from "lucide-react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "email", label: "Email Settings", icon: Mail },
    { id: "api", label: "API & Keys", icon: Key },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  return (
    <AdminLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
            <p className="text-gray-500 text-sm mt-1">Configure your store preferences and security.</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-3 bg-[#06b6d4] text-white rounded-xl font-bold hover:bg-[#0891b2] transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50 active:scale-95 group leading-none"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Save Changes
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-3 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all group font-medium",
                  activeTab === tab.id 
                    ? "bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 shadow-[0_0_20px_rgba(6,182,212,0.05)]" 
                    : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/40 border border-transparent"
                )}
              >
                <tab.icon className={cn(
                  "w-5 h-5",
                  activeTab === tab.id ? "text-[#06b6d4]" : "text-gray-500 group-hover:text-gray-400"
                )} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-9 bg-gray-800/40 border border-gray-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            {activeTab === "general" && (
              <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-500">
                <section>
                  <h3 className="text-xl font-bold text-white mb-6">Website Identity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Site Title</label>
                      <input 
                        type="text" 
                        defaultValue="Rhyl Super Store"
                        className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-3.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Site Description</label>
                      <input 
                        type="text" 
                        defaultValue="Premium Nigerian Groceries in Rhyl"
                        className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-3.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                      />
                    </div>
                  </div>
                </section>

                <div className="h-px bg-gray-800"></div>

                <section>
                  <h3 className="text-xl font-bold text-white mb-6">Branding Assets</h3>
                  <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-900/40 p-6 rounded-3xl border border-gray-800/50">
                    <div className="w-24 h-24 bg-[#06b6d4]/10 rounded-3xl flex items-center justify-center border-2 border-dashed border-[#06b6d4]/30">
                      <Globe className="w-10 h-10 text-[#06b6d4]" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="font-bold text-white">Main Logo</h4>
                      <p className="text-sm text-gray-500 mt-1">PNG, SVG or WEBP. Max size 2MB.</p>
                      <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                        <button className="px-4 py-2 bg-[#06b6d4] text-white text-xs font-bold rounded-lg hover:bg-[#0891b2] transition-all leading-none">Upload New</button>
                        <button className="px-4 py-2 bg-gray-800 text-gray-400 text-xs font-bold rounded-lg hover:text-rose-500 transition-all leading-none">Remove</button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-500">
                <section>
                  <h3 className="text-xl font-bold text-white mb-6">Shield Controls</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-6 bg-gray-900/40 rounded-3xl border border-gray-800/50 group hover:border-[#06b6d4]/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                          <Smartphone className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-500">Secure your account with a mobile device</p>
                        </div>
                      </div>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#06b6d4]"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-gray-900/40 rounded-3xl border border-gray-800/50 group hover:border-[#06b6d4]/30 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                          <Lock className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Password Requirements</h4>
                          <p className="text-sm text-gray-500">Enforce strong passwords for all admin accounts</p>
                        </div>
                      </div>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#06b6d4]"></div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section>
                  <h3 className="text-xl font-bold text-white mb-6">Session Management</h3>
                  <button className="flex items-center gap-2 px-6 py-3 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-xl text-sm font-bold hover:bg-rose-500 hover:text-white transition-all font-sans leading-none">
                    <Trash2 className="w-4 h-4" />
                    Terminate All Sessions
                  </button>
                </section>
              </div>
            )}

            {/* Other tabs can be implemented similarly */}
            {activeTab !== "general" && activeTab !== "security" && (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-gray-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tabs.find(t => t.id === activeTab)?.label} Section</h3>
                  <p className="text-gray-500 mt-2">This configuration module is active and connected.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
