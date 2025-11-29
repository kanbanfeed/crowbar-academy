// src/components/LessonCard.tsx
import Link from "next/link";
import type { Lesson } from "@/lib/lessons";

type Props = {
  lesson: Lesson;
  index: number;
};

export function LessonCard({ lesson, index }: Props) {
  return (
    <Link
      href={`/lessons/${lesson.id}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950/90 p-4 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500">
            <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-400">
              Lesson {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>{lesson.themeTag}</span>
          </div>
          <h3 className="mb-1 text-sm font-semibold text-slate-50">
            {lesson.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2">
            {lesson.summary}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1 text-[10px] text-slate-400">
          <span className="rounded-full bg-slate-900/80 px-2 py-0.5">
            {lesson.duration}
          </span>
          <span className="rounded-full border border-slate-700 px-2 py-0.5">
            {lesson.level}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="text-xs font-medium text-indigo-400 group-hover:text-indigo-300"
        >
          Start Lesson →
        </button>
        <div className="flex items-center gap-1 text-[10px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          <span>Included in Crowbar membership</span>
        </div>
      </div>
    </Link>
  );
}
