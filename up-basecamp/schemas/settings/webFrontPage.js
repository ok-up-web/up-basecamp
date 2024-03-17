export default {
  name: 'webFrontpage',
  type: 'document',
  title: 'Web Frontpage',
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
        { type: 'checklistBlock' },
        { type: 'locationBlock' },
        { type: 'spotBlock' },
        { type: 'articleBlock' },
      ],
    },
    {
      name: 'selectedArticles',
      title: 'Selected Articles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
        },
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
  ],preview: {
  select: {
    title: 'title', // Assuming you have a title field in your schema
    languageAbbreviation: 'language.abbreviation',
    media: 'mainImage', // Assuming you want to keep the main image in the preview
  },
  prepare(selection) {
    const { title, languageAbbreviation, media } = selection;
    return {
      title: `${title} - ${languageAbbreviation}`,
      media,
    };
  },
}
