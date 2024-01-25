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
{
  name: 'difficulty',
  title: 'Svårighetsgrad',
  type: 'string',
  options: {
    list: ['Lätt', 'Medel', 'Svår', 'Expert'],
    layout: 'dropdown',
  },
},
{
  name: 'equipmentList',
  title: 'Utrustningslista',
  type: 'array',
  of: [{ type: 'string' }],
  description: 'Lista över nödvändig utrustning för evenemanget.',
  options: {
    list: [
      { title: 'BMX', equipment: ['BMX-cykel', 'Hjälm', 'Skyddsväst', 'Knä- och armbågsskydd'] },
      { title: 'Bergsvandring', equipment: ['Vandringskängor', 'Ryggsäck', 'Regnkläder', 'Vandringsstavar'] },
      { title: 'Bågskytte', equipment: ['Båge', 'Pilar', 'Armbågsskydd', 'Måltavla'] },
      { title: 'Downhill Mountainbike', equipment: ['Downhillcykel', 'Hjälm', 'Skyddsväst', 'Skyddsglasögon', 'Knä- och armbågsskydd'] },
      { title: 'Dykning', equipment: ['Dykardräkt', 'Dykmask', 'Flaskor', 'Fenor', 'Dykarkniv'] },
      { title: 'Fiske', equipment: ['Fiskespö', 'Fiskelinor', 'Krokar', 'Beten', 'Flytväst'] },
      { title: 'Fjällräddning och säkerhet', equipment: ['Första hjälpen-kit', 'GPS', 'Radio', 'Räddningsfilt', 'Signalpistol'] },
      { title: 'Fjällvandring och säkerhet', equipment: ['Vandringskängor', 'Ryggsäck', 'Kompass', 'Karta', 'Regnkläder'] },
      { title: 'Flugfiskekurs', equipment: ['Flugfiskespö', 'Flugfiskelinor', 'Flugor', 'Waders', 'Hatt med flugnät'] },
      { title: 'Forspaddling', equipment: ['Kajak', 'Paddel', 'Hjälm', 'Flytväst', 'Våtdräkt'] },
      { title: 'Forsränning', equipment: ['Flotte', 'Paddel', 'Hjälm', 'Flytväst', 'Våtdräkt'] },
      { title: 'Fågelskådning', equipment: ['Kikare', 'Fågelbok', 'Anteckningsblock', 'Kamera', 'Regnkläder'] },
      { title: 'Geocaching', equipment: ['GPS', 'Mobiltelefon med Geocaching-app', 'Pennor', 'Anteckningsblock', 'Små bytesartiklar'] },
      { title: 'Havskajakpaddling', equipment: ['Havskajak', 'Paddel', 'Flytväst', 'Vattentäta packpåsar', 'Solskyddskräm'] },
      { title: 'Hundspann', equipment: ['Släde', 'Hundspann', 'Värmeisolerad klädsel', 'Handskar', 'Mössa'] },
      { title: 'Hästridning', equipment: ['Ridhjälm', 'Ridstövlar', 'Säkerhetsväst', 'Ridbyxor', 'Handskar'] },
      { title: 'Isklättring', equipment: ['Isyxor', 'Stegjärn', 'Hjälm', 'Repsystem', 'Isklättringskängor'] },
      { title: 'Kajakfiske', equipment: ['Fiskekajak', 'Paddel', 'Flytväst', 'Fiskespö', 'Beten'] },
      { title: 'Kajakpaddling', equipment: ['Kajak', 'Paddel', 'Flytväst', 'Spraydeck', 'Våtdräkt'] },
      { title: 'Kanotpaddling', equipment: ['Kanot', 'Paddel', 'Flytväst', 'Vattentäta packpåsar', 'Solhatt'] },
      { title: 'Klippklättring', equipment: ['Klättersele', 'Klätterskor', 'Hjälm', 'Repsystem', 'Klätterkilar'] },
      { title: 'Klättring', equipment: ['Klättersele', 'Klätterskor', 'Klätterrep', 'Karbinhakar', 'Hjälm'] },
      { title: 'Klättringskurs', equipment: ['Klätterutrustning', 'Hjälm', 'Klätterskor', 'Säkerhetssele', 'Handskar'] },
      { title: 'Landsvägscykling', equipment: ['Landsvägscykel', 'Cykelhjälm', 'Cykelkläder', 'Vattenflaska', 'Reparationskit'] },
      { title: 'Mountain Biking', equipment: ['Mountainbike', 'Hjälm', 'Skyddsglasögon', 'Vattenflaska', 'Reparationskit'] },
      { title: 'Mountainbike', equipment: ['Mountainbike', 'Hjälm', 'Skyddsväst', 'Vattenflaska', 'Reparationskit'] },
      { title: 'Orientering', equipment: ['Kompass', 'Karta', 'Löparskor', 'Löparkläder', 'Vattenflaska'] },
      { title: 'Orienteringskurs', equipment: ['Kompass', 'Karta', 'Anteckningsmaterial', 'Vattenflaska', 'Lämpliga kläder'] },
      { title: 'Paddling', equipment: ['Kajak/kanot', 'Paddel', 'Flytväst', 'Vattentäta packpåsar', 'Vattenflaska'] },
      { title: 'Paragliding', equipment: ['Paraglider', 'Hjälm', 'Flygväst', 'Handskar', 'Radio'] },
      { title: 'Rappelling', equipment: ['Repsystem', 'Hjälm', 'Klättersele', 'Handskar', 'Säkerhetsskor'] },
      { title: 'Ridning i Terräng', equipment: ['Ridhjälm', 'Ridstövlar', 'Säkerhetsväst', 'Ridbyxor', 'Handskar'] },
      { title: 'Segling', equipment: ['Segelbåt', 'Flytväst', 'Säkerhetssele', 'Seglarhandskar', 'Vattentäta kläder'] },
      { title: 'Skidåkning', equipment: ['Skidor', 'Skidpjäxor', 'Skidstavar', 'Skidglasögon', 'Skidkläder'] },
      { title: 'Skärmflygning', equipment: ['Skärmflyg', 'Hjälm', 'Flygväst', 'Handskar', 'Höjdmätare'] },
      { title: 'Slacklining', equipment: ['Slackline-kit', 'Trädskydd', 'Säkerhetslina', 'Skor med bra grepp', 'Fallmatta'] },
      { title: 'Stand Up Paddleboarding (SUP)', equipment: ['SUP-bräda', 'Paddel', 'Flytväst', 'Vattentäta packpåsar', 'Solskyddskräm'] },
      { title: 'Terränglöpning', equipment: ['Terränglöparskor', 'Löparkläder', 'Vattenflaska', 'GPS-klocka', 'Energitillskott'] },
      { title: 'Vandring', equipment: ['Vandringskängor', 'Ryggsäck', 'Vandringsstavar', 'Vattenflaska', 'Regnkläder'] },
      { title: 'Vildmarkscamping', equipment: ['Tält', 'Sovsäck', 'Liggunderlag', 'Campingkök', 'Vattenreningsfilter'] },
      { title: 'Vindsurfing/Kitesurfing', equipment: ['Vindsurfbräda/kitebräda', 'Segel/drake', 'Våtdräkt', 'Säkerhetssele', 'Flytväst'] },
      { title: 'Zipline/Äventyrsbana', equipment: ['Säkerhetssele', 'Hjälm', 'Handskar', 'Säkerhetslina', 'Skor med bra grepp'] },
      { title: 'Överlevnadskurs', equipment: ['Första hjälpen-kit', 'Kniv', 'Tändstål', 'Vattenreningsutrustning', 'Överlevnadsbok'] },
    ],
  },
},
{
  name: 'weatherPolicy',
  title: 'Väderpolicy',
  type: 'text',
  description: 'Information om hur evenemanget påverkas av väderförhållanden.',
},
{
  name: 'safetyInfo',
  title: 'Säkerhetsinformation',
  type: 'text',
  description: 'Viktig säkerhetsinformation och riktlinjer för deltagarna.',
},
{
  name: 'groupBookingOptions',
  title: 'Gruppbokningsalternativ',
  type: 'text',
  description: 'Information om bokningsalternativ och priser för grupper.',
},
{
  name: 'accessibility',
  title: 'Tillgänglighet',
  type: 'text',
  description: 'Information om tillgänglighetsanpassningar för evenemanget.',
},
{
  name: 'bookingRules',
  title: 'Bokningsregler',
  type: 'text',
  description: 'Detaljerade regler och villkor för bokning, inklusive avbokningspolicy och eventuella åldersbegränsningar.',
},

