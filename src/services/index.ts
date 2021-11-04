import { ServicesType } from './services.type'
// import { configureRepliersServices } from './repliers'
// import { configureFirebaseServices } from './firebase'
// import { appConfig } from 'config'
import { configureGoogleMapsServices } from './google-maps'
// import { configureLiftedServices } from './lifted'

export const services: ServicesType = {
  // repliers: configureRepliersServices(
    // appConfig.repliers.API_URL,
    // appConfig.repliers.API_KEY,
  // ),
  // firebase: configureFirebaseServices(appConfig.firebase),
  gmaps: configureGoogleMapsServices("appConfig.gmaps.API_KEY"),
  // lifted: configureLiftedServices(
    // appConfig.lifted.HOME_FORM_URL,
    // appConfig.lifted.DEVELOPMENTS_FORM_URL,
    // appConfig.lifted.REGISTER_FORM_URL,
    // appConfig.lifted.CONTACT_FORM_URL,
    // appConfig.lifted.SCHEDULE_FORM_URL,
    // appConfig.lifted.DETAILS_FORM_URL,
  // ),
}
