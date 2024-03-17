export default {
  name: 'webNavBar',
  type: 'document',
  title: 'NavBar',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [
    {
      name: 'message',
      title: 'Header message',
      options: {collapsible: true, collapsed: false}
    }
  ],
  fields: [
    {
      name: 'showMessage',
      type: 'boolean',
      title: 'Show header message',
      fieldset: 'message'
    },
    {
      name: 'messageText',
      type: 'string',
      title: 'Message text',
      fieldset: 'message',
      hidden: ({ parent }) => !parent.showMessage,
      validation: Rule => Rule.max(150).warning('The message should not be longer than 150 characters.')
    },
    {
      name: 'messageCTA',
      title: 'Call-to-Action',
      type: 'object',
      fieldset: 'message',
      hidden: ({ parent }) => !parent.showMessage,
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'CTA-text'
        },
        {
          name: 'linkType',
          title: 'Link type',
          type: 'string',
          options: {
            list: [
              {title: 'Internal page', value: 'internal'},
              {title: 'External URL', value: 'external'},
            ],
            layout: 'radio'
          }
        },
        {
          name: 'page',
          title: 'Internal page',
          type: 'reference',
          to: [{ type: 'page' }],
          hidden: ({ parent }) => parent?.linkType !== 'internal'
        },
        {
          name: 'url',
          title: 'External URL',
          type: 'url',
          hidden: ({ parent }) => parent?.linkType !== 'external' // Visa detta fält endast för externa URL:er
        }
      ]
    },
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
