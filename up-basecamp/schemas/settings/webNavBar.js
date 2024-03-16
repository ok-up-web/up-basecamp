export default {
  name: 'webNavBar',
  type: 'document',
  title: 'Huvudmeny',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel'
    },
    {
      name: 'leftLinks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webNavBarMenuItem'}]}],
      title: 'Länkar till Vänster'
    },
    {
      name: 'rightLinks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webNavBarMenuItem'}]}],
      title: 'Länkar till Höger'
    }
  ]
};
