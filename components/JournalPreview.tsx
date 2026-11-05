"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/lib/sanity";

const JOURNAL_QUERY = `
  *[_type == "journal"] | order(date desc, _createdAt desc)[0...3] {
    _id,
    title,
    date,
    body
  }
`;

function getExcerpt(body: any) {
  if (!Array.isArray(body)) return "";

  const text = body
    .filter((block: any) => block?._type === "block")
    .map((block: any) =>
      Array.isArray(block.children)
        ? block.children.map((child: any) => child.text || "").join("")
        : ""
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return text.length > 150 ? `${text.slice(0, 150).trim()}…` : text;
}

export default function JournalPreview() {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    client
      .fetch(JOURNAL_QUERY)
      .then((data) => setEntries(Array.isArray(data) ? data : []))
      .catch(() => setEntries([]));
  }, []);

  return (
    <div className="mt-12 space-y-5">
      {entries.map((entry) => (
        <Link
          key={entry._id}
          href={`/journal#${entry._id}`}
          className="group block rounded-3xl border border-white/10 bg-[#080d20] p-6 transition hover:border-cyan-400/40 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 text-cyan-400">›</span>

            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300 sm:text-2xl">
                {entry.title}
              </h3>

              {getExcerpt(entry.body) && (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">
                  {getExcerpt(entry.body)}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}

      <Link
        href="/journal"
        className="inline-flex items-center pt-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
      >
        Just tap and read →
      </Link>
    </div>
  );
}
