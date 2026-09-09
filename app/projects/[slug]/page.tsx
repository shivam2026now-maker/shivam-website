import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectCategoryBySlug, getProjectItemsByCategory } from "@/lib/projects";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await getProjectCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const items = await getProjectItemsByCategory(category._id);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <Link
          href="/projects"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Projects
        </Link>

        <header className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Project Category
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {category.title}
          </h1>

          {category.description && (
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {category.description}
            </p>
          )}
        </header>

        <section className="mt-16 space-y-6">
          {items.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-slate-400">
              No published updates yet for this project.
            </div>
          ) : (
            items.map((item: any) => (
              <Link
                key={item.slug}
                href={`/projects/${category.slug}/${item.slug}`}
                className="block rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString()
                    : "Project update"}
                </p>

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  {item.title}
                </h2>

                {(item.excerpt || item.summary || item.description) && (
                  <p className="mt-4 leading-7 text-slate-400">
                    {item.excerpt || item.summary || item.description}
                  </p>
                )}

                <div className="mt-6 text-sm font-semibold text-cyan-300">
                  Read full details →
                </div>
              </Link>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
