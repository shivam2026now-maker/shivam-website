import Link from 'next/link'
import {notFound} from 'next/navigation'
import {client} from '@/lib/sanity'

const ARTICLE_QUERY = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    seoDescription,
    references,
    "pdfUrl": pdf.asset->url
  }
`

type Props = {
  params: Promise<{slug: string}>
}

export const dynamic = 'force-dynamic'

export default async function ArticlePage({params}: Props) {
  const {slug} = await params
  const article = await client.fetch(ARTICLE_QUERY, {slug})

  if (!article) notFound()

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/articles"
          className="text-sm text-white/60 hover:text-white"
        >
          ? Back to Articles
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="mt-4 max-w-3xl text-lg text-white/60">
            {article.excerpt}
          </p>
        )}

        <div className="mt-5 text-sm text-white/40">
          {article.author}
          {article.publishedAt &&
            ` � ${new Date(article.publishedAt).toLocaleDateString()}`}
        </div>

        {article.pdfUrl && (
          <div className="mt-10">
            <a
              href={article.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Open PDF ?
            </a>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <iframe
                src={article.pdfUrl}
                title={article.title}
                className="h-[80vh] w-full"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
