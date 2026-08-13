import Link from 'next/link'
import {client} from '@/lib/sanity'

const ARTICLES_QUERY = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    featured
  }
`

export default async function ArticlesPage() {
  const articles = await client.fetch(ARTICLES_QUERY)

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-20">
        <Link href="/" className="text-sm text-cyan-400">
          ← Back home
        </Link>

        <header className="mt-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            Articles
          </p>

          <h1 className="mt-5 text-5xl font-semibold sm:text-7xl">
            Ideas, questions & analysis.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            A growing archive of structured writing supported by sources,
            evidence and reasoning.
          </p>
        </header>

        <section className="mt-16 space-y-6">
          {articles.length === 0 ? (
            <div className="rounded-3xl border border-white/10 p-8 text-slate-400">
              No published articles yet.
            </div>
          ) : (
            articles.map((article: any) => (
              <Link
                key={article._id}
                href={`/articles/${article.slug}`}
                className="block rounded-3xl border border-white/10 p-8 transition hover:border-cyan-400/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                  {article.category || 'Article'}
                </p>

                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {article.title}
                </h2>

                {article.excerpt && (
                  <p className="mt-4 leading-7 text-slate-400">
                    {article.excerpt}
                  </p>
                )}

                {article.publishedAt && (
                  <p className="mt-5 text-sm text-slate-500">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                )}
              </Link>
            ))
          )}
        </section>
      </div>
    </main>
  )
}
