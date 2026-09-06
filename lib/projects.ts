import {client} from '@/sanity/lib/client'

export async function getProjects(domain?: string) {
  const query = domain
    ? `*[_type == "project" && domain == $domain] | order(_createdAt desc) {
        _id, title, "slug": slug.current, domain, description, status,
        "pdfUrl": projectPdf.asset->url
      }`
    : `*[_type == "project"] | order(_createdAt desc) {
        _id, title, "slug": slug.current, domain, description, status,
        "pdfUrl": projectPdf.asset->url
      }`

  return client.fetch(query, {domain})
}

export async function getProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      domain,
      description,
      status,
      "pdfUrl": projectPdf.asset->url,
      body
    }`,
    {slug}
  )
}
