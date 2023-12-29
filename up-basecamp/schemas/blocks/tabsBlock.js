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
              type: 'object',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish Title',
                  type: 'string',
                  description: 'Title of the tab in Swedish.',
                },
                {
                  name: 'en',
                  title: 'English Title',
                  type: 'string',
                  description: 'Title of the tab in English.',
                },
              ],
              description: 'Title of the tab in different languages.',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'object',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish Content',
                  type: 'text',
                  description: 'Content of the tab in Swedish.',
                },
                {
                  name: 'en',
                  title: 'English Content',
                  type: 'text',
                  description: 'Content of the tab in English.',
                },
              ],
              description: 'Content of the tab in different languages.',
            },
          ],
          preview: {
            select: {
              title: 'title.sv',
              subtitle: 'eventKey.current',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'tabs.0.title.sv',
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
