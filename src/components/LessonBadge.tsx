// src/components/LessonBadge.tsx
type Props = {
  completed?: boolean; // static for now
};

export function LessonBadge({ completed = false }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/80 text-[10px] font-bold text-slate-950">
        ✓
      </span>
      <span>{completed ? "Lesson completed" : "Completion badge"}</span>
    </div>
  );
}
