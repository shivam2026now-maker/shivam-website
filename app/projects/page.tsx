import Link from "next/link";
import { getProjectCategories } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const categories = await getProjectCategories();

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-cyan-400">
          ← Back home
        </Link>

        <header className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
            Projects
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore each project area and its published updates.
          </p>
        </header>

        <section className="mt-14 grid gap-5 sm:grid-cols-2">
          {categories.length === 0 ? (
            <div className="rounded-3xl border border-white/10 p-8 text-slate-400 sm:col-span-2">
              No published project categories yet.
            </div>
          ) : (
            categories.map((category: any, index: number) => (
              <Link
                key={category.slug}
                href={`/projects/${category.slug}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <span className="text-sm text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-8 text-2xl font-semibold">
                  {category.title}
                </h2>

                {category.description ? (
                  <p className="mt-4 leading-7 text-slate-400">
                    {category.description}
                  </p>
                ) : null}

                <p className="mt-8 text-sm font-semibold text-slate-400 transition group-hover:text-cyan-300">
                  Open project →
                </p>
              </Link>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
