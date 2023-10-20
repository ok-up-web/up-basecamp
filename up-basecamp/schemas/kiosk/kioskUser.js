import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'kioskUser',
  type: 'document',
  title: 'Kiosk user',
  fields: [
    {
      name: 'company',
      type: 'reference',
      title: 'Company',
      to: [{ type: 'profile' }],
    },
    {
      name: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required().error('För att spara dokumentet krävs det att du skapar en slug'),
      type: 'slug',
      options: {
        source: () => `kiosk-${uuidv4()}`, // Använd UUID för att generera en unik slug
        maxLength: 96,
      },
    },
    {
      name: 'header',
      title: 'Header',
      type: 'object',
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
            },
            {
              name: 'en',
              title: 'English',
              type: 'string',
            },
          ],
        },
        {
          name: 'leadText',
          title: 'Text',
          type: 'object',
          fields: [
            {
              name: 'sv',
              title: 'Swedish',
              type: 'text',
            },
            {
              name: 'en',
              title: 'English',
              type: 'text',
            },
          ],
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'object',
              title: 'Alternative text',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish',
                  type: 'string',
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'headerImage',
          title: 'Header Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'object',
              title: 'Alternative text',
              fields: [
                {
                  name: 'sv',
                  title: 'Swedish',
                  type: 'string',
                },
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'profileBlock' },
        { type: 'articleBlock' },
        { type: 'checklistBlock' },
        { type: 'locationBlock' },
        { type: 'spotBlock' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'company.company_name'
    }
  }
  }
