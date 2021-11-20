import { useState } from "react";
import GoogleMapReact from "google-map-react";
import MapDrawer from "./MapDrawer";
import { FlexDiv } from "../../../react-design-system/FlexDiv";
import { useSelector } from "react-redux";
import { RootState } from "../../../interfaces/redux/store";
import img from "../../../../src/assets/location.png";
import { useNavigator } from "../../../costumHooks/currentLocation";

const LeaguesMap = () => {
  const [isVisble, setIsVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const lat = useSelector<RootState>((state) => state?.location?.lat) as number;
  const lng = useSelector<RootState>((state) => state?.location?.lng) as number;
  const title = useSelector<RootState>(
    (state) => state?.location?.title
  ) as string;
  const { currentLat, currentLng } = useNavigator();

  return (
    <>
      <MapDrawer
        text={name}
        isVisible={isVisble}
        onClose={() => setIsVisible(false)}
      />
      <div style={{ width: "50vw", height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbakHYrx-anepIbe5nyyMKVGEhdCHTfEI" }}
          center={{
            lat: lat || 43.653908,
            lng: lng || -79.384293,
          }}
          defaultZoom={15}
          options={{
            styles: mapStyles,
          }}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            onSubmit={() => {
              setName(title);
              setIsVisible(true);
            }}
            lat={lat}
            lng={lng}
            text={title}
          />

          <AnyReactComponent
            onSubmit={() => {
              console.log("Current Location");
            }}
            lat={currentLat || 0}
            lng={currentLng || 0}
            text={"Current Location"}
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

const AnyReactComponent = (props: {
  lat: number;
  lng: number;
  text: string;
  onSubmit: () => void;
}) => (
  <FlexDiv
    style={{
      fontSize: 18,
      fontWeight: "bold",
      background: "white",
      color: "darkorange",
      zIndex: 10,
    }}
    onClick={() => props.onSubmit()}
  >
    {props?.text === "Current Location" ? (
      props?.text
    ) : (
      <img style={{ height: 50, width: 50 }} alt="Location" src={img} />
    )}
    {/* {props?.text} */}
  </FlexDiv>
);

const mapStyles = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#000000",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#e5c163",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#c4c4c4",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#e5c163",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 21,
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#e5c163",
      },
      {
        lightness: "0",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#e5c163",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#575757",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#999999",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
    ],
  },
];
export default LeaguesMap;
