export default
{
    name: 'checklist',
    title: 'Checklist',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titel',
        type: 'string'
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
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
                {
                    name: 'item',
                    title: 'Utrustning',
                    type: 'reference',
                    to: [{type: 'items'}]
                  },

                  {
                    name: 'description',
                    title: 'Description',
                    type: 'string'
                  },
            ],
            preview: {
                select: {
                  title: 'item.title',

                },
                prepare(selection) {
                  const { title  } = selection;
                  return {
                    title: title,
                  }
                }
              }
          }
        ]
      },
      {
        name: 'equipment',
        title: 'Equipment category',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'mainEquipmentCategory' } }],
        weak: true
      },
       {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: Rule => Rule.required()
      },
      {
      name: 'myPortableTextField',
      title: 'My Portable Text Field',
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
          { type: 'image' },

        ]
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
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'A description of the image that will be read by screen readers and used by search engines.'
              }
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
    ]
  }
