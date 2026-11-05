import Link from "next/link";
import { getResearchByDomain } from "@/lib/research";

export default async function SpacePage() {
  const research = await getResearchByDomain("space");

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <Link href="/research" className="text-sm text-cyan-400">
          ← Back to Research
        </Link>

        <header className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Research Domain 02
          </p>

          <h1 className="mt-5 text-4xl font-semibold sm:text-6xl">
            Space
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Research into space science, astronomy, exploration, launch
            systems, and the future of space technology.
          </p>
        </header>

        <section className="mt-16 space-y-5">
          {research.length === 0 ? (
            <div className="rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-semibold">
                No research published yet.
              </h2>
            </div>
          ) : (
            research.map((item: any) => (
              <article
                key={item._id}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                  {item.status === "in-progress"
                    ? "Investigation in Progress"
                    : item.status}
                </p>

                <h2 className="mt-4 text-2xl font-semibold">
                  {item.title}
                </h2>

                {item.summary && (
                  <p className="mt-4 leading-7 text-slate-400">
                    {item.summary}
                  </p>
                )}

                {item.featured && (
                  <p className="mt-5 text-sm text-cyan-400">
                    Featured Research
                  </p>
                )}
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
