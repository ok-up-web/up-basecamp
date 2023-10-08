export default{
    name: 'municipality',
    title: 'Municipality',
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
        name: 'region',
        type: 'reference',
        to: [{type: 'region'}],
        title: 'Region',
        weak: true
      },
      {
        name: 'selectedMunicipality',
        type: 'boolean',
        title: 'Selected municipality',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',

      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'featuredArticle',
        title: 'Featured Article',
        type: 'reference',
        to: [
          {
            type: 'article'
          }
        ]
      },
      {
        name: 'additionalArticles',
        title: 'Additional Articles',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {
                type: 'article'
              }
            ]
          }
        ],
        validation: Rule => Rule.max(3) // Maximalt 3 artiklar
      },
      {
        name: 'featuredRenters',
        title: 'Featured Renters',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {
                type: 'profile'
              }
            ]
          }
        ],
        validation: Rule => Rule.max(3) // Maximalt 3 artiklar
      },
      {
        name: 'searchPhrase',
        title: 'Search Phrase',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'searchPhrase' }],
          },
        ],
      },

  {
    name: 'featuredSearchPhrases',
    title: 'Featured Search Phrases',
    type: 'object',
    fields: [
      {
        name: 'headline',
        title: 'Headline for Search Phrases',
        type: 'string',

      },
      {
        name: 'searchPhrase',
        title: 'Search Phrase',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'searchPhrase' }],
          },
        ],
      },
    ],

  },
      {
        'name': 'seo',
        'title': 'SEO',
        'type': 'object',
        'fields': [
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
          }
        ]
      }
    ],
  }
