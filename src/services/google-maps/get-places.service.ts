import { PlaceType } from './google-maps-services.type'

export type GetPlacesOptionsType = {
  map: google.maps.Map
  type: PlaceType
  position: google.maps.LatLng
}

export type GetPlacesReturnType = {
  data: google.maps.places.PlaceResult[]
  pagination: any
}

export const configureGetPlacesService = (API_KEY: string) => (
  options: GetPlacesOptionsType,
) => {
  const service = new google.maps.places.PlacesService(options.map)
  return new Promise<GetPlacesReturnType>((resolve, reject) =>
    service.nearbySearch(
      {
        location: options.position,
        radius: 2000,
        type: options.type,
      },
      (results, _, pagination) => resolve({ data: results, pagination }),
    ),
  )
}