{
  name: 'paymentOptions',
  title: 'Betalningsalternativ',
  type: 'array',
  of: [{ type: 'string' }],
  description: 'Lista över tillgängliga betalningsalternativ (t.ex. kreditkort, banköverföring, online-betalningssystem, kontant vid ankomst).',
  options: {
    list: [
      { title: 'Kreditkort', value: 'creditCard' },
      { title: 'Banköverföring', value: 'bankTransfer' },
      { title: 'Online-betalningssystem', value: 'onlinePaymentSystem' },
      { title: 'Kontant', value: 'cash' },
      { title: 'Faktura', value: 'invoice' },
      // Fler betalningsalternativ kan läggas till efter behov
    ],
  },
},
{
  name: 'bookingMethod',
  title: 'Bokningsmetod',
  type: 'object',
  fields: [
    {
      name: 'email',
      title: 'E-post',
      type: 'email',
      description: 'Ange en e-postadress för bokningar om detta är ett alternativ.',
    },
    {
      name: 'website',
      title: 'Webbplats',
      type: 'url',
      description: 'Ange en URL till en bokningssida om detta är ett alternativ.',
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      description: 'Ange ett telefonnummer för bokningar om detta är ett alternativ.',
    },
    {
      name: 'other',
      title: 'Övrigt',
      type: 'text',
      description: 'Beskriv andra bokningsmetoder som kan vara tillgängliga, till exempel via en app, sociala medier, eller fysisk butik.',
    },
  ],
  description: 'Välj hur deltagarna kan boka för detta evenemang.',
},
{
  name: 'minParticipants',
  title: 'Minst Antal Deltagare',
  type: 'number',
  description: 'Ange det minst antalet deltagare som kan delta i evenemanget. Detta hjälper till att hantera gruppstorleken för säkerhet och kvalitet.',
  validation: Rule => Rule.required().min(1).error('Du måste ange ett positivt antal deltagare.'),
},
{
  name: 'maxParticipants',
  title: 'Maximalt Antal Deltagare',
  type: 'number',
  description: 'Ange det maximala antalet deltagare som kan delta i evenemanget. Detta hjälper till att hantera gruppstorleken för säkerhet och kvalitet.',
  validation: Rule => Rule.required().min(1).error('Du måste ange ett positivt antal deltagare.'),
},
// Åldersgräns och Målgrupp
{
  name: 'ageLimit',
  title: 'Åldersgräns och Målgrupp',
  type: 'string',
  description: 'Ange eventuell åldersgräns och den målgrupp som evenemanget är riktat mot.',
},

