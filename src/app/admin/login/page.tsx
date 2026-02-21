"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Shield, ArrowRight, AlertCircle, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";
  const errorParam = searchParams.get("error");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const errorMessage = errorParam === "AccessDenied" 
    ? "You do not have permission to access the admin portal. Please log in with a valid admin account."
    : error;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#06b6d4]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
      
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-[#06b6d4] rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)] ring-4 ring-[#06b6d4]/10">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 mt-2 font-medium">Log in to manage your Rhyl Store dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#0f172a]/50 backdrop-blur-xl rounded-[2.5rem] border border-gray-800 p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#06b6d4] transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@rhyl.com"
                  required
                  className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">
                  Password
                </label>
                <Link href="#" className="text-xs font-bold text-[#06b6d4] hover:text-[#22d3ee] transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#06b6d4] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#020617] border border-gray-800 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/50 focus:border-[#06b6d4] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#06b6d4] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {errorMessage && (
              <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl animate-in shake duration-300">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                <p className="text-xs font-bold text-rose-500 leading-tight">
                  {errorMessage}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#06b6d4] text-white font-bold rounded-2xl hover:bg-[#0891b2] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In to Portal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-10 text-center">
          <Link href="/" className="text-gray-500 hover:text-white text-sm font-bold transition-all uppercase tracking-widest flex items-center justify-center gap-2">
            <span>←</span> Back to public store
          </Link>
        </p>
      </div>
    </div>
  );
}
