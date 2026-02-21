"use client";

import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    } else if (session && (session.user as any).role === "user") {
      router.push("/admin/login?error=AccessDenied");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#06b6d4] border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(6,182,212,0.3)]"></div>
      </div>
    );
  }

  if (!session || (session.user as any).role === "user") {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans selection:bg-[#06b6d4]/30 selection:text-[#06b6d4]">
      <AdminSidebar />
      <div className="pl-64 flex flex-col min-h-screen transition-all duration-300">
        <AdminHeader />
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
