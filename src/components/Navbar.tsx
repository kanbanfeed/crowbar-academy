// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Crown } from "lucide-react";

const navItems = [
  { href: "/", label: "Academy Home" },
  { href: "/lessons", label: "Lessons" },
];

export function Navbar() {
  const pathname = usePathname();
  const { signInWithCrowbar, user, signOut, loading } = useAuth();

  return (
    <header className="border-b border-[#1E293B] bg-[#0F1620]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* LEFT: Logo + Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg 
            bg-gradient-to-br from-indigo-500 to-violet-600 
            text-sm font-semibold text-white shadow-md group-hover:scale-105 transition">
            CA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-white">
              Crowbar Academy
            </span>
            <span className="text-xs text-slate-400">
              Micro-learning for Crowbar members
            </span>
          </div>
        </Link>

        {/* RIGHT: Nav Links + Auth */}
        <nav className="flex items-center gap-6">

          {/* Navigation */}
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  active
                    ? "text-white font-medium"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Back to Crowbar */}
          <Link
            href="https://www.crowbarltd.com/dashboard"
            className="hidden md:inline-flex items-center gap-1 
              rounded-full border border-slate-700 px-3 py-1.5 text-xs 
              font-medium text-slate-200 hover:border-indigo-500 
              hover:bg-indigo-500/10 transition"
          >
            <Crown className="w-3 h-3 text-yellow-400" />
            Back to Crowbar
          </Link>

          {/* Auth Button */}
          {!loading && (
            <>
              {!user ? (
                <button
                  onClick={signInWithCrowbar}
                  className="rounded-full bg-indigo-500 px-4 py-1.5 
                    text-xs font-semibold text-white shadow-sm 
                    hover:bg-indigo-400 hover:shadow-md transition"
                >
                  Sign in with Crowbar
                </button>
              ) : (
                <button
                  onClick={signOut}
                  className="rounded-full border border-slate-700 px-4 py-1.5 
                    text-xs font-medium text-slate-200 
                    hover:border-red-500 hover:bg-red-500/10 transition"
                >
                  Logout
                </button>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
