export type TimelineStatus = "Completado" | "En curso" | "Pendiente";

export type TimelineItem = {
  title: string;
  text?: string;
  status: TimelineStatus;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((item) => {
        const isDone = item.status === "Completado";
        const isCurrent = item.status === "En curso";

        return (
          <div key={item.title} className="flex gap-4">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                isDone || isCurrent
                  ? "bg-brand-mint text-brand-accent"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {isDone ? "✓" : isCurrent ? "•" : ""}
            </div>

            <div className="flex-1 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <p className="font-bold">{item.title}</p>
                <span
                  className={`text-sm font-bold ${
                    isCurrent ? "text-brand-accent" : "text-slate-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {item.text ? (
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