// Tillgänglighetsinformation
{
  name: 'accessibilityInfo',
  title: 'Tillgänglighetsinformation',
  type: 'text',
  description: 'Beskriv hur evenemanget är tillgängligt för personer med funktionsnedsättningar.',
},

// Säkerhetsinformation och Risker
{
  name: 'safetyAndRisks',
  title: 'Säkerhetsinformation och Risker',
  type: 'text',
  description: 'Detaljerad information om säkerhetsåtgärder och potentiella risker associerade med evenemanget.',
},

// Mat och Dryck
{
  name: 'foodAndBeverages',
  title: 'Mat och Dryck',
  type: 'text',
  description: 'Information om mat och dryck som tillhandahålls, eller om deltagarna behöver ta med egen föda.',
},

// Transport och Parkering
{
  name: 'transportationAndParking',
  title: 'Transport och Parkering',
  type: 'text',
  description: 'Information om transportalternativ till evenemanget och parkeringsmöjligheter.',
},

// COVID-19 Protokoll och Hälsoregler
{
  name: 'covid19Protocols',
  title: 'COVID-19 Protokoll och Hälsoregler',
  type: 'text',
  description: 'Beskriv eventuella särskilda hälsoregler eller COVID-19 protokoll som deltagarna behöver följa.',
},

}),
],
  preview: {
  select: {
    title: 'title',
    date: 'date',
  },
  prepare(selection) {
    const { date, title } = selection;

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
      title,
      subtitle: formattedDate,
    };
  },

}

})
