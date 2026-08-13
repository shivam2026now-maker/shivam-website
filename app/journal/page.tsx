import Link from "next/link";

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 sm:py-16">

        <Link href="/" className="text-sm text-cyan-400">
          ← Back home
        </Link>

        <header className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Journal
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
            Things worth writing down.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Thoughts, observations, questions and ideas on any topic that
            catches my attention.
          </p>
        </header>

        <section className="mt-16">
          <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              Journal / 01
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              Building in Public
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              This journal will document ideas, questions, experiments and
              observations as they develop. Some entries may begin as simple
              questions and become deeper investigations over time.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              More entries will be added soon.
            </p>
          </article>
        </section>

      </div>
    </main>
  );
}
