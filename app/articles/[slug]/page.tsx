import {notFound} from 'next/navigation'
import Link from 'next/link'
import {PortableText} from '@portabletext/react'
import {client} from '@/lib/sanity'

const ARTICLE_QUERY = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    tags,
    body,
    author,
    publishedAt,
    seoDescription,
    references
  }
`

type Props = {
  params: Promise<{slug: string}>
}

export default async function ArticlePage({params}: Props) {
  const {slug} = await params

  const article = await client.fetch(ARTICLE_QUERY, {slug})

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-20">
        <Link href="/articles" className="text-sm text-cyan-400">
          ← Back to Articles
        </Link>

        <article className="mt-16">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            {article.category || 'Article'}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="mt-7 text-lg leading-8 text-slate-400">
              {article.excerpt}
            </p>
          )}

          <div className="mt-6 text-sm text-slate-500">
            {article.author || 'Shivam Chandrawanshi'}
            {article.publishedAt && (
              <>
                {' • '}
                {new Date(article.publishedAt).toLocaleDateString()}
              </>
            )}
          </div>

          {article.body && (
            <div className="prose prose-invert mt-12 max-w-none">
              <PortableText value={article.body} />
            </div>
          )}

          {article.tags?.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {article.references?.length > 0 && (
            <section className="mt-16 border-t border-white/10 pt-10">
              <h2 className="text-2xl font-semibold">
                References & Sources
              </h2>

              <div className="mt-6 space-y-4">
                {article.references.map(
                  (source: {title?: string; url?: string}, index: number) => (
                    <div
                      key={`${source.url || source.title || 'source'}-${index}`}
                      className="rounded-2xl border border-white/10 p-5"
                    >
                      <p className="font-medium">
                        {source.title || 'Source'}
                      </p>

                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block break-all text-sm text-cyan-400 hover:underline"
                        >
                          {source.url}
                        </a>
                      )}
                    </div>
                  ),
                )}
              </div>
            </section>
          )}
        </article>
      </div>
    </main>
  )
}
