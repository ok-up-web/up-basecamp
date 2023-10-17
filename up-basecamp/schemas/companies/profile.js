

  export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
      {
        name: 'company_name',
        title: 'Företagsnamn',
        type: 'string'
      },
      {
        name: 'slug',
        type: 'slug',
        options: {
          source: 'company_name',
          maxLength: 200,
          slugify: (input) =>
            input
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/ä/g, 'a')
              .replace(/å/g, 'a')
              .replace(/ö/g, 'o')
              .slice(0, 200)
        },
        validation: (Rule) => Rule.required()
      },
      {
        name: 'businessChain',
        type: 'reference',
        to: [{type: 'businessChain'}],
        title: 'Business chain'
      },
      {
        name: 'operations',
        title: 'Type of Operations',
        type: 'object',
        options: {
          layout: 'checkbox',
        },
        fields: [
          {name: 'rental', title: 'Rental', type: 'boolean'},
          {name: 'accommodation', title: 'Accommodation', type: 'boolean'},
          {name: 'activity', title: 'Activity', type: 'boolean'},
        ]
      },
      {
        name: 'is_verified',
        title: 'Verified',
        type: 'boolean',
        description: 'The checkbox is marked if the profile is verified by Upptäkke.'
      },
      {
        name: 'contact',
        title: 'Contact',
        type: 'object',
        fields: [
          {
            name: 'address',
            title: 'Adress',
            type: 'string'
          },
          {
            name: 'post_number',
            title: 'Postnummer',
            type: 'string'
          },
          {
            name: 'city',
            title: 'Stad',
            type: 'string'
          },
          {
            name: 'email',
            title: 'E-post',
            type: 'email'
          },
          {
            name: 'phone',
            title: 'Telefon',
            type: 'string'
          },
          {
            name: 'homepage',
            title: 'Hemsida',
            type: 'url',
            description: 'https://www.domain.se'
          }
        ]
      },
      {
        name: 'categorize',
        title: 'Categorize',
        type: 'object',
        fields: [
          {
            name: 'tags',
            type: 'string',
            title: 'Tags',
            description: 'Separate tags with commas. Describe the lessor, location and equipment using synonyms and descriptive words. The following is used to improve site search.'
          },
          {
            name: 'localeTags',
            title: 'Tag translations',
            type: 'localeString'
          },
          {
            name: 'mainEquipmentCategory',
            title: 'Equipment - Main category',
            description: 'Mark the main categories of equipment that the company rents out.',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: {
                  type: 'mainEquipmentCategory'
                }
              }
            ]
          },
          {
            name: 'subEquipmentCategory',
            title: 'Equipment - Sub category',
            description: 'Mark which equipment subcategories the company rents out.',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: {
                  type: 'subEquipmentCategory'
                }
              }
            ]
          },
          {
            name: 'accommodation',
            title: 'Accommodation',
            type: 'object',
            fields: [
              {
                name: 'accommodationDetails',
                title: 'Accommodation Details',
                type: 'array',
                of: [
                  {
                    type: 'reference',
                    to: [{ type: 'accommodation' }]
                  }
                ],
              },
            ]
          },
          {
            name: 'activity',
            title: 'Activity',
            type: 'object',
            fields: [
              {
                name: 'activityDetails',
                title: 'Activity Details',
                type: 'array',
                of: [
                  {
                    type: 'reference',
                    to: [{ type: 'activity' }]
                  }
                ],
              },
            ]
          },
          {
            name: 'location',
            title: 'Location',
            description: 'Select the location where the company is located, then the profile is linked to municipality, county and province.',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: {
                  type: 'location'
                }
              }
            ],
            validation: (Rule) => Rule.required()
          },
          {
            name: 'facilityAttribute',
            title: 'Facility attributes',
            description: '',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: {
                  type: 'facilityAttribute'
                }
              }
            ]
          },
          {
            name: 'landscapeAttribute',
            title: 'Landscape attributes',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: {
                  type: 'landscapeAttribute'
                }
              }
            ]
          }
        ]
      },
      {
        title: 'Location',
        name: 'location',
        type: 'geopoint'
      },
      {
        name: 'geopoint',
        title: 'Geopoint',
        type: 'object',
        fields: [
          {
            name: 'latitude',
            title: 'Latitud',
            type: 'number',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'longitude',
            title: 'Longitud',
            type: 'number',
            validation: (Rule) => Rule.required()
          }
        ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'object',
        fields: [
          {
            name: 'short_description',
            title: 'Short description',
            description: 'Write a brief description about the company, the equipment, and things connected to the place they are located.',
            type: 'text'
          },
          {
            name: 'localeDescription',
            title: 'Description translations',
            type: 'localeText'
          },
          {
            name: 'long_description',
            title: 'Long description',
            description: 'Write a longer description about the company, the equipment, and things connected to the place they are located.',
            type: 'array',
            of: [
              { type: 'block' }
            ]
          },
          {
            name: 'route_description',
            title: 'Route description',
            description: 'Describe how the customer gets to the location by car or train, etc.',
            type: 'string'
          },
          {
            name: 'localeRouteDescription',
            title: 'Route description translations',
            type: 'localeString'
          },
          {
            name: 'tips_description',
            title: 'Tips on activities and experiences nearby',
            type: 'string'
          },
          {
            name: 'localeTipsDescription',
            title: 'Tips description translations',
            type: 'localeString'
          },
        ]
      },
      {
        name: 'socialMedia',
        title: 'Social Media',
        type: 'object',
        fields: [
          {
            name: 'facebook',
            title: 'Facebook',
            type: 'url'
          },
          {
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
            description: 'username'
          },
          {
            name: 'youtube',
            title: 'Youtube',
            type: 'url'
          }
        ]
      },
      {
        name: 'profileSettings',
        title: 'Profile settings',
        type: 'object',
        fields: [
          {
            name: 'buttonType',
            title: 'Button type',
            description: 'Choose which type of button to display on the company\'s profile',
            type: 'string',
            options: {
              list: [
                {title: 'Phone', value: 'phone'},
                {title: 'Homepage', value: 'homepage'},
                {title: 'Email', value: 'email'},
                {title: 'Bookingsystem', value: 'bookingsystem'},
                {title: 'Bookingrequest form', value: 'bookingrequest'}
              ]
            }
          },
          {
            name: 'buttonUrl',
            title: 'Button url',
            description: 'Add the website address, email or phone number that the button should be linked to.',
            type: 'string',
            validation: Rule => Rule.regex(
              /^(https?:\/\/|tel:|mailto:).+$/,
              {
                name: 'url',
                invert: false,
                message: 'The URL must start with http://, https://, tel:, or mailto:'
              },
            )
          },
          {
            name: 'profileTemplate',
            title: 'Profile Template',
            type: 'string',
            options: {
              list: [
                {title: 'Basic', value: 'basic'},
                {title: 'Plus', value: 'plus'},
                {title: 'Partner', value: 'partner'}
              ]
            }
          },
          {
            name: 'responseTime',
            title: 'Response Time',
            description: 'Describe how long it usually takes for the customer to respond, e.g. 1-2 business days, weekdays only, within 1-3 hours',
            type: 'string'
          },
          {
            name: 'localeResponseTime',
            title: 'Response Time translations',
            type: 'localeString'
          },
        ]
      },
      {
        name: 'featured_articles',
        title: 'Link to featured articles',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'article'
            }
          }
        ]
      },
      {
        name: 'featured_checklists',
        title: 'Link to featured checklists',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {
              type: 'checklist'
            }
          }
        ]
      },
      {
        name: 'image',
        title: 'Image',
        type: 'object',
        fields: [
          {
            name: 'logo_image',
            title: 'Company logo',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'header_image',
            title: 'Headerbild',
            description: 'The image will be visible in e.g. search results etc.',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'meta_image',
            title: 'Meta image',
            description: 'Image for Google, Facebook, etc.',
            type: 'image',
            options: {
              hotspot: true
            }
          },

          {
            name: 'gallery',
            title: 'Gallery',
            description: 'Image gallery for profile page.',
            type: 'array',
            of: [
              {
                type: 'image',
                options: {
                  hotspot: true
                },
                fields: [
                  {
                    name: 'caption',
                    title: 'Caption',
                    type: 'string'
                  },
                  {
                    name: 'localeCaption',
                    title: 'Caption translations',
                    type: 'localeString'
                  },

                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description:
                      'A description of the image that will be read by screen readers and used by search engines.'
                  },
                  {
                    name: 'localeAlt',
                    title: 'Alt translations',
                    type: 'localeString'
                  },
                ]
              }
            ]
          }
        ]
      },
      {
  name: 'opening_hours',
  title: 'Opening hours',
  type: 'object',
  fields: [
    {
      name: 'seasonalAvailability',
      title: 'Seasonal availability',
      type: 'string',
      options: {
        list: [
          {title: 'Year-round', value: '1'},
          {title: 'Summer', value: '2'},
          {title: 'Winter', value: '3'},
          {title: 'Weekends only', value: '4'},
          {title: 'Upon request', value: '5'}
        ]
      }
    },
    {
      name: 'monday',
      title: 'Monday',
      type: 'string',
      description: 'Opening hours for monday.'
    },
    {
      name: 'tuesday',
      title: 'Tuesday',
      type: 'string',
      description: 'Opening hours for tuesday.'
    },
    {
      name: 'wednesday',
      title: 'Wednesday',
      type: 'string',
      description: 'Opening hours for wednesday.'
    },
    {
      name: 'thursday',
      title: 'Thursday',
      type: 'string',
      description: 'Opening hours for Thursday.'
    },
    {
      name: 'friday',
      title: 'Friday',
      type: 'string',
      description: 'Opening hours for friday.'
    },
    {
      name: 'saturday',
      title: 'Saturday',
      type: 'string',
      description: 'Opening hours for saturday.'
    },
    {
      name: 'sunday',
      title: 'Sunday',
      type: 'string',
      description: 'Opening hours for sunday.'
    }
  ]
},


    ]
  }
