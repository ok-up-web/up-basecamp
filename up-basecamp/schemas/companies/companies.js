export default {
  name: 'rentalCompanies',
  title: 'Rental Companies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
        {name: 'instagram', title: 'Instagram', type: 'string'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
      ]
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {name: 'geopoint', title: 'Geopoint', type: 'geopoint'},
        {name: 'directions', title: 'Directions', type: 'text'},
        {name: 'nearby', title: 'Nearby Attractions', type: 'text'},
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
      ]
    },
  ]
}
