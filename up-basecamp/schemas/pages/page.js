import TextareaWithCounter from '../../components/TextareaWithCounter';

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
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
      name: 'subPages',
      title: 'Sub Pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'page' }] }],
    },
  
      {
        name: 'pageBuilder',
        type: 'array',
        title: 'Page builder',
        of: [
          { type: 'heroBlock'},
          { type: 'textBlock' },
          { type: 'accordionBlock' },
          { type: 'tableBlock' },
          { type: 'mapBlock'},
          { type: 'carouselBlock'},
          { type: 'listBlock'},
          { type: 'quoteBlock'},
          { type: 'tabsBlock'}
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

            ]
    },
      {
        'name': 'categorize',
        'title': 'Categorize',
        'type': 'object',
        'fields': [
      {
        name: 'category',
        title: 'Category',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'category'
            }
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

],

    preview: {
      select: {
        title: 'title',
        media: 'mainImage'
      }
    }
  }
