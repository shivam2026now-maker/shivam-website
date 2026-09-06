import Link from "next/link";
import { getProjects, PROJECT_DOMAINS } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  const domains = PROJECT_DOMAINS.filter((domain) =>
    projects.some((project: any) => project.domain === domain.value)
  );

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ? Back home
        </Link>

        <div className="mt-24">
          <p className="text-sm tracking-[0.35em] text-cyan-400">
            PROJECTS
          </p>

          <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-7xl">
            Projects
          </h1>

          <p className="mt-8 text-xl text-white/60">
            Explore each project area and its published updates.
          </p>
        </div>

        <div className="mt-24 grid gap-6">
          {domains.map((domain, index) => (
            <Link
              key={domain.value}
              href={`/projects/${domain.value}`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-12"
            >
              <div className="text-lg text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="mt-14 text-3xl font-semibold sm:text-4xl">
                {domain.title}
              </h2>

              <p className="mt-7 max-w-2xl text-xl text-white/60">
                {domain.description}
              </p>

              <div className="mt-12 text-lg font-medium text-white/70 transition group-hover:text-cyan-400">
                Open project ?
              </div>
            </Link>
          ))}

          {domains.length === 0 && (
            <p className="text-white/50">
              No projects published yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
