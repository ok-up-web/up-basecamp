export default {
  name: 'webNavBar',
  type: 'document',
  title: 'NavBar',
   __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'leftLinks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webNavBarMenuItem'}]}],
      title: 'Menu items left'
    },
    {
      name: 'rightLinks',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webNavBarMenuItem'}]}],
      title: 'Menu items right'
    }
  ]
};
