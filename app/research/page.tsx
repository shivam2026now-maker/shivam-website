import Link from "next/link";

const domains = [
  {
    number: "01",
    title: "Physics & Engineering",
    slug: "physics-engineering",
  },
  {
    number: "02",
    title: "Space",
    slug: "space",
  },
  {
    number: "03",
    title: "Geopolitics",
    slug: "geopolitics",
  },
  {
    number: "04",
    title: "Tech & Innovation",
    slug: "tech-innovation",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-16">

        <Link
          href="/"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back home
        </Link>

        <section className="mt-10 overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/researchspace.jpg"
            alt="Research and space"
            className="h-[280px] w-full object-cover sm:h-[420px]"
          />

          <div className="bg-white/[0.025] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              Research
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Research Domains
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Explore the areas I am researching and investigating.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {domains.map((domain) => (
            <Link
              key={domain.slug}
              href={`/research/${domain.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <span className="text-sm text-cyan-400">
                {domain.number}
              </span>

              <h2 className="mt-8 text-2xl font-semibold">
                {domain.title}
              </h2>

              <div className="mt-8 text-sm font-semibold text-slate-400 transition group-hover:text-cyan-300">
                Open domain →
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
