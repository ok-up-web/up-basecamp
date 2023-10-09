export default{
    name: 'location',
    title: 'Location',
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
        name: 'lat',
        type: 'number',
        title: 'Latitude',
      },
      {
        name: 'long',
        type: 'number',
        title: 'Longitude',
      },
      {
        name: 'isResidence',
        type: 'boolean',
        title: 'Is residence',
      },
      {
        name: 'selectedLocation',
        type: 'boolean',
        title: 'Selected location',
      },
      {
        name: 'municipality',
        type: 'reference',
        to: [{type: 'municipality'}],
        title: 'Municipality',
        weak: true
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',

      },



          {
            name: 'lake',
            type: 'string',
            title: 'Lakes',
          },
          {
            name: 'road',
            type: 'string',
            title: 'Roads',
          },
          {
            name: 'naturereserve',
            type: 'string',
            title: 'Naturereserve',
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

      }
    ],
  }
