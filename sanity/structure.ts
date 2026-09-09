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
          S.list()
            .title('Projects')
            .items([
              S.listItem()
                .title('New Project')
                .child(
                  S.documentTypeList('project')
                    .title('Create / Manage Projects')
                    .filter('_id == $id')
                    .params({id: '__new__'}),
                ),

              S.divider(),

              S.listItem()
                .title('Existing Projects')
                .child(
                  S.documentTypeList('project')
                    .title('Existing Projects')
                    .defaultOrdering([
                      {field: 'publishedAt', direction: 'desc'},
                    ]),
                ),
            ]),
        ),

      S.listItem()
        .title('Research')
        .child(
          S.list()
            .title('Research')
            .items([
              S.listItem()
                .title('New Research')
                .child(
                  S.documentTypeList('research')
                    .title('Create / Manage Research')
                    .filter('_id == $id')
                    .params({id: '__new__'}),
                ),

              S.divider(),

              S.listItem()
                .title('Existing Research')
                .child(
                  S.documentTypeList('research')
                    .title('Existing Research')
                    .defaultOrdering([
                      {field: 'publishedAt', direction: 'desc'},
                    ]),
                ),
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
