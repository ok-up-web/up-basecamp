
import company from './companies/company'
import businessChain from './companies/businessChain'


import mainEquipmentCategory from './equipment/mainEquipmentCategory'
import subEquipmentCategory from './equipment/subEquipmentCategory'

import landscapeAttribute from './attributes/landscapeAttribute'
import facilityAttribute from './attributes/facilityAttribute'

import activity from './activity/activity'
import accommodation from './accommodation/accommodation'
import region from './location/region'
import province from './location/province'
import county from './location/county'
import municipality from './location/municipality'
import location from './location/location'

import kioskUser from './kiosk/kioskUser'

import profileBlock from './blocks/profileBlock'
import checklistBlock from './blocks/checklistBlock'
import articleBlock from './blocks/articleBlock'

import checklist from './checklists/checklist'
import items from './checklists/items'

import author from './articles/author'
import tag from './articles/tag'
import category from './articles/category'
import article from './articles/article'

import profile from './companies/profile'

import { localeString } from './localeString';
import { localeText } from './localeText';

import locationBlock from './blocks/locationBlock'
import spotBlock from './blocks/spotBlock'

import spot from './location/spot'

import accordionBlock from './blocks/accordionBlock'
import { tableRowType, tableBlock } from './blocks/tableBlock';
import textBlock from './blocks/textBlock'
import blockContent from './blocks/textBlock'

import mapBlock from './blocks/mapBlock'


export const schemaTypes = [
company,
businessChain,
mainEquipmentCategory,
subEquipmentCategory,
landscapeAttribute,
facilityAttribute,
activity,
accommodation,
region,
province,
county,
municipality,
location,
kioskUser,
profileBlock,
checklistBlock,
articleBlock,
checklist,
items,
author,
tag,
category,
article,
profile,
localeString,
localeText,
locationBlock,
spotBlock,
spot,
accordionBlock,
tableBlock,
tableRowType,
textBlock,
mapBlock,
blockContent,
]
