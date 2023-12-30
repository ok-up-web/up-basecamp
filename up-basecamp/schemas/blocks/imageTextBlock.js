export default {
  name: 'imageTextBlock',
  type: 'object',
  title: 'Image and Text Block',
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
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      media: 'image',
      text: 'text',
      imagePosition: 'imagePosition',
    },
    prepare({ media, text, imagePosition }) {
      const title = `Image Position: ${imagePosition}`;
      const subtitle = text ? text.substring(0, 50) : 'No text';
      return {
        title,
        subtitle,
        media,
      };
    },
  },
}
