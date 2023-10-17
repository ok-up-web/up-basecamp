export default {
  name: 'locationBlock',
  type: 'object',
  title: 'Location block',
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
        }
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
        }
      ]
    },
    {
      name: 'locations',
      type: 'array',
      title: 'Add locations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'location' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.sv'
    }
  }
  }
