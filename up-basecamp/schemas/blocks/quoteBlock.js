export default {
  name: 'quoteBlock',
  type: 'object',
  title: 'Blockquote',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'Enter the quote text here.',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person who said the quote.',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Source of the quote (e.g., book, speech, article).',
    },
  ],
  preview: {
    select: {
      quote: 'quote',
      author: 'author',
    },
    prepare(selection) {
      const { quote, name } = selection;
      return {
        title: quote,
        subtitle: name ? `— ${name}` : 'No name specified',
      };
    },
  },
};
