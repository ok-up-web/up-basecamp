export const tableRowType = {
  name: 'tableRowType',
  type: 'object',
  title: 'Table Row',
  fields: [
    {
      name: 'field1',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish Field 1',
          type: 'string'
        },
        {
          name: 'en',
          title: 'English Field 1',
          type: 'string'
        }
      ],
      title: 'Field 1'
    },
    {
      name: 'field2',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish Field 2',
          type: 'string'
        },
        {
          name: 'en',
          title: 'English Field 2',
          type: 'string'
        }
      ],
      title: 'Field 2'
    }
  ],
  preview: {
    select: {
      title: 'field1.sv',
      subtitle: 'field2.sv'
    }
  }
};
