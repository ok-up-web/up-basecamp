export default {
  name: 'items',
  title: 'Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string'
    },
    {
      name: 'localTitle',
      title: 'Title translations',
      type: 'localeString'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'localeDescription',
      title: 'Description translations',
      type: 'localeString'
    },
    {
      name: 'quantity',
      title: 'Antal',
      type: 'number'
    }
  ]
}
