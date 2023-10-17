export default {
  name: 'activityBlock',
  type: 'object',
  title: 'Activity block',
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
      name: 'companies',
      type: 'array',
      title: 'Add company',
      of: [
        {
          type: 'reference',
          to: [{ type: 'company' }],
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
