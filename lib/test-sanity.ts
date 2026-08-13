import {client} from './sanity'

export async function getArticles() {
  return client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      featured
    }
  `)
}
