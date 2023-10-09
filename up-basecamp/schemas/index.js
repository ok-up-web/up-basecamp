import companies from './companies/companies'

import mainEquipmentCategory from './equipment/mainEquipmentCategory'
import subEquipmentCategory from './equipment/subEquipmentCategory'

import landscapeAttribute from './attributes/landscapeAttribute'
import facilityAttribute from './attributes/facilityAttribute'


import region from './location/region'
import province from './location/province'
import county from './location/county'
import municipality from './location/municipality'
import location from './location/location.js'


export const schemaTypes = [
companies,
landscapeAttribute,
facilityAttribute,
mainEquipmentCategory,
subEquipmentCategory,
region,
province,
county,
municipality,
location
]
