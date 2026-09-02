import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: '2mcdfmo7',
  dataset: 'production',
  apiVersion: '2026-08-13',
  useCdn: false,
})
