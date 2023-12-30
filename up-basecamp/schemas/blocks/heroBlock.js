export default {
  name: 'heroBlock',
  type: 'object',
  title: 'Hero Section',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the hero section.',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A subtitle or additional text displayed under the title.',
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'The text displayed on the CTA button.',
        },
        {
          name: 'linkType',
          title: 'Link Type',
          type: 'string',
          options: {
            list: [
              { title: 'External URL', value: 'url' },
              { title: 'Internal Page', value: 'page' }
            ],
            layout: 'radio',
          }
        },
        {
          name: 'buttonUrl',
          title: 'Button URL or Mailto',
          type: 'string',
          description: 'The URL the CTA button will direct to, or a mailto: link.',
          hidden: ({ parent }) => parent?.linkType !== 'url',
        },
        {
          name: 'pageLink',
          title: 'Page Link',
          type: 'reference',
          to: [{ type: 'page' }],
          description: 'Select an internal page for the CTA button to link to.',
          hidden: ({ parent }) => parent?.linkType !== 'page',
        },
      ],
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'A short description of the image for accessibility (SEO and screen readers).',
          options: {
            isHighlighted: true
          }
        }
      ],
      description: 'The main image for the hero section.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || '',
        subtitle: subtitle || '',
        media,
      };
    },
  },
};
