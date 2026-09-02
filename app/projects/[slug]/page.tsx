import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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
            Project
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title || project.name}
          </h1>

          {(project.excerpt || project.summary || project.description) && (
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              {project.excerpt || project.summary || project.description}
            </p>
          )}

          {project.publishedAt && (
            <p className="mt-6 text-sm text-slate-500">
              {new Date(project.publishedAt).toLocaleDateString()}
            </p>
          )}
        </header>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Project Details
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            {project.title || project.name}
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            {project.description || project.summary || "Project details will appear here."}
          </p>
        </section>
      </div>
    </main>
  );
}
