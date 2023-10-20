export default {
  name: 'checklistBlock',
  type: 'object',
  title: 'Checklist block',
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
      name: 'checklists',
      title: 'Add checklist',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'checklist' }],
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
              to: [{ type: 'checklist' }],
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
