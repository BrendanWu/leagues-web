import { GetPlacesReturnType, GetPlacesOptionsType } from './get-places.service'
import { GeocodeReturnType, GeocodeOptionsType } from './geocode.service'

export type GoogleMapsServicesType = {
  getPlaces: (options: GetPlacesOptionsType) => Promise<GetPlacesReturnType>
  geocode: (options: GeocodeOptionsType) => Promise<GeocodeReturnType['data']>
}

export type PlaceType =
  | 'restaurant'
  | 'school'
  | 'gym'
  | 'park'
  | 'bank'
  | 'transit_station'
