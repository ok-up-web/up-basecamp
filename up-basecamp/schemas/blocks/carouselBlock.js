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
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            }
          ],
          preview: {
            select: {
              title: 'title',
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
      title: 'slide.title',
      media: 'slide.image',
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
