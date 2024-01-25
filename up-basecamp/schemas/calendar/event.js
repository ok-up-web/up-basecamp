// ./schemas/eventType.ts
import {CalendarIcon} from '@sanity/icons'
 
export default {
  name: 'eventType',
  type: 'document',
  icon: CalendarIcon,
  title: 'Event',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
  },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required().error('För att spara dokumentet krävs det att du skapar en slug'),
      options: {
        source: 'title',
        maxLength: 96,
      },
  },
    {
      name: 'date',
      title: 'Datum',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
  },
    {
      name: 'time',
      title: 'Tid',
      description: 'Ex: 12.00 - 17.00',
      type: 'string',

  },
    {
      name: 'address',
      title: 'Adress',
      type: 'string',
  },
    {
      name: 'info',
      title: 'Beskrivning av händelsen',
      type: 'text',
  },
    {
      name: 'lastDate',
      title: 'Sista anmälningsdatum',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
  },
    {
      name: 'image',
      type: 'image',
        title: 'Bild',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
      },
      ],
  },
    {
      name: 'bookingCTA',
      title: 'Bokningsknapp',
      type: 'object',
      fields: [
        {
          name: 'bookingCTAType',
          title: 'Typ av bokningsknapp',
          type: 'string',
          options: {
            list: [
              { title: 'E-post', value: 'email' },
              { title: 'Bokningstjänst/formulär', value: 'bookingService' },
            ],
            layout: 'radio',
          },
        },
        {
          name: 'url',
          title: 'Länk till bokningsformulär / bokningstjänst',
          type: 'url',
        },
        {
          name: 'email',
          title: 'E-postadress',
          type: 'email',
        },
      ],
  },
    {
      name: 'seoSettings',
      title: 'SEO-inställningar',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Titel',
          type: 'string',
          description: 'Title som visas i sökresultaten. Max längd är oftast 60 tecken.'
        },
        {
          name: 'description',
          title: 'Beskrivning',
          type: 'text',
                validation: Rule => Rule.max(155).warning('Max längd är 155 tecken.'),
          description: 'Beskrivningen som visas i sökresultaten och på hemsidan. Max längd är oftast 155 tecken.'
        },
        {
          name: 'keywords',
          title: 'Nyckelord',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Nyckelord som beskriver innehållet på sidan. Separera nyckelord med kommatecken.',
          options: {
            layout: 'tags'
          }
        },
        {
          name: 'image',
          title: 'Bild',
          type: 'image',
          description: 'Bilden som kommer att användas när denna sida delas på sociala medier.'
        }
      ]
  },
  ],
  preview: {
  select: {
    title: 'title',
    date: 'date',
  },
  prepare(selection) {
    const { date } = selection;

    // Kontrollera att datumet är giltigt
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return {
        title,
        subtitle: 'Ogiltigt datum',
      };
    }

    // Formattera datumet till önskat format
    const formattedDate = `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, '0')}-${String(parsedDate.getDate()).padStart(2, '0')}`;

    return {
      title: selection.title,
      subtitle: formattedDate,
    };
  },
}

})
