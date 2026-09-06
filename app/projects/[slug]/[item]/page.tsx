import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getProject, getProjectDomain } from "@/lib/projects";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string; item: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug, item } = await params;

  const domain = getProjectDomain(slug);
  const project = await getProject(item);

  if (!domain || !project || project.domain !== slug) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <Link
          href={`/projects/${slug}`}
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ? Back to {domain.title}
        </Link>

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-cyan-400">
            {domain.title}
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          {project.status && (
            <p className="mt-5 text-sm text-cyan-400">
              {project.status}
            </p>
          )}

          {project.description && (
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/60">
              {project.description}
            </p>
          )}
        </div>

        {project.body && (
          <section className="prose prose-invert mt-14 max-w-none">
            <PortableText value={project.body} />
          </section>
        )}

        {project.pdfUrl && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold">
              Project PDF
            </h2>

            <div className="mt-7 overflow-hidden rounded-3xl border border-white/10 bg-white">
              <iframe
                src={project.pdfUrl}
                title={project.title}
                className="h-[80vh] w-full"
              />
            </div>

            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
            >
              Open PDF ?
            </a>
          </section>
        )}
      </div>
    </main>
  );
}
