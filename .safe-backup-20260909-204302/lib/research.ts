import {client} from './sanity'

export async function getResearchByDomain(domain: string) {
  return client.fetch(
    `
      *[_type == "research" && topic == $domain]
      | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        summary,
        coverImage,
        topic,
        status,
        question,
        featured
      }
    `,
    {domain},
    {
      next: {
        revalidate: 0,
      },
    },
  )
}
