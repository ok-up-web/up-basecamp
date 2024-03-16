export default {
  name: 'webNavBar',
  type: 'document',
  title: 'Huvudmeny',
  fields: [
    initialValue: {
      fixedTitle: 'Webbplatsens huvudmeny',
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
