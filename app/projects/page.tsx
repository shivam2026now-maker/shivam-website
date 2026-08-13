import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Non-Propeller Drone",
    slug: "non-propeller-drone",
  },
  {
    number: "02",
    title: "Redesigning India Transport",
    slug: "redesigning-india-transport",
  },
];

export default function ProjectsPage() {
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
            Ideas, experiments and projects in development.
          </p>
        </header>

        <section className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05]"
            >
              <span className="text-sm text-cyan-400">
                {project.number}
              </span>

              <h2 className="mt-8 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-8 text-sm font-semibold text-slate-400 transition group-hover:text-cyan-300">
                Open project →
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
