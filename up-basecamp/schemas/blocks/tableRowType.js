export default tableRowType = {
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
