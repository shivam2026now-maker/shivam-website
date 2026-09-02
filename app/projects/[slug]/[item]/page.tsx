import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getProjectItemByCategoryAndSlug } from "@/lib/projects";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string; item: string }>;
};

export default async function ProjectItemPage({ params }: Props) {
  const { slug, item } = await params;
  const projectItem = await getProjectItemByCategoryAndSlug(slug, item);

  if (!projectItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-20">
        <Link
          href={`/projects/${slug}`}
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to {projectItem.category?.title || "Project"}
        </Link>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            {projectItem.category?.title || "Project"}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            {projectItem.title}
          </h1>

          {(projectItem.excerpt || projectItem.summary || projectItem.description) && (
            <p className="mt-7 text-lg leading-8 text-slate-400">
              {projectItem.excerpt || projectItem.summary || projectItem.description}
            </p>
          )}

          {projectItem.publishedAt && (
            <p className="mt-6 text-sm text-slate-500">
              {new Date(projectItem.publishedAt).toLocaleDateString()}
            </p>
          )}

          {projectItem.body && (
            <div className="prose prose-invert mt-12 max-w-none">
              <PortableText value={projectItem.body} />
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
