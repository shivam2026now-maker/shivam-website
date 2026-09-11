import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Shivam Website')
    .items([
      S.listItem()
        .title('Articles')
        .child(
          S.documentTypeList('article')
            .title('Articles')
            .defaultOrdering([
              {field: 'publishedAt', direction: 'desc'},
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .defaultOrdering([
              {field: 'publishedAt', direction: 'desc'},
            ]),
        ),

      S.listItem()
        .title('Research')
        .child(
          S.documentTypeList('research')
            .title('Research')
            .defaultOrdering([
              {field: 'publishedAt', direction: 'desc'},
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Journal')
        .child(
          S.documentTypeList('journal')
            .title('Journal')
            .defaultOrdering([
              {field: 'publishedAt', direction: 'desc'},
            ]),
        ),

      S.listItem()
        .title('Media')
        .child(
          S.documentTypeList('media')
            .title('Media')
            .defaultOrdering([
              {field: 'publishedAt', direction: 'desc'},
            ]),
        ),
    ])
