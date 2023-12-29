export default {
  name: 'accordionBlock',
  type: 'object',
  title: 'Accordion Section',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string',
          description: 'This title will be displayed as an H2 above your accordion content in Swedish.'
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'This title will be displayed as an H2 above your accordion content in English.'
        },
      ]
    },
    {
      name: 'accordionItems',
      title: 'Accordion Items',
      type: 'array',
      of: [
        {
          name: 'accordionItem',
          type: 'object',
          title: 'Item',
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
                  description: 'This title will be displayed as the header for a part of your accordion content in Swedish.'
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                  description: 'This title will be displayed as the header for a part of your accordion content in English.'
                },
              ]
            },
            {
              name: 'content',
              title: 'Content',
              type: 'object',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish',
                  type: 'text',
                  description: 'This content will be displayed in Swedish when the user clicks on the accordion header.'
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'text',
                  description: 'This content will be displayed in English when the user clicks on the accordion header.'
                },
              ]
            }
          ],
          preview: {
            select: {
              title: 'title.sv',
              subtitle: 'content.sv'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'mainTitle.sv'
    }
  }
};
