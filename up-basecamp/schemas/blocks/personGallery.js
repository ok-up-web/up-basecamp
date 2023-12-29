export default {
  name: 'personGallery',
  type: 'object',
  title: 'Person Gallery',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the person gallery.',
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
      description: 'Additional subtext for the person gallery.',
    },
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Person',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
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
                },
                {
                  name: 'en',
                  title: 'English Title',
                  type: 'string',
                },
              ],
            },
            {
              name: 'email',
              title: 'Email Address',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'title.sv',
              media: 'image',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title,
                subtitle: `Title (SV): ${subtitle}`,
                media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subtext',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Person Gallery',
        subtitle: subtitle || 'No subtext provided',
      };
    },
  },
};
