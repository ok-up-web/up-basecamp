export default {
  name: 'tabsBlock',
  type: 'object',
  title: 'Tabs Block',
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Tab',
          fields: [
            {
              name: 'eventKey',
              title: 'Event Key',
              type: 'slug',
              description: 'A unique key for this tab, used to switch between tabs.',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title of the tab.',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              description: 'Content of the tab.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'eventKey.current',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'tabs.0.title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `Tabs: ${title}`,
        subtitle: 'Tab block',
      };
    },
  },
};
