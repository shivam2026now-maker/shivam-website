import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Shiwam Chandravanshi')
    .items([
      // --------------------------------------------
      // ARTICLES
      // --------------------------------------------

      S.listItem()
        .title('Articles')
        .child(
          S.documentTypeList('article')
            .title('Articles')
            .defaultOrdering([
              {
                field: 'publishedAt',
                direction: 'desc',
              },
            ]),
        ),

      S.divider(),

      // --------------------------------------------
      // PROJECTS
      // --------------------------------------------

      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('➕ New Project')
                .child(
                  S.document()
                    .schemaType('project')
                    .documentId('new-project'),
                ),

              S.divider(),

              S.listItem()
                .title('📁 Existing Projects')
                .child(
                  S.documentTypeList('project')
                    .title('Existing Projects')
                    .defaultOrdering([
                      {
                        field: 'publishedAt',
                        direction: 'desc',
                      },
                    ]),
                ),
            ]),
        ),

      // --------------------------------------------
      // RESEARCH
      // --------------------------------------------

      S.listItem()
        .title('Research')
        .child(
          S.list()
            .title('Research')
            .items([
              S.listItem()
                .title('➕ New Research')
                .child(
                  S.document()
                    .schemaType('research')
                    .documentId('new-research'),
                ),

              S.divider(),

              S.listItem()
                .title('📚 Existing Research')
                .child(
                  S.documentTypeList('research')
                    .title('Existing Research')
                    .defaultOrdering([
                      {
                        field: 'publishedAt',
                        direction: 'desc',
                      },
                    ]),
                ),
            ]),
        ),

      S.divider(),

      // --------------------------------------------
      // JOURNAL
      // --------------------------------------------

      S.listItem()
        .title('Journal')
        .child(
          S.documentTypeList('journal')
            .title('Journal')
            .defaultOrdering([
              {
                field: 'publishedAt',
                direction: 'desc',
              },
            ]),
        ),

      // --------------------------------------------
      // MEDIA
      // --------------------------------------------

      S.listItem()
        .title('Media')
        .child(
          S.documentTypeList('media')
            .title('Media')
            .defaultOrdering([
              {
                field: 'publishedAt',
                direction: 'desc',
              },
            ]),
        ),
    ])
