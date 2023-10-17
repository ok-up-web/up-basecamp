export default {
  name: 'spotBlock',
  type: 'object',
  title: 'Spot block',
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
      name: 'spots',
      type: 'array',
      title: 'Add spots',
      of: [
        {
          type: 'reference',
          to: [{ type: 'spot' }],
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
