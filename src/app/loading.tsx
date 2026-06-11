export default function Loading() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-14 rounded-2xl border border-border/70 bg-muted/40" />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 rounded-[2rem] border border-border/70 bg-card p-8 shadow-panel">
            <div className="h-6 w-56 rounded-full bg-muted/60" />
            <div className="h-16 w-full rounded-2xl bg-muted/60" />
            <div className="h-6 w-5/6 rounded-full bg-muted/60" />
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="h-10 w-32 rounded-full bg-muted/60" />
              <div className="h-10 w-32 rounded-full bg-muted/60" />
              <div className="h-10 w-40 rounded-full bg-muted/60" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3 pt-4">
              <div className="h-24 rounded-2xl bg-muted/60" />
              <div className="h-24 rounded-2xl bg-muted/60" />
              <div className="h-24 rounded-2xl bg-muted/60" />
            </div>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-border/70 bg-card p-8 shadow-panel">
            <div className="h-10 rounded-2xl bg-muted/60" />
            <div className="h-44 rounded-3xl bg-muted/60" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded-2xl bg-muted/60" />
              <div className="h-28 rounded-2xl bg-muted/60" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-52 rounded-3xl border border-border/70 bg-card shadow-panel"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
