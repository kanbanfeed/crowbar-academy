// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Crowbar Academy",
  description: "Micro-learning hub for Crowbar members.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <AuthProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="relative bg-[#0F1620] py-10">
  {/* Purple top border */}
  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />

  <div className="mx-auto max-w-7xl px-4">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
      
      {/* LEFT SIDE */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          Crowbar Academy
        </h3>
        <p className="text-sm text-slate-400">
          Micro-learning for Smart Skill Building
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-start md:items-end gap-1">
        <p className="text-sm text-slate-300 flex items-center gap-1">
          Part of the 
          <span className="text-yellow-400">👑</span>
          <span className="font-medium text-yellow-400">
            Crowbar Connected Network
          </span>
        </p>
        <p className="text-xs text-slate-500">
          © 2024 Crowbar Academy. All rights reserved.
        </p>
      </div>

    </div>
  </div>
</footer>

        </div>
        </AuthProvider>
      </body>
    </html>
  );
}
