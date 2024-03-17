export default {
  name: 'webFooter',
  title: 'Footer',
  type: 'document',
  fields: [
    {
  name: 'language',
  title: 'Language',
  type: 'reference',
  to: [{ type: 'language' }],
  description: 'Select the language this page is associated with.',
},
    {
      name: 'column1Title',
      title: 'Column 1 - Title',
      type: 'string',
    },
    {
      name: 'column1Links',
      title: 'Column 1 - Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webFooterMenuItem'}]}],
    },
    {
      name: 'column2Title',
      title: 'Column 2 - Title',
      type: 'string',
    },
    {
      name: 'column2Links',
      title: 'Column 2 - Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webFooterMenuItem'}]}],
    },
    {
      name: 'column3Title',
      title: 'Column 3 - Title',
      type: 'string',
    },
    {
      name: 'column3Links',
      title: 'Column 3 - Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'webFooterMenuItem'}]}],
    },
    {
      name: 'termsLink',
      title: 'Link to Terms and Conditions',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'Select page for Terms and Conditions',
    },
    {
      name: 'privacyPolicyLink',
      title: 'Link to Privacy Policy',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'Select page for Privacy Policy',
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
        title: `Footer - ${languageAbbreviation ? languageAbbreviation : 'No Language'}`,
        media, // If media is undefined, the preview won't show an image, which is fine.
      };
    },
  },
  }
