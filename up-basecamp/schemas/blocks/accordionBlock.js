export default {
  name: 'accordionBlock',
  type: 'object',
  title: 'Accordion Section',
  fields: [
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
      description: 'This title will be displayed as an H2 above your accordion content.'
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
              type: 'string',
              description: 'This title will be displayed as the header for a part of your accordion content.'
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              description: 'This content will be displayed when the user clicks on the accordion header.'
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'content'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'mainTitle'
    }
  }
};
