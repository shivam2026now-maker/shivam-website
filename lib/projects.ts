import { client } from './sanity'

export async function getProjectCategories() {
  return client.fetch(
    `
      *[_type == "projectCategory"] | order(title asc) {
        _id,
        title,
        "slug": slug.current,
        description,
        publishedAt
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

export async function getProjectCategoryBySlug(slug: string) {
  return client.fetch(
    `
      *[_type == "projectCategory" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        description,
        publishedAt
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

export async function getProjectItemsByCategory(categoryId: string) {
  return client.fetch(
    `
      *[_type == "projectItem" && category._ref == $categoryId] | order(publishedAt desc, _createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        summary,
        description,
        body,
        publishedAt,
        featured
      }
    `,
    { categoryId },
    {
      next: {
        revalidate: 0,
      },
    },
  )
}

export async function getProjectItemBySlug(slug: string) {
  return client.fetch(
    `
      *[_type == "projectItem" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        summary,
        description,
        body,
        publishedAt,
        featured,
        category->{
          _id,
          title,
          "slug": slug.current,
          description
        }
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

export async function getProjectItemByCategoryAndSlug(categorySlug: string, itemSlug: string) {
  return client.fetch(
    `
      *[
        _type == "projectItem"
        && slug.current == $itemSlug
        && category->slug.current == $categorySlug
      ][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        summary,
        description,
        body,
        publishedAt,
        featured,
        category->{
          _id,
          title,
          "slug": slug.current,
          description
        }
      }
    `,
    { categorySlug, itemSlug },
    {
      next: {
        revalidate: 0,
      },
    },
  )
}
