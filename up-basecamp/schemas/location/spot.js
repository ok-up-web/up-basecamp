export default{
    name: 'spot',
    title: 'Spot',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 200,
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .replace(/ä/g, 'a')
                               .replace(/å/g, 'a')
                               .replace(/ö/g, 'o')
                               .slice(0, 200)
        },
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Geopoint',
        name: 'geopoint',
        type: 'geopoint'
      },
      {
        name: 'location',
        type: 'reference',
        to: [{type: 'location'}],
        title: 'Location',
        weak: true
      },
      {
          name: 'profiles',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'profile' }] }],
          title: 'Add profiles',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'localeDescription',
        title: 'Description translations',
        type: 'localeText'
      },
      {
        name: 'featured_articles',
        title: 'Link to featured articles',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'article'
            }
          }
        ]
      },
      {
        name: 'pageBuilder',
        type: 'array',
        title: 'Page builder',
        of: [
          { type: 'textBlock' },
          { type: 'accordionBlock' },
          { type: 'tableBlock' },
        ],
      },
          {
            name: 'image',
            title: 'Image',
            type: 'object',
            fields: [
              {
                name: 'mainImage',
                title: 'Main image',
                type: 'image',
                options: {
                  hotspot: true
                },
            },
            {
              name: 'panoramaImage',
              title: 'Panorama image',
              type: 'image',
          },
          {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string'
                  },
                  {
                    name: 'localeCaption',
                    title: 'Caption translations',
                    type: 'localeString'
                  },

                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description:
                      'A description of the image that will be read by screen readers and used by search engines.'
                  },
                  {
                    name: 'localeAlt',
                    title: 'Alt translations',
                    type: 'localeString'
                  },
                ]
              }
            ]
          },
            ]
    },

    {
      'name': 'metaBlock',
      'title': 'Meta settings',
      'type': 'object',
      'fields': [
        {
          'name': 'title',
          'title': 'Meta title',
          'type': 'string',
          'description': 'The title that appears in search engine results and in the browser window. Recommended length is 50-60 characters.'
        },
        {
          'name': 'description',
          'title': 'Meta description',
          'type': 'text',
          'description': 'The description that appears in search engine results below the title. Recommended length is 120-155 characters.'
        },
        {
          'name': 'image',
          'title': 'Meta Image',
          'type': 'image',
          'description': 'An image that appears in sharing previews on social media and in search engine results.'
        }
      ]
    },
      {
           'name': 'metaBlock_en',
           'title': 'Meta settings (English)',
           'type': 'object',
           'fields': [
             {
               'name': 'title',
               'title': 'Meta title',
               'type': 'string',
               'description': 'The title that appears in search engine results and in the browser window. Recommended length is 50-60 characters.'
             },
             {
               'name': 'description',
               'title': 'Meta description',
               'type': 'text',
               'description': 'The description that appears in search engine results below the title. Recommended length is 120-155 characters.'
             },
             {
               'name': 'image',
               'title': 'Meta Image',
               'type': 'image',
               'description': 'An image that appears in sharing previews on social media and in search engine results.'
             }
           ]
         }
    ],
  }
