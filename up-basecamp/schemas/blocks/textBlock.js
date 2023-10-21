export default {
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    {
      name: 'portableText',
      title: 'Text',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      title: 'portableText',
    },
  }
};
