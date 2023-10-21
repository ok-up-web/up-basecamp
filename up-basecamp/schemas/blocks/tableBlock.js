export default {
  name: 'tableType',
  type: 'object',
  title: 'Table',
  fields: [
    {
      name: 'tableTitle',
      type: 'string',
      title: 'Table Title'
    },
    {
      name: 'columnHeaders',
      type: 'array',
      title: 'Column Headers',
      of: [{ type: 'string' }],
      validation: Rule => Rule.min(2).max(2) // Validate that there are exactly two headers for the two columns.
    },
    {
      name: 'rows',
      type: 'array',
      title: 'Table Rows',
      of: [
        {
          name: 'tableRow',
          type: 'tableRowType'
        }
      ]
    },
    {
      name: 'note',
      type: 'string',
      title: 'Note'
    }
  ],
  preview: {
    select: {
      title: 'tableTitle'
    }
  }
};

export const tableRowType = {
  name: 'tableRowType',
  type: 'object',
  title: 'Table Row',
  fields: [
    {
      name: 'field1',
      type: 'string',
      title: 'Field 1'
    },
    {
      name: 'field2',
      type: 'string',
      title: 'Field 2'
    }
  ],
  preview: {
    select: {
      title: 'field1',
      subtitle: 'field2'
    }
  }
};
