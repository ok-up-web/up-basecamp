export const tableBlock = {
  name: 'tableBlock',
  type: 'object',
  title: 'Table',
  fields: [
    {
      name: 'tableTitle',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish Title',
          type: 'string'
        },
        {
          name: 'en',
          title: 'English Title',
          type: 'string'
        }
      ],
      title: 'Table Title'
    },
    {
      name: 'columnHeaders',
      type: 'array',
      title: 'Column Headers',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sv',
              title: 'Swedish Header',
              type: 'string'
            },
            {
              name: 'en',
              title: 'English Header',
              type: 'string'
            }
          ]
        }
      ],
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
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish Note',
          type: 'string'
        },
        {
          name: 'en',
          title: 'English Note',
          type: 'string'
        }
      ],
      title: 'Note'
    }
  ],
  preview: {
    select: {
      title: 'tableTitle.sv'
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
