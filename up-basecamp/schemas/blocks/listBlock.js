export default {
  name: 'listBlock',
  type: 'object',
  title: 'List Block',
  fields: [
    {
      name: 'items',
      title: 'List Items',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish Items',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List items in Swedish.',
        },
        {
          name: 'en',
          title: 'English Items',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List items in English.',
        }
      ],
      description: 'List of items in different languages.'
    }
  ],
  preview: {
    select: {
      itemsSv: 'items.sv',
      itemsEn: 'items.en',
    },
    prepare(selection) {
      const { itemsSv, itemsEn } = selection;
      const titleSv = itemsSv && itemsSv.length > 0 ? itemsSv[0] : 'No Swedish items';
      const titleEn = itemsEn && itemsEn.length > 0 ? itemsEn[0] : 'No English items';
      const subtitle = `SV: ${itemsSv.length} item${itemsSv.length !== 1 ? 's' : ''}, EN: ${itemsEn.length} item${itemsEn.length !== 1 ? 's' : ''}`;

      return {
        title: `SV: ${titleSv}, EN: ${titleEn}`,
        subtitle,
      };
    },
  },
};
