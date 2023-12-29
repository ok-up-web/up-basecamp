export default {
  name: 'carouselBlock',
  type: 'object',
  title: 'Carousel Block',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Slide',
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
              name: 'title',
              title: 'Title',
              type: 'object',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish',
                  type: 'string'
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string'
                }
              ]
            },
            {
              name: 'description',
              title: 'Description',
              type: 'object',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish',
                  type: 'text'
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'text'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title.sv',
              media: 'image',
            },
            prepare({ title, media }) {
              return {
                title,
                subtitle: 'Carousel slide',
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
      title: 'slides.0.title.sv',
      media: 'slides.0.image',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: `Carousel: ${title}`,
        media,
      };
    },
  },
};
