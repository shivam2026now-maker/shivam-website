export default function TimeDilationPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-20">
        <a href="/research" className="text-sm text-cyan-400">
          ← Back to Research
        </a>

        <header className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Space / Relativity
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
            Time Dilation
          </h1>
          <p className="mt-7 text-xl leading-8 text-slate-400">
            An investigation into how motion and gravity affect the passage of
            time.
          </p>
        </header>

        <article className="mt-16 space-y-12 text-lg leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">The question</h2>
            <p className="mt-4">
              If two observers experience different speeds or gravitational
              fields, do they experience time in exactly the same way?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Special relativity
            </h2>
            <p className="mt-4">
              Einstein&apos;s special relativity shows that time intervals
              depend on the relative motion of observers.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center text-2xl text-cyan-300">
              Δt = γΔτ
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Gravitational time dilation
            </h2>
            <p className="mt-4">
              General relativity predicts another effect: clocks at different
              gravitational potentials can accumulate different amounts of
              elapsed time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              Investigation in progress
            </h2>
            <p className="mt-4">
              Detailed calculations, examples, sources and real-world
              consequences will be added as this investigation develops.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
