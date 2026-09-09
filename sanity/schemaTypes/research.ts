import {defineField, defineType} from 'sanity'

const richText = {
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              }),
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    },
  ],
}

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Research Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      description: 'Keep this concise. It is used on cards and listings.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Idea', value: 'idea'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Published', value: 'published'},
          {title: 'Completed', value: 'completed'},
        ],
        layout: 'radio',
      },
      initialValue: 'idea',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'sections',
      title: 'Table of Contents / Sections',
      description:
        'Each section belongs to this Research document. Add Introduction, Methodology, Literature Review, Findings, Analysis, or any other section.',
      type: 'array',
      of: [
        {
          name: 'researchSection',
          title: 'Research Section',
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'slug',
              title: 'Section ID',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'content',
              title: 'Section Content',
              type: 'array',
              of: richText.of,
              validation: (Rule) => Rule.required().min(1),
            }),
          ],

          preview: {
            select: {
              title: 'title',
              slug: 'slug.current',
            },

            prepare({title, slug}: {title?: string; slug?: string}) {
              return {
                title: title || 'Untitled Section',
                subtitle: slug ? '/' + slug : 'No section ID',
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
      media: 'coverImage',
    },

    prepare({
      title,
      subtitle,
      media,
    }: {
      title?: string
      subtitle?: string
      media?: unknown
    }) {
      return {
        title: title || 'Untitled Research',
        subtitle: subtitle || 'Research',
        media,
      }
    },
  },
})
