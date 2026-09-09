import {createImageUrlBuilder} from '@sanity/image-url'
import {client} from './sanity'

const builder = createImageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source)
}
