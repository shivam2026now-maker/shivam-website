import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectDomain, getProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDomainPage({ params }: Props) {
  const { slug } = await params;

  const domain = getProjectDomain(slug);

  if (!domain) {
    notFound();
  }

  const projects = await getProjects(slug);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <Link
          href="/projects"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ? Back to Projects
        </Link>

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-cyan-400">
            PROJECT DOMAIN
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
            {domain.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-white/60">
            {domain.description}
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {projects.map((project: any) => (
            <Link
              key={project._id}
              href={`/projects/${slug}/${project.slug}`}
              className="group block rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-9"
            >
              <h2 className="text-2xl font-semibold">
                {project.title}
              </h2>

              {project.description && (
                <p className="mt-4 text-lg leading-8 text-white/60">
                  {project.description}
                </p>
              )}

              {project.status && (
                <p className="mt-5 text-sm text-cyan-400">
                  {project.status}
                </p>
              )}

              <div className="mt-7 text-sm font-medium text-white/70 transition group-hover:text-cyan-400">
                Open project ?
              </div>
            </Link>
          ))}

          {projects.length === 0 && (
            <p className="text-white/50">
              No projects have been published in this domain yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
