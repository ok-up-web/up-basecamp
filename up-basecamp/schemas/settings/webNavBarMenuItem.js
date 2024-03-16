export default {
  name: 'webNavBarMenuItem',
  type: 'document',
  title: 'Menyobjekt',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel'
    },
    {
      name: 'type',
      type: 'string',
      title: 'Typ',
      options: {
        list: [
          {title: 'Intern Sida', value: 'page'},
          {title: 'Extern Länk', value: 'external'}
        ],
        layout: 'radio'
      }
    },
    {
      name: 'page',
      type: 'reference',
      to: [{type: 'page'}],
      title: 'Sida',
      hidden: ({parent}) => parent?.type !== 'page'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      hidden: ({parent}) => parent?.type !== 'external'
    }
  ]
};
