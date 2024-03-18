export default {
    name: 'searchPhrase',
    title: 'Search Phrase',
    type: 'document',
    fields: [
      {
    name: 'language',
    title: 'Language',
    type: 'reference',
    to: [{ type: 'language' }],
    description: 'Select the language this page is associated with.',
  },
      {
        name: 'title',
        title: 'Page title',
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
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
      },
      {
        name: 'keywords',
        title: 'Keywords',
        type: 'string',
      },
      {
        name: 'location',
        title: 'Connect to location',
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
        name: 'renters',
        title: 'Renters',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'profile'
            }
          }
        ]
      },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            },
        },



  {
    name: 'mainEquipmentCategory',
    title: 'Link to main category',
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
    title: 'Link to sub Category',
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
        name: 'checklist',
        title: 'Link to featured checklists',
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
  };
