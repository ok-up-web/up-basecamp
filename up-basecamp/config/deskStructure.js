
import {CaseIcon, EarthGlobeIcon, PinIcon, TiersIcon, HomeIcon, JoystickIcon, IceCreamIcon, SunIcon, RocketIcon} from '@sanity/icons'


const singletonListItem = (S, typeName, title) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().title(title || typeName).schemaType(typeName).documentId(typeName));


export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Companies List Item
      S.listItem()
        .title('Companies')
        .icon(CaseIcon)
        .child(
          S.list()
            .title('Companies')
            .items([
              S.documentTypeListItem('company').icon(CaseIcon).title('Company'),
              S.documentTypeListItem('profile').icon(CaseIcon).title('Profile'),
              S.documentTypeListItem('businessChain').icon(CaseIcon).title('Business Chain'),
            ])
        ),

// articles
S.listItem()
      .title('Articles')
      .child(
        S.list()
          .title('Articles')
          .items([

            S.listItem()
              .title('Articles')
              .child(
                S.documentTypeList('article')
                  .title('Article')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('article')
                  )
              ),
            S.listItem()
              .title('Author')
              .child(
                S.documentTypeList('author')
                  .title('Author')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('author')
                  )
              ),
            S.listItem()
              .title('Tags')
              .child(
                S.documentTypeList('tag')
                  .title('Tags')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('tag')
                  )
              ),
            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category')
                  .title('Category')
                  .child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('category')
                  )
              ),
              //singletonListItem(S, "articleFrontpage", "Article Frontpage")
          ])
      ),


      // pages
      S.listItem()
            .title('Pages')
            .child(
              S.list()
                .title('Pages')
                .items([

                  S.listItem()
                    .title('Page')
                    .child(
                      S.documentTypeList('page')
                        .title('Page')
                        .child((documentId) =>
                          S.document()
                            .documentId(documentId)
                            .schemaType('page')
                        )
                    ),

                  S.listItem()
                    .title('Categories')
                    .child(
                      S.documentTypeList('pageCategory')
                        .title('Category')
                        .child((documentId) =>
                          S.document()
                            .documentId(documentId)
                            .schemaType('pageCategory')
                        )
                    ),

                ])
            ),

// Checklists
        S.listItem()
          .title('Checklists')
          .icon(CaseIcon)
          .child(
            S.list()
              .title('Checklists')
              .items([
                S.documentTypeListItem('checklist').icon(CaseIcon).title('Checklist'),
                S.documentTypeListItem('items').icon(CaseIcon).title('Items'),

              ])
          ),

      // Location List Item
      S.listItem()
        .title('Location')
        .icon(EarthGlobeIcon)
        .child(
          S.list()
            .title('Location')
            .items([
              S.documentTypeListItem('province').icon(PinIcon).title('Province'),
              S.documentTypeListItem('region').icon(PinIcon).title('Region'),
              S.documentTypeListItem('county').icon(PinIcon).title('County'),
              S.documentTypeListItem('municipality').icon(PinIcon).title('Municipality'),
              S.documentTypeListItem('location').icon(PinIcon).title('Location'),
                  S.documentTypeListItem('spot').icon(PinIcon).title('Spot'),
            ])
        ),
        // Calendar
                S.listItem()
                  .title('Calendar')
                  .icon(CaseIcon)
                  .child(
                    S.list()
                      .title('Calendar')
                      .items([
                        S.documentTypeListItem('eventType').icon(CaseIcon).title('Event'),
                      ])
                  ),

      // Categorization List Item
      S.listItem()
        .title('Categorization')
        .child(
          S.list()
            .title('Categorization')
            .items([
              // Business Type List Item under Categorization
              S.listItem()
                .title('Business Type')
                .icon(CaseIcon)
                .child(
                  S.list()
                    .title('Business Type')
                    .items([
                      S.documentTypeListItem('activity').icon(JoystickIcon).title('Activity'),
                      S.documentTypeListItem('accommodation').icon(HomeIcon).title('Accommodation'),
                    ])
                ),

              // Attributes List Item under Categorization
              S.listItem()
                .title('Attributes')
                .child(
                  S.list()
                    .title('Attributes')
                    .items([
                      S.documentTypeListItem('facilityAttribute').icon(IceCreamIcon).title('Facility Attribute'),
                      S.documentTypeListItem('landscapeAttribute').icon(SunIcon).title('Landscape Attribute'),
                    ])
                ),

              // Equipment List Item under Categorization
              S.listItem()
                .title('Equipment')
                .child(
                  S.list()
                    .title('Equipment')
                    .items([
                      S.documentTypeListItem('mainEquipmentCategory').icon(RocketIcon).title('Main Equipment Category'),
                      S.documentTypeListItem('subEquipmentCategory').icon(RocketIcon).title('Sub Equipment Category'),
                    ])
                ),
            ])
        ),

        //Search Phrases
        S.listItem()
        .title('Search Phrase')
        .schemaType('searchPhrase')
        .child(S.documentTypeList('searchPhrase').title('Search Phrase')),

        //kiosk
        S.listItem()
          .title('Kiosk')
          .icon(CaseIcon)
          .child(
            S.list()
              .title('Kiosk')
              .items([
                S.documentTypeListItem('kioskUser').icon(CaseIcon).title('Kiosk user'),
              ])
          ),
          //Settings
          S.listItem()
            .title('Settings')
            .icon(CaseIcon)
            .child(
              S.list()
                .title('Settings')
                .items([
                  S.documentTypeListItem('language').icon(CaseIcon).title('Languages'),
                  S.documentTypeListItem('webFrontpage').icon(CaseIcon).title('Web - Frontpage'),
                  S.documentTypeListItem('webNavBar').icon(CaseIcon).title('Web - Navbar'),
                  S.documentTypeListItem('webFooter').icon(CaseIcon).title('Web - Footer'),
                ])
            ),
    ]);
