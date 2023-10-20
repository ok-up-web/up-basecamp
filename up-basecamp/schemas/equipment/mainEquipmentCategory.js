export default {
  name: 'mainEquipmentCategory',
  title: 'Main category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
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
      name: 'name_en',
      title: 'Name (English)',
      type: 'string',
      validation: Rule => Rule.required()
    },

    {
      name: 'slug_en',
      type: 'slug (English)',
      options: {
        source: 'name_en',
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
      name: 'localeDescription',
      title: 'Description translations',
      type: 'localeText'
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
