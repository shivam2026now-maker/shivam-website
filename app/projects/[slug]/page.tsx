import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "non-propeller-drone": {
    number: "01",
    title: "Non-Propeller Drone",
    description:
      "An experimental project exploring alternative approaches to drone propulsion and aerial mobility.",
  },
  "redesigning-india-transport": {
    number: "02",
    title: "Redesigning India Transport",
    description:
      "An exploration of ideas for improving India's transportation systems through engineering, infrastructure, and technology.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

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
            Project {project.number}
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>
        </header>

        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.025] p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Project Details
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            Project details will appear here.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            This space will contain the project description, development
            process, sketches, experiments, results, images, and future
            updates.
          </p>
        </section>

      </div>
    </main>
  );
}
