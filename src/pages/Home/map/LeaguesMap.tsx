import { useState } from "react";
import GoogleMapReact from "google-map-react";
import MapDrawer from "./MapDrawer";
import Marker from "./components/Marker";
import InfoWindow from "./components/InfoWindow";
import { useSelector } from "react-redux";
import { RootState } from "../../../interfaces/redux/store";
import { useNavigator } from "../../../costumHooks/currentLocation";

const LeaguesMap = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const [isInfoWindowVisible, setIsInfoWindowVisible] = useState<boolean>(false);
  const lat = useSelector<RootState>((state) => state?.location?.lat) as number;
  const lng = useSelector<RootState>((state) => state?.location?.lng) as number;
  const title = useSelector<RootState>((state) => state?.location?.title) as string;
  const description = useSelector<RootState>((state) => state?.court?.description) as string;
  const timing = useSelector<RootState>((state) => state?.court?.timing) as string;
  const website = useSelector<RootState>((state) => state?.court?.website) as string;
  const imageUrl = useSelector<RootState>((state) => state?.court?.imageUrl) as string;
  const { currentLat, currentLng } = useNavigator();

  return (
    <>
      <MapDrawer
        title={title}
        description={description}
        timing={timing}
        website={website}
        imageUrl={imageUrl}
        isVisible={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
      />
      <div style={{ width: "50vw", height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY as string,
          }}
          center={{
            lat: lat || 43.653908,
            lng: lng || -79.384293,
          }}
          defaultZoom={15}
          options={{
            styles: mapStyles,
          }}
          yesIWantToUseGoogleMapApiInternals
          onClick={() => isInfoWindowVisible && setIsInfoWindowVisible(false)} >

          {/* Court InfoWindow and Marker */}
          {
            isInfoWindowVisible &&
            <InfoWindow
              lat={lat}
              lng={lng}
              title={title}
              description={description}
              timing={timing}
              website={website}
              imageUrl={imageUrl}
              onSubmit={() => { setIsDrawerVisible(true) }}
            />
          }
          {
            !isInfoWindowVisible &&
            <Marker
              lat={lat}
              lng={lng}
              text=""
              onSubmit={() => { setIsInfoWindowVisible(true) }}
            />
          }

          {/* Current Location Marker */}
          <Marker
            lat={currentLat || 0}
            lng={currentLng || 0}
            text={"Current Location"}
            onSubmit={() => console.log("Current Location")}
          />
        </GoogleMapReact>
      </div>
    </>
  );
};


const mapStyles = [
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        color: "#f7f1df",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#d0e3b4",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbd3da",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#bde6ab",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffe15f",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#efd151",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "black",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#cfb2db",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#a2daf2",
      },
    ],
  },
];
//   = [
//   {
//     featureType: "all",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "all",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         saturation: 36,
//       },
//       {
//         color: "#cec6c6d8",
//       },
//       {
//         lightness: 40,
//       },
//     ],
//   },
//   {
//     featureType: "all",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 16,
//       },
//     ],
//   },
//   {
//     featureType: "all",
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 20,
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 17,
//       },
//       {
//         weight: 1.2,
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#e5c163",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.locality",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#c4c4c4",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.neighborhood",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#e5c163",
//       },
//     ],
//   },
//   {
//     featureType: "landscape",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 20,
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 21,
//       },
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "poi.business",
//     elementType: "geometry",
//     stylers: [
//       {
//         visibility: "on",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#e5c163",
//       },
//       {
//         lightness: "0",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry.stroke",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#ffffff",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#e5c163",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 18,
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#575757",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#ffffff",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#2c2c2c",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 16,
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#999999",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 19,
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//       {
//         lightness: 17,
//       },
//     ],
//   },
// ];


export default LeaguesMap;