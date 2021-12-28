import { useState } from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import { RootState } from "../../interfaces/redux/store";
import { useNavigator } from "../../costumHooks/currentLocation";
import GameDrawer from "./GameDrawer";
import Marker from "./Marker";
import InfoWindow from "./InfoWindow";
import { mapStyles } from "../styles";


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
      <GameDrawer
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
            clickableIcons: false
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

export default LeaguesMap;