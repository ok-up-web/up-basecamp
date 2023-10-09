export default {
  name: 'companies',
  title: 'Companies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('Location is required before publishing'),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
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
      name: 'is_verified',
      title: 'Verified',
      type: 'boolean',
      description: 'The checkbox is marked if the profile is verified by Upptäkke.'
    },
    {
      name: 'is_plus_customer',
      title: 'Paying client',
      type: 'boolean',
      description: 'The checkbox is selected if the profile is a plus customer.'
    },
    {
      name: 'highlightProfile',
      type: 'boolean',
      title: 'Highlight profile',
      description:
        'The checkbox is opt if the profile is to be marked as a highlighted profile in search, articles and frontpage'
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
      name: 'categories',
      title: 'Categories',
      type: 'object',
      fields: [
        {
     name: 'equipment',
     title: 'Equipment for rentals',
     type: 'object',
     hidden: ({ parent }) => !parent?.rental,  // Dölj om 'rental' är falsk
     fields: [
       {
         name: 'mainEquipmentCategories',
         title: 'Main categories',
         type: 'array',
         of: [
           {
             type: 'reference',
             to: [{ type: 'mainEquipmentCategory' }]
           }
         ],
         description: 'Add equipment main categories',
       },
       {
         name: 'subEquipmentCategories',
         title: 'Sub categories',
         type: 'array',
         of: [
           {
             type: 'reference',
             to: [{ type: 'subEquipmentCategory' }]
           }
         ],
         description: 'Add equipment sub categories',
       },
     ]
   },
   {
     name: 'accommodationDetails',
     title: 'Accommodation Details',
     type: 'array',
     hidden: ({ parent }) => !parent?.accommodation,  // Dölj om 'accommodation' är falsk
     of: [
       {
         type: 'reference',
         to: [{ type: 'accommodation' }]
       }
     ],
   },
   {
     name: 'activityDetails',
     title: 'Activity Details',
     type: 'array',
     hidden: ({ parent }) => !parent?.activity,  // Dölj om 'activity' är falsk
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
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {name: 'street', title: 'Street Address', type: 'string'},
        {name: 'postalCode', title: 'Postal Code', type: 'string'},
        {name: 'city', title: 'City', type: 'string'},
      ]
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'email', title: 'Email Address', type: 'string'},
        {name: 'phone', title: 'Phone Number', type: 'string'},
        {name: 'website', title: 'Website', type: 'url'},
      ]
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'facebook', title: 'Facebook', type: 'url'},
        {name: 'instagram', title: 'Instagram', type: 'string', description: 'username'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
      ]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'City/town',
          type: 'reference',
          to: [{type: 'location'}],
          description: 'Add the city/town where the business is located',
          validation: Rule => Rule.required().error('Location is required before publishing'),
        },
        {name: 'geopoint', title: 'Geopoint', type: 'geopoint'}
      ]
    },
    {
    name: 'equipment',
    title: 'Equipment for rentals',
    type: 'object',
    fields: [
      {
        name: 'mainEquipmentCategories',
        title: 'Main categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'mainEquipmentCategory'}],
          }
        ],
        description: 'Add equipment main categories',
      },
      {
        name: 'subEquipmentCategories',
        title: 'Sub categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'subEquipmentCategory'}],
          }
        ],
        description: 'Add equipment sub categories',
      },
    ]
  },

    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {name: 'shortDescription', title: 'Short Description', type: 'text'},
        {
          name: 'longDescription',
          title: 'Long Description',
          type: 'array',
          of: [{type: 'block'}],
        },
        {name: 'directions', title: 'Directions',
        type: 'text',
        description: 'Describe how the customer gets to the location by car or train, etc.',
        },
        {name: 'nearby',
        title: 'Nearby Attractions',
        type: 'text',
        title: 'Tips on activities and experiences nearby',
        },
      ]
    },
    {
      name: 'profileSettings',
      title: 'Profile settings',
      type: 'object',
      fields: [
        {
          name: 'linkType',
          title: 'Choose link type',
          type: 'string',
          options: {
            list: [
              { title: 'Phone', value: 'phone' },
              { title: 'Homepage', value: 'homepage' },
              { title: 'Email', value: 'email' },
              { title: 'Booking System', value: 'bookingsystem' },
              { title: 'Booking Request', value: 'bookingrequest' },
            ],
            layout: 'radio', // or 'dropdown'
          }
        },
        {
          name: 'buttonUrl',
          title: 'URL, Tel, or Mailto:',
          type: 'string',
          description: 'Enter the web address, email address (add mailto:name@domain.com), or phone number (add tel:number)',
          hidden: ({ parent }) => !parent?.linkType,
          validation: Rule => Rule.custom(value => {
            if (!value) return true; // allows null or undefined
            if (value.startsWith('mailto:')) {
              const email = value.substring(7);
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(email) ? true : 'Please enter a valid email address after "mailto:"';
            } else if (value.startsWith('tel:')) {
              const tel = value.substring(4);
              const telRegex = /^[+\d]?(?:[\d-.\s()]*)$/; // Simple regex to validate phone numbers
              return telRegex.test(tel) ? true : 'Please enter a valid phone number after "tel:"';
            } else {
              const urlRegex = /^(http|https):\/\/[^ "]+$/;
              return urlRegex.test(value) ? true : 'Please enter a valid URL.';
            }
          })
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
      ]
    },
    {
       name: 'image',
       title: 'Image',
       type: 'object',
       fields: [
         {
           name: 'logo',
           title: 'Company Logo',
           type: 'image',
           options: {
             hotspot: true
           },
           fields: [
             {
               name: 'alt',
               title: 'Alt Text',
               type: 'string',
               description: 'A description of the image for SEO and screen readers.',
               validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO.')
             }
           ]
         },
         {
           name: 'header_image',
           title: 'Header Image',
           description: 'The image will be visible in e.g. search results etc.',
           type: 'image',
           options: {
             hotspot: true
           },
           fields: [
             {
               name: 'alt',
               title: 'Alt Text',
               type: 'string',
               description: 'A description of the image for SEO and screen readers.',
               validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO.')
             }
           ]
         },
         {
           name: 'meta_image',
           title: 'Meta Image',
           description: 'Image for Google, Facebook, etc.',
           type: 'image',
           options: {
             hotspot: true
           },
           fields: [
             {
               name: 'alt',
               title: 'Alt Text',
               type: 'string',
               description: 'A description of the image for SEO and screen readers.',
               validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO.')
             }
           ]
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
                   name: 'alt',
                   title: 'Alt Text',
                   type: 'string',
                   description: 'A description of the image for SEO and screen readers.',
                   validation: Rule => Rule.required().error('Alt text is required for accessibility and SEO.')
                 }
               ]
             }
           ]
         }
       ]
     },
  ]
}
