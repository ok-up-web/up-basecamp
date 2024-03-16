export default {
  name: 'webFooterMenuItem',
  title: 'MenuItem',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'linkType',
      title: 'Link type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal page', value: 'internal'},
          {title: 'External url', value: 'external'},
        ],
      },
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'external',
    },
  ],
};
