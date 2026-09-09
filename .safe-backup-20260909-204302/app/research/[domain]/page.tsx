import Link from "next/link";
import { notFound } from "next/navigation";
import { getResearchByDomain } from "@/lib/research";

const domains = {
  "physics-engineering": {
    number: "01",
    title: "Physics & Engineering",
    description:
      "Research and investigations into physics, engineering, aerospace systems, and related technologies.",
  },
  space: {
    number: "02",
    title: "Space",
    description:
      "Research into space science, astronomy, exploration, launch systems, and the future of space technology.",
  },
  geopolitics: {
    number: "03",
    title: "Geopolitics",
    description:
      "Research and analysis of international relations, strategic affairs, power, security, and global developments.",
  },
  "tech-innovation": {
    number: "04",
    title: "Tech & Innovation",
    description:
      "Research into emerging technologies, innovation, engineering ideas, and technologies shaping the future.",
  },
};

type Props = {
  params: Promise<{ domain: string }>;
};

export default async function ResearchDomainPage({ params }: Props) {
  const { domain } = await params;

  const data = domains[domain as keyof typeof domains];

  if (!data) {
    notFound();
  }

  const research = await getResearchByDomain(domain);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">

        <Link
          href="/research"
          className="text-sm text-cyan-400"
        >
          ← Back to Research
        </Link>

        <header className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Research Domain {data.number}
          </p>

          <h1 className="mt-5 text-4xl font-semibold sm:text-6xl">
            {data.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {data.description}
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

                <div className="mt-6 text-sm text-slate-500">
                  {item.featured ? "Featured Research" : "Research"}
                </div>
              </article>
            ))
          )}
        </section>

      </div>
    </main>
  );
}
