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
    // ... andra fält som tidigare definierats med defineField
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare(selection) {
      const { date } = selection;
      const parsedDate = new Date(date);
      const formattedDate = `${parsedDate.getFullYear()}-${String(parsedDate.getMonth() + 1).padStart(2, '0')}-${String(parsedDate.getDate()).padStart(2, '0')}`;

      return {
        title: selection.title,
        subtitle: formattedDate,
      };
    },
  }
}
