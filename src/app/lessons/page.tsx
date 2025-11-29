"use client";

import { LESSONS } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LessonsPage() {
  const { user, loading, signInWithCrowbar } = useAuth();

  // Show loading state first
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-slate-400">
        Checking authentication...
      </div>
    );
  }

  // ❌ Not logged in → show login prompt
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Login Required
        </h2>
        <p className="text-slate-400 max-w-md mb-6">
          You must sign in with your Crowbar account to access the Academy lessons.
        </p>
        <button
          onClick={signInWithCrowbar}
          className="rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
        >
          Sign in with Crowbar
        </button>
      </div>
    );
  }

  // ✅ Logged in → show lessons
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:pb-16 md:pt-14">
      
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Crowbar Academy Lessons
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Your curated list of micro-learning content.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {LESSONS.map((lesson, index) => (
          <LessonCard key={lesson.id} lesson={lesson} index={index} />
        ))}
      </div>

    </div>
  );
}
