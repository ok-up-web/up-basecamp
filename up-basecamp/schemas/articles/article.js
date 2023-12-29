export default {
    name: 'article',
    title: 'Article',
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
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
        name: 'pageBuilder',
        type: 'array',
        title: 'Page builder',
        of: [
          { type: 'textBlock' },
          { type: 'accordionBlock' },
          { type: 'tableBlock' },
          { type: 'mapBlock'},
          { type: 'carouselBlock'},
          { type: 'listBlock'},
          { type: 'quoteBlock'},
          { type: 'tabsBlock'},
              { type: 'personGallery'}
        ],
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              { title: 'Normal', value: 'normal' },
              { title: 'H1', value: 'h1' },
              { title: 'H2', value: 'h2' },
              { title: 'H3', value: 'h3' },
              { title: 'H4', value: 'h4' },
              { title: 'H5', value: 'h5' }
            ],
            lists: [
              { title: 'Bullet', value: 'bullet' },
              { title: 'Numbered', value: 'number' }
            ],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' }
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'URL',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL'
                    }
                  ]
                }
              ]
            }
          },
          { type: 'image' }
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
      {
        name: 'tag',
        title: 'Tag',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'tag'
            }
          }
        ]
      },
      {
        name: 'mainEquipmentCategory',
        title: 'Equipment - Main Category',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'mainEquipmentCategory'
            }
          }
        ]
      },
      {
        name: 'subEquipmentCategory',
        title: 'Equipment - Sub Category',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'subEquipmentCategory'
            }
          }
        ]
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
        name: 'location',
        title: 'Location',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'location'
            }
          }
        ]
      },
      {
        name: 'checklist',
        title: 'Checklist',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'checklist'
            }
          }
        ]
      },
      {
        name: 'selectedCompanies',
        title: 'Select companies related to article',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'company'
            }
          }
        ]
      },
    ]
},
      {
        'name': 'about',
        'title': 'About',
        'type': 'object',
        'fields': [
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {
          type: 'author'
        },
        validation: Rule => Rule.required()
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
        author: 'author.name',
        media: 'mainImage'
      }
    }
  }
