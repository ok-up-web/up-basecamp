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
    options: { hotspot: true },
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
      }
    ],
  },
  {
  name: 'activityType',
  title: 'Aktivitetstyp',
  type: 'string',
  options: {
  list: [
    { title: 'Vandring', value: 'hiking' },
    { title: 'Paddling', value: 'paddling' },
    { title: 'Klättring', value: 'climbing' },
    { title: 'Mountain Biking', value: 'mountainBiking' },
    { title: 'Skidåkning', value: 'skiing' },
    { title: 'Fiske', value: 'fishing' },
    { title: 'Kajakpaddling', value: 'kayaking' },
    { title: 'Orientering', value: 'orienteering' },
    { title: 'Forsränning', value: 'rafting' },
    { title: 'Dykning', value: 'diving' },
    { title: 'Paragliding', value: 'paragliding' },
    { title: 'Hästridning', value: 'horseRiding' },
    { title: 'Zipline/Äventyrsbana', value: 'ziplining' },
    { title: 'Vindsurfing/Kitesurfing', value: 'windsurfingKitesurfing' },
    { title: 'Bergsvandring', value: 'mountainHiking' },
    { title: 'Vildmarkscamping', value: 'wildernessCamping' },
    { title: 'Terränglöpning', value: 'trailRunning' },
    { title: 'Fågelskådning', value: 'birdWatching' },
    { title: 'Forspaddling', value: 'whitewaterKayaking' },
    { title: 'Klippklättring', value: 'rockClimbing' },
    { title: 'Isklättring', value: 'iceClimbing' },
    { title: 'Stand Up Paddleboarding (SUP)', value: 'standUpPaddleboarding' },
    { title: 'Segling', value: 'sailing' },
    { title: 'Hundspann', value: 'dogSledding' },
    { title: 'Skärmflygning', value: 'hangGliding' },
    { title: 'Rappelling', value: 'rappelling' },
    { title: 'Bågskytte', value: 'archery' },
    { title: 'Slacklining', value: 'slacklining' },
    { title: 'Geocaching', value: 'geocaching' },
    { title: 'Kajakfiske', value: 'kayakFishing' },
    { title: 'Ridning i Terräng', value: 'trailHorseRiding' },
    { title: 'Havskajakpaddling', value: 'seaKayaking' },
    { title: 'Kanotpaddling', value: 'canoeing' },
    { title: 'Övrigt', value: 'another' },
    { title: 'Landsvägscykling', value: 'roadCycling' },
    { title: 'Mountainbike', value: 'mountainBiking' },
    { title: 'BMX', value: 'bmx' },
    { title: 'Downhill Mountainbike', value: 'downhillMountainBiking' },
    { title: 'Flugfiskekurs', value: 'flyFishingCourse' },
    { title: 'Fjällräddning och säkerhet', value: 'mountainRescueSafety' },
    { title: 'Klättringskurs', value: 'climbingCourse' },
    { title: 'Fjällvandring och säkerhet', value: 'mountainHikingSafety' },
    { title: 'Orienteringskurs', value: 'orienteeringCourse' },
    { title: 'Överlevnadskurs', value: 'survivalCourse' },
  ],
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
