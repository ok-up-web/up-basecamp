export default {
  name: 'listBlock',
  type: 'object',
  title: 'List Block',
  fields: [
    {
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare(selection) {
      const { items } = selection;
      const title = items.length > 0 ? items[0] : 'No items';
      const subtitle = `${items.length} item${items.length !== 1 ? 's' : ''}`;

      return {
        title,
        subtitle,
      };
    },
  },
};
