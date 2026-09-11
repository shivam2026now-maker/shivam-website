import Link from "next/link";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

type Article = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  coverImage?: {
    asset?: {
      _ref: string;
    };
    alt?: string;
  };
  author?: string;
  publishedAt?: string;
};

async function getArticles(): Promise<Article[]> {
  return client.fetch(
    `*[
      _type == "article" &&
      defined(slug.current) &&
      !(_id in path("drafts.**"))
    ] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      coverImage,
      author,
      publishedAt
    }`,
    {},
    {
      next: {
        revalidate: 60,
      },
    },
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

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-cyan-400 transition hover:text-cyan-200"
        >
Back home
        </Link>

        <header className="mb-16 mt-14 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">
            Articles
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Ideas, questions &amp; explorations.
          </h1>

          <p className="mt-6 text-lg leading-8 opacity-70">
            Long-form writing on science, technology, research, ideas and the
            questions that keep me curious.
          </p>
        </header>

        {articles.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-8">
            <p className="text-lg font-medium">No published articles yet.</p>
            <p className="mt-2 opacity-60">
              Publish an article from Sanity Studio and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={`/articles/${article.slug.current}`}
                className="group block"
              >
                {article.coverImage?.asset && (
                  <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={urlFor(article.coverImage)
                        .width(1400)
                        .height(800)
                        .fit("crop")
                        .auto("format")
                        .url()}
                      alt={article.coverImage.alt || article.title}
                      className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 text-sm opacity-60">
                  {article.publishedAt && (
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                  )}

                  {article.author && (
                    <>
                      <span aria-hidden="true"></span>
                      <span>{article.author}</span>
                    </>
                  )}
                </div>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-colors group-hover:text-cyan-300">
                  {article.title}
                </h2>

                {article.excerpt && (
                  <p className="mt-3 max-w-2xl leading-7 opacity-65">
                    {article.excerpt}
                  </p>
                )}

                <span className="mt-5 inline-block text-sm font-medium text-slate-400 underline underline-offset-4 transition-colors group-hover:text-cyan-300">
                  Read article</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}