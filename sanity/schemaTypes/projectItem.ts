import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectItem',
  title: 'Project Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      description: 'Choose the project this post belongs to, such as Non-Propeller Drone.',
      type: 'reference',
      to: [{type: 'projectCategory'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Two-line Summary',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: 'content',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
