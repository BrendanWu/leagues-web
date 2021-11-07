import { useState, useEffect } from "react";

interface Location {
  currentLat: number;
  currentLng: number;
}

export const useNavigator = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | {}>({});
  const [error, setError] = useState<null | string>(null);
  const onChange = (props: { coords: any }) => {
    const { coords } = props;
    setCurrentLocation({
      currentLat: coords.latitude,
      currentLng: coords.longitude,
    });
  };
  const onError = (error: any) => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...currentLocation, error };
};
