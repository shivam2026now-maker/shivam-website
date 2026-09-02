import { client } from './sanity'

export async function getProjects() {
  return client.fetch(
    `
      *[_type in ["project", "projects"]] | order(publishedAt desc, _createdAt desc) {
        _id,
        title,
        name,
        "slug": slug.current,
        excerpt,
        summary,
        description,
        publishedAt,
        featured
      }
    `,
    {},
    {
      next: {
        revalidate: 0,
      },
    },
  )
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `
      *[_type in ["project", "projects"] && slug.current == $slug][0] {
        _id,
        title,
        name,
        "slug": slug.current,
        excerpt,
        summary,
        description,
        body,
        publishedAt,
        author,
        tags,
        featured
      }
    `,
    { slug },
    {
      next: {
        revalidate: 0,
      },
    },
  )
}
