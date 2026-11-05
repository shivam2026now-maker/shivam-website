import {PortableText} from "@portabletext/react";
import Link from "next/link";
import {client} from "@/lib/sanity";

export const dynamic = "force-dynamic";

const JOURNAL_QUERY = `
  *[_type == "journal" && _id == $id][0] {
    _id,
    title,
    date,
    body
  }
`;

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;
  const entry = await client.fetch(JOURNAL_QUERY, {id});

  if (!entry) {
    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
          <Link href="/journal" className="text-sm text-cyan-400">
            ← Back to Journal
          </Link>

          <h1 className="mt-12 text-4xl font-semibold">
            Journal entry not found.
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-16">
        <Link href="/journal" className="text-sm text-cyan-400">
          ← Back to Journal
        </Link>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Journal
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {entry.title}
          </h1>

          {entry.date && (
            <p className="mt-5 text-sm text-slate-500">
              {new Date(entry.date).toLocaleDateString()}
            </p>
          )}

          {entry.body && (
            <div className="prose prose-invert mt-10 max-w-none prose-p:leading-8">
              <PortableText value={entry.body} />
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
