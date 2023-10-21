export default {
  name: 'tableBlock',
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
