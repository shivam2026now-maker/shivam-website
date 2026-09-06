import {client} from '@/sanity/lib/client'

export const PROJECT_DOMAINS = [
  {
    title: 'Non-Propeller Drone',
    value: 'non-propeller-drone',
    description: 'Non-Propeller Drone project updates and research.',
  },
  {
    title: 'Other',
    value: 'other',
    description: 'Other engineering and independent projects.',
  },
]

export async function getProjects(domain?: string) {
  const query = domain
    ? `*[_type == "project" && domain == $domain] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        domain,
        description,
        status,
        "pdfUrl": projectPdf.asset->url
      }`
    : `*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        domain,
        description,
        status,
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
    {slug},
  )
}

export function getProjectDomain(value: string) {
  return PROJECT_DOMAINS.find((domain) => domain.value === value)
}
