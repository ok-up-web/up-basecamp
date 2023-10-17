export default {
  name: 'companyBlock',
  type: 'object',
  title: 'Company block',
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
        },

      ]
    },
    {
      name: 'companies',
      type: 'array',
      title: 'Add company',
      of: [
        {
          type: 'reference',
          to: [{ type: 'profile' }],
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
