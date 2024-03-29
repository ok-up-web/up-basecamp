export default {
  name: 'webFrontpage',
  type: 'document',
  title: 'Web - Frontpage',
  fields: [
    {
  name: 'language',
  title: 'Language',
  type: 'reference',
  to: [{ type: 'language' }],
  description: 'Select the language this page is associated with.',
},
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'leadText',
      title: 'Lead Text',
      type: 'text',
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string', // Simplified to a single string
        },
      ],
    },
    {
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        { type: 'profileBlock' },
        { type: 'locationBlock' },
        { type: 'spotBlock' },
        { type: 'articleBlock' },
      ],
    },
    {
      name: 'selectedPackingLists',
      title: 'Selected Packing Lists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'checklist'}]
        }
      ],
    },
    {
      name: 'selectedMunicipalities',
      title: 'Selected Municipalities',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'municipality'}]
        }
      ],
    },
    {
      name: 'searchPhrase',
      title: 'Selected search phrases',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'searchPhrase' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      languageAbbreviation: 'language.abbreviation',
     },
    prepare(selection) {
      const { title, languageAbbreviation, media } = selection;
      // Handles potentially undefined values to ensure robust preview text.
      return {
        title: `Frontpage - ${languageAbbreviation ? languageAbbreviation : 'No Language'}`,
        media, // If media is undefined, the preview won't show an image, which is fine.
      };
    },
  },
}
