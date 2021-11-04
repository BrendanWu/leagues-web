
export type GeocodeOptionsType = {
  searchString: string
}

export type GeocodeReturnType = {
  data: google.maps.GeocoderResult[]
}

export const configureGeocodeService = (API_KEY: string) => (
  options: GeocodeOptionsType,
) => {
  const service = new google.maps.Geocoder()
  return new Promise<GeocodeReturnType['data']>((resolve, reject) =>
    service.geocode(
      {
        address: options.searchString,
        region: 'ca',
        componentRestrictions: { country: 'Canada' },
      },
      (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          return resolve(results)
        } else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
          return resolve([])
        } else {
          return reject(status)
        }
      },
    ),
  )
}
