export default {
  name: 'webNavBarMenuItem',
  type: 'document',
  title: 'MenuItem',
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
          {title: 'Internal page', value: 'internal'},
          {title: 'External url', value: 'external'},
        ],
        layout: 'radio'
      }
    },
    {
      name: 'page',
      type: 'reference',
      to: [{type: 'page'}],
      title: 'Page',
      hidden: ({parent}) => parent?.type !== 'internal'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      hidden: ({parent}) => parent?.type !== 'external'
    }
  ]
};
