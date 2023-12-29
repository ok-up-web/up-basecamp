export default {
  name: 'language',
    type: 'document',
  title: 'Language',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Language Name',
      description: 'The full name of the language.'
    },
    {
      name: 'abbreviation',
      type: 'string',
      title: 'Abbreviation',
      description: 'The abbreviation or short form of the language name.'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'abbreviation'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle: `Abbreviation: ${subtitle}`
      };
    },
  }
};
