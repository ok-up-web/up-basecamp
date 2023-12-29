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
        type: 'object',
        fields: [
          {
            name: 'sv',
            title: 'Swedish Text',
            type: 'text',
          },
          {
            name: 'en',
            title: 'English Text',
            type: 'text',
          },
        ],
      },
    ],
    preview: {
      select: {
        media: 'image',
        textSv: 'text.sv',
        textEn: 'text.en',
        imagePosition: 'imagePosition',
      },
      prepare({ media, textSv, textEn, imagePosition }) {
        const title = `Image Position: ${imagePosition}`;
        const subtitle = `SV: ${textSv ? textSv.substring(0, 50) : 'No text'} / EN: ${textEn ? textEn.substring(0, 50) : 'No text'}`;
        return {
          title,
          subtitle,
          media,
        };
      },
    },
}
