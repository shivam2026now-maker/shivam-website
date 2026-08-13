export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <a href="/" className="text-sm text-cyan-400">← Back home</a>
        <header className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            YouTube & Media
          </p>
          <h1 className="mt-5 text-5xl font-semibold sm:text-7xl">
            Building in public.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Videos, sketches, explanations and projects shared through visual
            media.
          </p>
        </header>

        <div className="mt-16 rounded-3xl border border-white/10 p-8 text-slate-400">
          YouTube videos and media will appear here.
        </div>
      </div>
    </main>
  );
}
