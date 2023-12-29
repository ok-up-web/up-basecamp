export default {
  name: 'heroBlock',
  type: 'object',
  title: 'Hero Section',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string',
          description: 'The main title for the hero section in Swedish.',
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'The main title for the hero section in English.',
        }
      ],
      description: 'The main title for the hero section.',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'string',
          description: 'A subtitle or additional text displayed under the title in Swedish.',
        },
        {
          name: 'en',
          title: 'English',
          type: 'string',
          description: 'A subtitle or additional text displayed under the title in English.',
        }
      ],
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
          type: 'object',
          fields: [
            {
              name: 'sv',
              title: 'Swedish',
              type: 'string',
              description: 'The text displayed on the CTA button in Swedish.',
            },
            {
              name: 'en',
              title: 'English',
              type: 'string',
              description: 'The text displayed on the CTA button in English.',
            }
          ],
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
          type: 'object',
          fields: [
            {
              name: 'sv',
              title: 'Swedish',
              type: 'string',
              description: 'The URL the CTA button will direct to, or a mailto: link in Swedish.',
            },
            {
              name: 'en',
              title: 'English',
              type: 'string',
              description: 'The URL the CTA button will direct to, or a mailto: link in English.',
            }
          ],
          hidden: ({ parent }) => parent?.linkType !== 'url',
        },
        {
          name: 'pageLink',
          title: 'Page Link',
          type: 'object',
          fields: [
            {
              name: 'sv',
              title: 'Page Link Swedish',
              type: 'reference',
              to: [{ type: 'page' }],
              description: 'Select an internal page for the CTA button to link to in Swedish.',
            },
            {
              name: 'en',
              title: 'Page Link English',
              type: 'reference',
              to: [{ type: 'page' }],
              description: 'Select an internal page for the CTA button to link to in English.',
            }
          ],
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
          type: 'object',
          fields: [
            {
              name: 'sv',
              type: 'string',
              title: 'Alternative text (Swedish)',
              description: 'A short description of the image for accessibility in Swedish (SEO and screen readers).',
            },
            {
              name: 'en',
              type: 'string',
              title: 'Alternative text (English)',
              description: 'A short description of the image for accessibility in English (SEO and screen readers).',
            }
          ],
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
      title: 'title.sv',
      subtitle: 'subtitle.sv',
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
