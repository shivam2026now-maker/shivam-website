import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

const query = `*[
  _type == "journal" &&
  slug.current == $slug &&
  !(_id in path("drafts.**"))
][0]{
  _id,
  title,
  slug,
  shortDescription,
  coverImage,
  publishedAt,
  tags,
  body
}`;

function date(value?: string) {
  return value
    ? new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const entry = await client.fetch(query, { slug });

  if (!entry) {
    notFound();
  }

  const image = entry.coverImage
    ? urlFor(entry.coverImage)
        .width(1600)
        .quality(90)
        .url()
    : null;

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">

        <Link
          href="/journal"
          className="text-sm text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Journal
        </Link>

        <header className="pt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Field Journal
          </p>

          <p className="mt-5 text-sm text-slate-500">
            {date(entry.publishedAt)}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            {entry.title}
          </h1>

          {entry.shortDescription && (
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              {entry.shortDescription}
            </p>
          )}

          {entry.tags?.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {entry.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {image && (
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
            <img
              src={image}
              alt={entry.coverImage?.alt || entry.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <article className="mt-12">
          {entry.body ? (
            <div className="prose prose-invert max-w-none">
              {entry.body.map((block: any, index: number) => (
                <p key={block._key || index} className="mb-6 text-lg leading-8 text-slate-300">
                  {block.children
                    ?.map((child: any) => child.text)
                    .join("")}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">
              This journal entry does not have any content yet.
            </p>
          )}
        </article>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/journal"
            className="text-sm text-cyan-300 hover:text-cyan-200"
          >
            ← Back to all journal entries
          </Link>
        </div>

      </div>
    </main>
  );
}
