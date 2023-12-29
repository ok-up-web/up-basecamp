export const textBlock = {
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    {
      name: 'portableText',
      title: 'Text',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      title: 'portableText',
    },
  }
};


export const blockContent = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                }),
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
};

export const imageBlock = {
  title: 'Image Block',
  name: 'imageBlock',
  type: 'object',
  fields: [
    {
      type: 'image',
      name: 'image',
      options: { hotspot: true },
    },
  ],
};
