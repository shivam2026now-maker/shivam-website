import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: Rule => Rule.required()}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3}),
    defineField({
      name: 'pdf',
      title: 'Article PDF',
      type: 'file',
      options: {accept: 'application/pdf'},
      validation: Rule => Rule.required(),
    }),
    defineField({name: 'author', title: 'Author', type: 'string', initialValue: 'Shivam Chandrawanshi'}),
    defineField({name: 'publishedAt', title: 'Published Date', type: 'datetime', initialValue: () => new Date().toISOString()}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
    defineField({name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3}),
    defineField({name: 'references', title: 'References & Sources', type: 'array', of: [{type: 'string'}]}),
  ],
})
