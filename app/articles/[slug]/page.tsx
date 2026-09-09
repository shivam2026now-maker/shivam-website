import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanity'

type Article = {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  author?: string
  publishedAt?: string
  seoDescription?: string
  coverImage?: {
    asset?: {
      _ref?: string
    }
    alt?: string
    caption?: string
  }
  body?: Array<{
    _type: string
    _key: string
    [key: string]: unknown
  }>
  references?: string[]
}

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const articleQuery = `
  *[
    _type == "article" &&
    slug.current == $slug
  ][0]{
    _id,
    title,
    slug,
    excerpt,
    author,
    publishedAt,
    seoDescription,
    coverImage{
      ...,
      asset
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset
      }
    },
    references
  }
`

async function getArticle(slug: string): Promise<Article | null> {
  return client.fetch(articleQuery, { slug })
}

function calculateReadingTime(body?: Article['body']) {
  if (!body) return 1

  const text = body
    .filter((block) => block._type === 'block')
    .map((block) => {
      const children = block.children as
        | Array<{ text?: string }>
        | undefined

      return (
        children?.map((child) => child.text || '').join(' ') || ''
      )
    })
    .join(' ')

  const words = text.trim().split(/\s+/).filter(Boolean).length

  return Math.max(1, Math.ceil(words / 200))
}

function formatDate(date?: string) {
  if (!date) return ''

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[17px] leading-8 text-neutral-700">
        {children}
      </p>
    ),

    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 text-3xl font-semibold tracking-tight text-neutral-950">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl font-semibold text-neutral-950">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-xl font-semibold text-neutral-950">
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-neutral-900 pl-6 text-xl italic leading-8 text-neutral-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-[17px] leading-8 text-neutral-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-[17px] leading-8 text-neutral-700">
        {children}
      </ol>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-950">
        {children}
      </strong>
    ),

    em: ({ children }) => <em>{children}</em>,

    underline: ({ children }) => (
      <span className="underline underline-offset-2">
        {children}
      </span>
    ),

    'strike-through': ({ children }) => (
      <span className="line-through">{children}</span>
    ),

    link: ({ children, value }) => {
      const href = value?.href

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-400 underline-offset-4 transition hover:decoration-neutral-900"
        >
          {children}
        </a>
      )
    },
  },

  types: {
    image: ({ value }) => {
      if (!value?.asset) return null

      return (
        <figure className="my-10">
          <img
            src={urlFor(value)
              .width(1400)
              .quality(90)
              .auto('format')
              .url()}
            alt={value.alt || ''}
            className="h-auto w-full rounded-2xl"
            loading="lazy"
          />

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm leading-6 text-neutral-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  const description =
    article.seoDescription ||
    article.excerpt ||
    `Read ${article.title} by ${
      article.author || 'Shivam Chandrawanshi'
    }.`

  const coverImage = article.coverImage?.asset
    ? urlFor(article.coverImage)
        .width(1200)
        .height(630)
        .fit('crop')
        .url()
    : undefined

  return {
    title: article.title,
    description,

    openGraph: {
      title: article.title,
      description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: article.author ? [article.author] : undefined,
      images: coverImage ? [coverImage] : undefined,
    },

    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: coverImage ? [coverImage] : undefined,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const readingTime = calculateReadingTime(article.body)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description:
      article.seoDescription ||
      article.excerpt ||
      '',
    author: {
      '@type': 'Person',
      name: article.author || 'Shivam Chandrawanshi',
    },
    datePublished: article.publishedAt,
    image: article.coverImage?.asset
      ? urlFor(article.coverImage)
          .width(1200)
          .height(630)
          .url()
      : undefined,
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <header className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
            {article.publishedAt && (
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            )}

            {article.author && (
              <>
                <span aria-hidden="true">â€¢</span>
                <span>{article.author}</span>
              </>
            )}

            <span aria-hidden="true">â€¢</span>

            <span>{readingTime} min read</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
              {article.excerpt}
            </p>
          )}
        </header>

        {article.coverImage?.asset && (
          <figure className="mb-14">
            <img
              src={urlFor(article.coverImage)
                .width(1600)
                .quality(90)
                .auto('format')
                .url()}
              alt={article.coverImage.alt || article.title}
              className="h-auto w-full rounded-3xl"
              loading="eager"
            />

            {article.coverImage.caption && (
              <figcaption className="mt-3 text-center text-sm text-neutral-500">
                {article.coverImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        <div className="mx-auto max-w-3xl">
          {article.body && article.body.length > 0 ? (
            <PortableText
              value={article.body}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-neutral-500">
              This article does not have any content yet.
            </p>
          )}

          {article.references &&
            article.references.length > 0 && (
              <section className="mt-16 border-t border-neutral-200 pt-10">
                <h2 className="mb-5 text-2xl font-semibold text-neutral-950">
                  References &amp; Sources
                </h2>

                <ul className="space-y-3 text-sm leading-6 text-neutral-600">
                  {article.references.map(
                    (reference, index) => (
                      <li key={`${reference}-${index}`}>
                        {reference}
                      </li>
                    ),
                  )}
                </ul>
              </section>
            )}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </main>
  )
}
