import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectItem',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Project Name', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: Rule => Rule.required()}),
    defineField({
      name: 'category',
      title: 'Project Domain',
      type: 'reference',
      to: [{type: 'projectCategory'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'projectPdf',
      title: 'Project PDF',
      type: 'file',
      options: {accept: 'application/pdf'},
    }),
    defineField({name: 'summary', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'content', title: 'Project Details', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'publishedAt', title: 'Published At', type: 'datetime', initialValue: () => new Date().toISOString()}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean', initialValue: false}),
  ],
})
