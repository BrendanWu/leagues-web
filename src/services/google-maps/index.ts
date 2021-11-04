import { GoogleMapsServicesType } from './google-maps-services.type'
import { configureGetPlacesService } from './get-places.service'
import { configureGeocodeService } from './geocode.service'

export const configureGoogleMapsServices: (
  API_KEY: string,
) => GoogleMapsServicesType = API_KEY => ({
  getPlaces: configureGetPlacesService(API_KEY),
  geocode: configureGeocodeService(API_KEY),
})

export type { GoogleMapsServicesType }
