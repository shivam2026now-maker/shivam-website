import Link from 'next/link'
import {client} from '@/lib/sanity'

const ARTICLES_QUERY = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    featured,
    "pdfUrl": pdf.asset->url
  }
`

export const dynamic = 'force-dynamic'

export default async function ArticlesPage() {
  const articles = await client.fetch(ARTICLES_QUERY)

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ? Back
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">
          Articles
        </h1>

        <p className="mt-3 max-w-2xl text-white/60">
          Research, ideas, observations and long-form writing.
        </p>

        <div className="mt-12 space-y-5">
          {articles.map((article: any) => (
            <article
              key={article._id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-2xl font-medium">{article.title}</h2>

              {article.excerpt && (
                <p className="mt-3 text-white/60">{article.excerpt}</p>
              )}

              <div className="mt-4 text-sm text-white/40">
                {article.author}
                {article.publishedAt &&
                  ` � ${new Date(article.publishedAt).toLocaleDateString()}`}
              </div>

              {article.pdfUrl && (
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white hover:text-black"
                >
                  Read Article ?
                </a>
              )}
            </article>
          ))}

          {articles.length === 0 && (
            <p className="text-white/50">No articles published yet.</p>
          )}
        </div>
      </div>
    </main>
  )
}
