export default {
  name: 'poi',
  title: 'Point of Interest',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'geopoint',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    // Lägg till ytterligare fält här, t.ex. bilder, kategorier, etc.
  ],
}

export default {
  name: 'direction',
  title: 'Direction',
  type: 'document',
  fields: [
    {
      name: 'from',
      title: 'From',
      type: 'geopoint',
    },
    {
      name: 'to',
      title: 'To',
      type: 'geopoint',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    // Ytterligare fält kan inkluderas här för detaljer om riktningen
  ],
}

export default {
  name: 'trail',
  title: 'Trail',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Trail Name',
      type: 'string',
    },
    {
      name: 'trailPath',
      title: 'Trail Path',
      type: 'array',
      of: [{ type: 'geopoint' }],
      description: 'Array of geopoints representing the trail path',
    },
    {
      name: 'pois',
      title: 'Points of Interest',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'poi' }] }],
      description: 'References to Points of Interest along the trail',
    },
    {
      name: 'directions',
      title: 'Directions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'direction' }] }],
      description: 'References to Directions associated with the trail',
    },
  ],
}
