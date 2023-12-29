export default {
  name: 'quoteBlock',
  type: 'object',
  title: 'Blockquote',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'text',
          description: 'Enter the quote text here in Swedish.',
        },
        {
          name: 'en',
          title: 'English',
          type: 'text',
          description: 'Enter the quote text here in English.',
        }
      ],
      description: 'Enter the quote text here.',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string',
          description: 'Name of the person who said the quote in Swedish.',
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Name of the person who said the quote in English.',
        }
      ],
      description: 'Name of the person who said the quote.',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string',
          description: 'Source of the quote in Swedish (e.g., book, speech, article).',
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'Source of the quote in English (e.g., book, speech, article).',
        }
      ],
      description: 'Source of the quote (e.g., book, speech, article).',
    },
  ],
  preview: {
    select: {
      quoteSv: 'quote.sv',
      quoteEn: 'quote.en',
      nameSv: 'name.sv',
      nameEn: 'name.en',
    },
    prepare(selection) {
      const { quoteSv, quoteEn, nameSv, nameEn } = selection;
      const title = `SV: ${quoteSv || 'No quote'} / EN: ${quoteEn || 'No quote'}`;
      const subtitle = `SV: ${nameSv || 'No name'} / EN: ${nameEn || 'No name'}`;

      return {
        title,
        subtitle,
      };
    },
  },
};
