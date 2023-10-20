export default {
  name: 'articleBlock',
  type: 'object',
  title: 'Article block',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: Rule => Rule.required()
        },

      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string'
        },
        {
          name: 'en',
          title: 'English',
          type: 'string'
        },

      ]
    },
    {
      name: 'articles',
      title: 'Add articles',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'article' }],
            },
          ],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'article' }],
            },
          ],
        },
      ],
    }

  ],
  preview: {
    select: {
      title: 'title.sv'
    }
  }
  }
