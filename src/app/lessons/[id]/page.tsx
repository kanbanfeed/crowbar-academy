// src/app/lessons/[id]/page.tsx
import { notFound } from "next/navigation";
import { LESSONS } from "@/lib/lessons";
import { LessonBadge } from "@/components/LessonBadge";
import Link from "next/link";
import Markdown from "react-markdown";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LessonDetailPage({ params }: Params) {
  // Await the params promise
  const { id } = await params;
  const lesson = LESSONS.find((l) => l.id === id);

  if (!lesson) {
    return notFound();
  }

  
  return (
    <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] font-mono uppercase tracking-widest">
              {lesson.themeTag}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>{lesson.duration}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>{lesson.level}</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {lesson.title}
          </h1>
          <p className="max-w-xl text-sm text-slate-400">{lesson.summary}</p>
        </div>

        <div className="hidden md:block">
          <LessonBadge completed={false} />
        </div>
      </div>

      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-sm leading-relaxed text-slate-200">
        <Markdown
          components={{
            h3: ({ node, ...props }) => (
              <h3
                className="mb-2 text-lg font-semibold text-indigo-300"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-3 text-sm text-slate-200" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="mb-3 list-disc space-y-1 pl-5 text-sm text-slate-200"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li className="text-sm text-slate-200" {...props} />
            ),
          }}
        >
          {lesson.content}
        </Markdown>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <LessonBadge completed={false} />
        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          <Link
            href="/lessons"
            className="rounded-full border border-slate-800 px-3 py-1.5 text-xs font-medium hover:border-indigo-500 hover:bg-indigo-500/10"
          >
            ← Back to all lessons
          </Link>
          <Link
            href="https://crowbar.app/dashboard" // TODO: real URL
            className="rounded-full border border-slate-800 px-3 py-1.5 text-xs font-medium hover:border-indigo-500 hover:bg-indigo-500/10"
          >
            Back to Crowbar dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}