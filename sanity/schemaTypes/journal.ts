import {defineField, defineType} from 'sanity'

const journalRichText = {
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
  name: 'journal',
  title: 'Journal',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Journal Title',
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
        }),
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'body',
      title: 'Journal Content',
      type: 'array',
      of: journalRichText.of,
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
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
      media?: any
    }) {
      return {
        title: title || 'Untitled Journal',
        subtitle: subtitle || 'Journal',
        media,
      }
    },
  },
})
