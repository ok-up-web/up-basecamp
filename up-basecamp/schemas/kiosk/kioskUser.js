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
        { type: 'checklistBlock' },
        { type: 'locationBlock' },
        { type: 'spotBlock' },
        { type: 'articleBlock' },
      ],
    },
    {
      name: 'articles',
      title: 'Add articles',
      type: 'object',
      fields: [
        {
          name: 'sv',
          title: 'Swedish',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'article' }],
            },
          ],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'article' }],
            },
          ],
        },
      ],
    },
    {
      name: 'pageSettings',
      title: 'Page Settings',
      type: 'object',
      fields: [
        {
          name: 'block1',
          title: 'Block 1 Settings',
          type: 'object',
          fields: [
            {
              title: 'Block 1 Header Color',
              name: 'block1HeaderColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            },
            {
              title: 'Block 1 Text Color',
              name: 'block1TextColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            },
            {
              title: 'Block 1 Background Color',
              name: 'block1BackgroundColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            }
          ],
          options: {
            collapsible: true,
            collapsed: false,
          }
        },
        {
          name: 'block2',
          title: 'Block 2 Settings',
          type: 'object',
          fields: [
            {
              title: 'Block 2 Header Color',
              name: 'block2HeaderColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            },
            {
              title: 'Block 2 Text Color',
              name: 'block2TextColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            },
            {
              title: 'Block 2 Background Color',
              name: 'block2BackgroundColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            }
          ],
          options: {
            collapsible: true,
            collapsed: false,
          }
        },
        {
          name: 'block3',
          title: 'Block 3 Settings',
          type: 'object',
          fields: [
            {
              title: 'Block 3 Header Color',
              name: 'block3HeaderColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            },
            {
              title: 'Block 3 Text Color',
              name: 'block3TextColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            },
            {
              title: 'Block 3 Background Color',
              name: 'block3BackgroundColor',
              type: 'color',
              options: {
                disableAlpha: true
              }
            }
          ],
          options: {
            collapsible: true,
            collapsed: false,
          }
        }
        // Du kan lägga till fler block eller inställningar här om du vill
      ],
      options: {
        collapsible: true,
        collapsed: false,
      }
    }

  ],
  preview: {
    select: {
      title: 'company.company_name'
    }
  }
  }
