export default {
  name: 'mapBlock',
  type: 'object',
  title: 'Map Block',
  fields: [
    {
      name: 'mapTitle',
      type: 'string',
      title: 'Title for Map'
    },
    {
      name: 'pins',
      type: 'array',
      title: 'Pins',
      of: [
        {
          type: 'object',
          title: 'Pin',
          fields: [
            {
              name: 'pinTitle',
              type: 'string',
              title: 'Pin Title'
            },
            {
              name: 'location',
              type: 'geopoint',
              title: 'Location'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'mapTitle',
    }
  }
};
