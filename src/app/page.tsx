// src/app/page.tsx
import Link from "next/link";
import { LESSONS } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

export default function HomePage() {
  const topLessons = LESSONS.slice(0, 3);

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#1f2937,_#020617)]">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-10 md:flex-row md:items-center md:gap-16 md:pb-20 md:pt-16">
        <div className="flex-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
             Crowbar Ecosystem
          </div>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Crowbar Academy:
            <span className="block text-indigo-400">
              micro-learning hub for members.
            </span>
          </h1>
          <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-300">
            Develop in-demand skills through our curated learning platform, exclusively for 
            Crowbar members and seamlessly integrated with our ecosystems authentication.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Link
              href="/lessons"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400"
            >
              Start Lesson 01
            </Link>
            <Link
              href="https://www.crowbarltd.com//dashboard" // TODO: update URL
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 hover:border-indigo-500 hover:bg-indigo-500/5"
            >
              Back to Crowbar dashboard
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Crowbar SSO required
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Explore lessons 
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Quick Learn
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-4 shadow-xl shadow-indigo-500/10">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Preview of lessons</span>
              <span>SSO-gated access</span>
            </div>
            <div className="grid gap-3">
              {topLessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-4 text-right text-[11px] text-slate-500">
              + {LESSONS.length - topLessons.length} more lessons in the hub
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
