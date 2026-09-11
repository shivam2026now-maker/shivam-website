import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import ResearchSectionViewer from "../ResearchSectionViewer";

export const dynamic = "force-dynamic";

async function getResearch(slug: string) {
  return client.fetch(
    `*[
      _type == "research" &&
      slug.current == $slug &&
      !(_id in path("drafts.**"))
    ][0]{
      _id,
      title,
      slug,
      shortDescription,
      publishedAt,
      status,
      featured,
      sections[]{
        _key,
        title,
        slug,
        content
      }
    }`,
    { slug },
    { next: { revalidate: 0 } }
  );
}

function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const research = await getResearch(slug);

  if (!research) notFound();

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-14">

        <Link
          href="/research"
          className="inline-flex text-sm text-slate-500 transition hover:text-cyan-300"
        >
          ? Back to Research
        </Link>

        <header className="mt-12 border-b border-white/10 pb-9">
          <p className="text-[10px] uppercase tracking-[0.32em] text-cyan-400">
            Research
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-light tracking-tight sm:text-6xl">
            {research.title}
          </h1>

          {research.shortDescription && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              {research.shortDescription}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.15em] text-slate-600">
            {research.publishedAt && (
              <time dateTime={research.publishedAt}>
                {formatDate(research.publishedAt)}
              </time>
            )}

            {research.status && (
              <>
                <span>&#8226;</span>
                <span>{research.status.replace("-", " ")}</span>
              </>
            )}

            {research.featured && (
              <>
                <span>&#8226;</span>
                <span className="text-cyan-500">Featured</span>
              </>
            )}
          </div>
        </header>

        <section className="mt-12">
          <ResearchSectionViewer sections={research.sections} />
        </section>

      </div>
    </main>
  );
}