import { useState, useEffect, useRef } from "react";
import { MapData } from "../interfaces/pages/Home";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import MapDrawer from "./MapDrawer";
import { FlexDiv } from "../design-system/FlexDiv";
import { useSelector } from "react-redux";
import { RootState } from "../interfaces/redux/store";
import img from "../../src/assets/location.png";

import {
  MISSISSAUGA_BOUNDS,
  TORONTO_BOUNDS,
  TORONTO_BOUNDS_Marker,
} from "./Basketballs of toronto (2)";

const TextStyled = styled.h5`
  color: white;
  font-size: 38;
  font-weight: bold;
`;

const LeaguesMap = () => {
  const [isVisble, setIsVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const lat = useSelector<RootState>((state) => state?.location?.lat) as number;
  const lng = useSelector<RootState>((state) => state?.location?.lng) as number;
  const title = useSelector<RootState>(
    (state) => state?.location?.title
  ) as string;
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [maps, setMaps] = useState<any>(null);
  const [map, setMap] = useState<any>(null);
  const [maps2, setMaps2] = useState<any>(null);
  const [map2, setMap2] = useState<any>(null);
  // console.log(location);
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
  const onMapLoaded = (map: any, maps: any) => {
    console.log("boundss", map);
    console.log("mapppppsssss", maps);

    handleApiLoaded(map, maps);
    // handleApiLoaded2(map, maps);
    setMapLoaded(true);
    setMap(map);
    setMaps(maps);
    setMap2(map);
    setMaps2(maps);
  };
  const handleApiLoaded = (map: any, maps: any) => {
    var bounds = new maps.LatLngBounds();

    for (let marker of MISSISSAUGA_BOUNDS_MArkers) {
      bounds.extend(new maps.LatLng(marker.lat, marker.lng));
    }
    map.fitBounds(bounds);
  };
  const handleApiLoaded2 = (map2: any, maps2: any) => {
    var bounds = new maps2.LatLngBounds();

    for (let marker of TORONTO_BOUNDS_Marker) {
      bounds.extend(new maps2.LatLng(marker.lat, marker.lng));
    }
    map2.fitBounds(bounds);
  };
  const afterMapLoadChanges = () => {
    return (
      <div style={{ display: "none" }}>
        <Polyline map={map} maps={maps} markers={MISSISSAUGA_BOUNDS_MArkers} />
      </div>
    );
  };
  const afterMapLoadChangesToronto = () => {
    return (
      <div style={{ display: "none" }}>
        <Polyline map={map2} maps={maps2} markers={TORONTO_BOUNDS_Marker} />
      </div>
    );
  };

  return (
    <div>
      {/* <h1>{props.item?.title}</h1> */}
      <MapDrawer
        text={name}
        isVisible={isVisble}
        onClose={() => setIsVisible(false)}
      />
      <div style={{ width: "50vw", height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbakHYrx-anepIbe5nyyMKVGEhdCHTfEI" }}
          // defaultCenter={{
          //   lat: lat || 43.653908,
          //   lng: lng || -79.384293,
          // }}
          center={{
            lat: lat || 43.653908,
            lng: lng || -79.384293,
          }}
          defaultZoom={15}
          options={{
            styles: mapStyles,
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => onMapLoaded(map, maps)}
        >
          {/* {MISSISSAUGA_BOUNDS?.map((item, index) => (
            <AnyReactComponent
              key={index}
              onSubmit={() => {
                // setName(item?.title);
                setIsVisible(true);
              }}
              lat={item[1]}
              lng={item[0]}
              text={"^"}
            />
          ))} */}
          {/* {TORONTO_BOUNDS?.map((item, index) => (
            <AnyReactComponent
              key={index}
              onSubmit={() => {
                // setName(item?.title);
                setIsVisible(true);
              }}
              lat={item[1]}
              lng={item[0]}
              text={"*"}
            />
          ))} */}
          {/* {mapLoaded && map !== null && maps !== null
            ? afterMapLoadChanges()
            : ""} */}
          {/* {mapLoaded && map2 !== null && maps2 !== null
            ? afterMapLoadChangesToronto()
            : ""} */}

          <AnyReactComponent
            onSubmit={() => {
              setName(title);
              setIsVisible(true);
            }}
            lat={lat}
            lng={lng}
            text={title}
          />
          {/* {data?.map((item) => (
            <AnyReactComponent
              key={item?._id}
              onSubmit={() => {
                setName(item?.title);
                setIsVisible(true);
              }}
              lat={item?.location?.latitude}
              lng={item?.location?.longitude}
              text={item?.title}
            />
          ))} */}
        </GoogleMapReact>
      </div>

      {/* <ul>
        <li>
          {props.item?.location?.longitude +
            " , " +
            props.item?.location.latitude}
        </li>
      </ul> */}
    </div>
  );
};

const MISSISSAUGA_BOUNDS_MArkers = [
  { lng: -79.8060608, lat: 43.5882743 },
  { lng: -79.6735382, lat: 43.5012457 },
  { lng: -79.648304, lat: 43.5231582 },
  { lng: -79.6088219, lat: 43.4953292 },
  { lng: -79.5293427, lat: 43.5793943 },
  { lng: -79.5671082, lat: 43.6086307 },
  { lng: -79.571228, lat: 43.6320034 },
  { lng: -79.6309662, lat: 43.7299259 },
  { lng: -79.8046875, lat: 43.5882344 },
];

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
    <img style={{ height: 50, width: 50 }} src={img} />
    {/* {props?.text} */}
  </FlexDiv>
);

const Polyline = (props: { markers: any; map: any; maps: any }) => {
  const renderPolylines = () => {
    const { markers, map, maps } = props;
    /** Example of rendering geodesic polyline */
    let geodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: true,
      strokeColor: "#00a1e1",
      strokeOpacity: 1.0,
      strokeWeight: 4,
    });
    geodesicPolyline.setMap(map);

    /** Example of rendering non geodesic polyline (straight line) */
    let nonGeodesicPolyline = new maps.Polyline({
      path: markers,
      geodesic: false,
      strokeColor: "blue",
      strokeOpacity: 0.7,
      strokeWeight: 3,
    });
    nonGeodesicPolyline.setMap(map);
  };
  renderPolylines();
  return null;
};
const data = [
  {
    _id: 0,
    hours: {
      monday: "8am-11pm",
      tuesday: "8am-11pm",
      wednesday: "8am-11pm",
      thursday: "8am-11pm",
      friday: "8am-11pm",
      saturday: "8am-11pm",
      sunday: "8am-11pm",
      Hoursofoperation: "15 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.638867, longitude: -79.381988 },
    title: "Harbourfront Centre",
    website:
      "https://www.google.com/maps/dir/43.6358258,-79.3966951/43.635787,-79.397768/@43.636169,-79.3993219,17z/am=t/data=!3m1!4b1",
    imageUrl:
      "http://traveltorontonow.blogspot.com/2014/08/harbourfront-centre-outdoor-basketball.html",
  },
  {
    _id: 1,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.649533, longitude: -79.364127 },
    title: "David Crombie Park Basketball Court",
    website: "https://goo.gl/maps/ZfkNnLFRCDhL7x3D7",
    imageUrl: "https://goo.gl/maps/6frKeZLanuwCNV71A",
  },
  {
    _id: 2,
    hours: {
      monday: "Opens 24 hours",
      tuesday: "Opens 24 hours",
      wednesday: "Opens 24 hours",
      thursday: "Opens 24 hours",
      friday: "Opens 24 hours",
      saturday: "Opens 24 hours",
      sunday: "Opens 24 hours",
      Hoursofoperation: "24 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.655229, longitude: -79.355525 },
    title: "Underpass Park",
    website: "https://goo.gl/maps/87Tmyn6V8sAeHbSS8",
    imageUrl: "https://goo.gl/maps/xVmRshmhan7jCmXRA",
  },

  {
    _id: 3,
    hours: {
      monday: "Temporarily Closed",
      tuesday: "Temporarily Closed",
      wednesday: "Temporarily Closed",
      thursday: "Temporarily Closed",
      friday: "Temporarily Closed",
      saturday: "Temporarily Closed",
      sunday: "Temporarily Closed",
      Hoursofoperation: "Temporarily Closed",
    },
    description: "Outdoor Public",
    location: { latitude: 41.701822, longitude: -73.930615 },
    title: "Church Street Basketball Court",
    website:
      "https://www.google.com/maps/dir/43.6358258,-79.3966951/43.635787,-79.397768/@43.636169,-79.3993219,17z/am=t/data=!3m1!4b1",
    imageUrl: "https://goo.gl/maps/B5tVNKEmWeoVorEA7",
  },
  {
    _id: 4,
    hours: {
      monday: "8AM�11PM",
      tuesday: "8AM�11PM",
      wednesday: "8AM�11PM",
      thursday: "8AM�11PM",
      friday: "8AM�11PM",
      saturday: "8AM�11PM",
      sunday: "8AM�11PM",
      Hoursofoperation: "15 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.670859, longitude: -79.37583 },
    title: "St. Jamestown Basketball Court",
    website: "https://goo.gl/maps/Wf2FfH89RjtBCsvs8",
    imageUrl: "https://images.app.goo.gl/63BfGXvTMJGnuAT4A",
  },
  {
    _id: 5,
    hours: {
      monday: "unknown",
      tuesday: "unknown",
      wednesday: "unknown",
      thursday: "unknown",
      friday: "unknown",
      saturday: "unknown",
      sunday: "unknown",
      Hoursofoperation: "unknown",
    },
    description: "Public park",
    location: { latitude: 0, longitude: 0 },
    title: "Spadina Circle/Robert Street Basketball Court",
    website: "https://goo.gl/maps/Z6CJRi1LDRmaksNo9",
    imageUrl: "https://images.app.goo.gl/W1YEnQZTscCMZzX38",
  },
  {
    _id: 6,
    hours: {
      monday: "7AM�9PM",
      tuesday: "7AM�9PM",
      wednesday: "7AM�9PM",
      thursday: "7AM�9PM",
      friday: "7AM�9PM",
      saturday: "9AM�5PM",
      sunday: "closed",
      Hoursofoperation: "14 hours",
    },
    description: "Indoor",
    location: { latitude: 0, longitude: 0 },
    title: "University Settlement",
    website: "https://www.courtsoftheworld.com/map/#!/43.651968,-79.39126,16,1",
    imageUrl:
      "https://www.courtsoftheworld.com/map/#!/43.651968,-79.39126,16,1",
  },
  {
    _id: 7,
    hours: {
      monday: "10am-10pm",
      tuesday: "10am-10pm",
      wednesday: "10am-10pm",
      thursday: "10am-10pm",
      friday: "10am-10pm",
      saturday: "10am-10pm",
      sunday: "10am-10pm",
      Hoursofoperation: "12 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.660809, longitude: -79.344601 },
    title: "Jimmie Simpson Park Outdoor Basketball Court",
    website: "https://goo.gl/maps/n3hm9TBSXo1MykbL9",
    imageUrl: "https://goo.gl/maps/2Rc43DUjaY916HkJ6",
  },
  {
    _id: 8,
    hours: {
      monday: "9AM�5PM",
      tuesday: "9AM�5PM",
      wednesday: "9AM�5PM",
      thursday: "9AM�5PM",
      friday: "9AM�5PM",
      saturday: "closed",
      sunday: "closed",
      Hoursofoperation: "8 hours",
    },
    description: "Indoor",
    location: { latitude: 43.643767, longitude: -79.378253 },
    title: "Toronto Raptors Basketball Club",
    website: "https://www.raptorsdevelopment.com/",
    imageUrl: "https://goo.gl/maps/hrj4u4R4KM2jnNuj8",
  },
  {
    _id: 9,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "unknown",
    },
    description: "Indoor",
    location: { latitude: 43.661788, longitude: -79.380072 },
    title: "Ryerson Coca-Cola Court",
    website: "https://www.ryerson.ca/recreation/facilities/Mac/cocacola-court/",
    imageUrl: "https://images.app.goo.gl/tVeKWWMux9ywrxXn6",
  },
  {
    _id: 10,
    hours: {
      monday: "9AM�5PM",
      tuesday: "9AM�5PM",
      wednesday: "9AM�5PM",
      thursday: "9AM�5PM",
      friday: "9AM�5PM",
      saturday: "closed",
      sunday: "closed",
      Hoursofoperation: "8 hours",
    },
    description: "indoor",
    location: { latitude: 43.660957, longitude: -79.366549 },
    title: "Youth Basketball Association",
    website: "http://youthball.ca/",
    imageUrl: "https://365 Parliament St, Toronto, ON M5A 2Z9, Canada",
  },
  {
    _id: 11,
    hours: {
      monday: "6AM�11PM",
      tuesday: "6AM�11PM",
      wednesday: "6AM�11PM",
      thursday: "6AM�11PM",
      friday: "6AM�11PM",
      saturday: "6AM�11PM",
      sunday: "6AM�11PM",
      Hoursofoperation: "17 hours",
    },
    description: "indoor",
    location: { latitude: 43.649755, longitude: -79.391808 },
    title: "The Hoop factory Basketball Club",
    website: "https://thehoopfactory.com/",
    imageUrl: "https://images.app.goo.gl/Ai3wLfoc1SpfXisp6",
  },

  {
    _id: 12,
    hours: {
      monday: "10AM�10PM",
      tuesday: "10AM�10PM",
      wednesday: "10AM�10PM",
      thursday: "10AM�10PM",
      friday: "10AM�10PM",
      saturday: "10AM�10PM",
      sunday: "10AM�10PM",
      Hoursofoperation: "12 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.675734, longitude: -79.346895 },
    title: "Withrow Park Basketball Court",
    website: "https://goo.gl/maps/Zx87ZcFa98cc6Buc9",
    imageUrl: "https://goo.gl/maps/XHKm9b42kBVMU8iw6",
  },
  {
    _id: 13,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "Unknown",
    },
    description: "Outdoor Public",
    location: { latitude: 43.650562, longitude: -79.398918 },
    title: "Alexandra Park Outdoor basketball Court",
    website: "https://goo.gl/maps/TEbXmq9uk5r81JRGA",
    imageUrl: "https://goo.gl/maps/SFTAko9PnoDGG3VU6",
  },
  {
    _id: 14,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "Unknown",
    },
    description: "indoor",
    location: { latitude: 43.66941, longitude: -79.410861 },
    title: "Annex Basketball Men's League",
    website: "http://annexbasketball.com/",
    imageUrl:
      "http://www.annexbasketball.com/uploads/2/3/8/1/23819449/screen-shot-2020-01-21-at-7-45-59-pm_orig.png",
  },
  {
    _id: 15,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "Unknown",
    },
    description: "Indoor",
    location: { latitude: 43.644322, longitude: -79.404374 },
    title: "Toronto Lords Basketball Association",
    website: "http://www.lordsbasketball.com/",
    imageUrl: "https://images.app.goo.gl/HNougBexTwunwe4U8",
  },
  {
    _id: 16,
    hours: {
      monday: "closed",
      tuesday: "12�5PM",
      wednesday: "12�5PM",
      thursday: "12�5PM",
      friday: "12�5PM",
      saturday: "10am-2pm",
      sunday: "closed",
      Hoursofoperation: "17 hours",
    },
    description: "Indoor",
    location: { latitude: 0, longitude: 0 },
    title: "Basketball World Toronto",
    website: "http://www.bwt.ca/",
    imageUrl: "https://goo.gl/maps/avmVDHtX4YkVyKVu5",
  },
  {
    _id: 17,
    hours: {
      monday: "Hours may Differ",
      tuesday: "Hours may Differ",
      wednesday: "Hours may Differ",
      thursday: "Hours may Differ",
      friday: "Hours may Differ",
      saturday: "Hours may Differ",
      sunday: "Hours may Differ",
      Hoursofoperation: "Unknown",
    },
    description: "Indoor",
    location: { latitude: 43.65946, longitude: -79.437134 },
    title: "Toronto Gay Basketball Association",
    website: "https://goo.gl/maps/2pTeJP3s4sGUPgRT7",
    imageUrl: "https://goo.gl/maps/6c3S6UyDKpbHZXuZA",
  },
  {
    _id: 18,
    hours: {
      monday: "7AM�7PM",
      tuesday: "7AM�7PM",
      wednesday: "7AM�7PM",
      thursday: "7AM�7PM",
      friday: "7AM�7PM",
      saturday: "11:30AM�4:30PM",
      sunday: "11:30AM�4:30PM",
      Hoursofoperation: "12 Hours ",
    },
    description: "Outdoor Public",
    location: { latitude: 43.660262, longitude: -79.344652 },
    title: "Jimmie Simpson Park",
    website:
      "https://www.toronto.ca/data/parks/prd/facilities/complex/58/index.html",
    imageUrl: "https://goo.gl/maps/c5VTMxkq5suah63D9",
  },
  {
    _id: 19,
    hours: {
      monday: "9AM�5PM",
      tuesday: "9AM�5PM",
      wednesday: "9AM�5PM",
      thursday: "9AM�5PM",
      friday: "9AM�5PM",
      saturday: "closed",
      sunday: "closed",
      Hoursofoperation: "8 Hours ",
    },
    description: "Indoor",
    location: { latitude: 43.717485, longitude: -79.400871 },
    title: "NTBA",
    website: "http://www.ntbasketball.com/",
    imageUrl: "https://images.app.goo.gl/myt2UQhVxC8zNBTj6",
  },
  {
    _id: 20,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours ",
    },
    description: "Outdoor Public",
    location: { latitude: 43.654949, longitude: -79.371118 },
    title: "Moss Park",
    website:
      "https://www.toronto.ca/data/parks/prd/facilities/complex/177/index.html",
    imageUrl: "https://goo.gl/maps/Zio17qhmBU3244Ld6",
  },
  {
    _id: 21,
    hours: {
      monday: "9AM�9PM",
      tuesday: "9AM�9PM",
      wednesday: "9AM�9PM",
      thursday: "9AM�9PM",
      friday: "9AM�9PM",
      saturday: "9AM�9PM",
      sunday: "9AM�9PM",
      Hoursofoperation: "12 Hours ",
    },
    description: "indoor",
    location: { latitude: 43.601528, longitude: -79.50213 },
    title: "South Toronto Golden Eagles Basketball Club",
    website: "http://www.southtorontobasketball.com/",
    imageUrl: "https://goo.gl/maps/aTZYRau1VmMse2Z86",
  },
  {
    _id: 22,
    hours: {
      monday: "9AM�10PM",
      tuesday: "9AM�10PM",
      wednesday: "9AM�10PM",
      thursday: "9AM�10PM",
      friday: "9AM�10PM",
      saturday: "9AM�10PM",
      sunday: "9AM�10PM",
      Hoursofoperation: "13 Hours ",
    },
    description: "indoor",
    location: { latitude: 43.660264, longitude: -79.344643 },
    title: "Jimmie Simpson Recreation Centre",
    website:
      "https://www.toronto.ca/data/parks/prd/facilities/complex/58/index.html",
    imageUrl: "https://goo.gl/maps/czXMuDQYNV7tj7HT7",
  },
  {
    _id: 23,
    hours: {
      monday: "9:30AM�10:30PM",
      tuesday: "9:30AM�10:30PM",
      wednesday: "9:30AM�10:30PM",
      thursday: "9:30AM�10:30PM",
      friday: "9:30AM�10:30PM",
      saturday: "9:30AM�10:30PM",
      sunday: "9:30AM�10:30PM",
      Hoursofoperation: "13 Hours ",
    },
    description: "Indoor",
    location: { latitude: 43.746446, longitude: -79.472989 },
    title: "HoopDome",
    website: "http://hoopdome.com/",
    imageUrl: "https://goo.gl/maps/D2n9ST6qknd2qAee9",
  },
  {
    _id: 24,
    hours: {
      monday: "Hours may Differ",
      tuesday: "Hours may Differ",
      wednesday: "Hours may Differ",
      thursday: "Hours may Differ",
      friday: "Hours may Differ",
      saturday: "Hours may Differ",
      sunday: "Hours may Differ",
      Hoursofoperation: "Unknown",
    },
    description: "Outdoor Public",
    location: { latitude: 43.654492, longitude: -79.369435 },
    title: "Queen St East at Sherbourne St",
    website: "https://goo.gl/maps/MHGZQiNvQF8o6Dyo9",
    imageUrl: "https://goo.gl/maps/MHGZQiNvQF8o6Dyo9",
  },
  {
    _id: 25,
    hours: {
      monday: "8am�4pm",
      tuesday: "8am�4pm",
      wednesday: "8am�4pm",
      thursday: "8am�4pm",
      friday: "8am�4pm",
      saturday: "closed",
      sunday: "closed",
      Hoursofoperation: "8 Hours",
    },
    description: "Public High School",
    location: { latitude: 43.639574, longitude: -79.436541 },
    title: "Parkdale collegiate Court",
    website: "https://schoolweb.tdsb.on.ca/parkdale/",
    imageUrl: "https://goo.gl/maps/3vyGmpS8SyPj9vqP6",
  },
  {
    _id: 26,
    hours: {
      monday: "6am�11pm",
      tuesday: "6am�11pm",
      wednesday: "6am�11pm",
      thursday: "6am�11pm",
      friday: "6am�11pm",
      saturday: "6am�11pm",
      sunday: "6am�11pm",
      Hoursofoperation: "17 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.629866, longitude: -79.409489 },
    title: "Trillium Park Basketball court",
    website: "http://www.mtc.gov.on.ca/en/ontarioplace/park_trails.shtml",
    imageUrl: "https://images.app.goo.gl/nV4kNoRy1Ct5owaG8",
  },
  {
    _id: 27,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.766362, longitude: -79.266222 },
    title: "Edgewood PS Basketball Court",
    website: "https://goo.gl/maps/DvkEXwm3wrVsmeLw5",
    imageUrl: "https://goo.gl/maps/Bz6YL8rGecuSKqhj9",
  },
  {
    _id: 28,
    hours: {
      monday: "6AM�9PM",
      tuesday: "6AM�9PM",
      wednesday: "6AM�9PM",
      thursday: "6AM�9PM",
      friday: "6AM�9PM",
      saturday: "6AM�9PM",
      sunday: "6AM�9PM",
      Hoursofoperation: "15 Hours",
    },
    description: "Indoor",
    location: { latitude: 39.410483, longitude: -77.453572 },
    title: "Hillcrest Park Basketball court",
    website:
      "https://www.toronto.ca/data/parks/prd/facilities/complex/79/index.html",
    imageUrl: "https://goo.gl/maps/gCr5zty8JE9AprvbA",
  },
  {
    _id: 29,
    hours: {
      monday: "7AM�9PM",
      tuesday: "7AM�9PM",
      wednesday: "7AM�9PM",
      thursday: "7AM�9PM",
      friday: "7AM�9PM",
      saturday: "9am-5pm",
      sunday: "9am-5pm",
      Hoursofoperation: "14 Hours Weekend 8 Hours",
    },
    description: "Indoor",
    location: { latitude: 43.675006, longitude: -79.451234 },
    title: "Joseph J.Piccininni Community Centre",
    website: "https://goo.gl/maps/kx5r5aZWrKXBn1iZ6",
    imageUrl: "https://goo.gl/maps/m8S49Mb2uPSij5f3A",
  },
  {
    _id: 30,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.677976, longitude: -79.320758 },
    title: "Coxwell Avenue Parkette Basketball court",
    website: "https://goo.gl/maps/jA2xQJ1bLyyqiyoc7",
    imageUrl: "https://goo.gl/maps/X2bK8CSRuRSEP2FAA",
  },
  {
    _id: 31,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "Unknown",
    },
    description: "Outdoor Public",
    location: { latitude: 43.647237, longitude: -79.443033 },
    title: "Sorauren Basketball Court",
    website: "https://goo.gl/maps/L3ExdKfvvoWouZTJ6",
    imageUrl: "https://images.app.goo.gl/CVdVrQfJ6bryC38s5",
  },
  {
    _id: 32,
    hours: {
      monday: "8AM�11PM",
      tuesday: "8AM�11PM",
      wednesday: "8AM�11PM",
      thursday: "8AM�11PM",
      friday: "8AM�11PM",
      saturday: "8AM�11PM",
      sunday: "8AM�11PM",
      Hoursofoperation: "15 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.67162, longitude: -79.466859 },
    title: "Keele - Mulock Parkette",
    website: "https://goo.gl/maps/BUmncvgHcHqit1VZA",
    imageUrl: "https://goo.gl/maps/GTyFsFMiq8SRUfjh7",
  },
  {
    _id: 33,
    hours: {
      monday: "8AM�4PM",
      tuesday: "8AM�4PM",
      wednesday: "8AM�4PM",
      thursday: "8AM�4PM",
      friday: "8AM�4PM",
      saturday: "8AM�4PM",
      sunday: "8AM�9.45PM",
      Hoursofoperation: "8 Hours",
    },
    description: "Outdoor",
    location: { latitude: 43.634284, longitude: -79.412094 },
    title: "Exhibition Place Basketball court ",
    website: "https://www.explace.on.ca/",
    imageUrl: "https://images.app.goo.gl/i2PNnBMop5Qb4K828",
  },
  {
    _id: 34,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "Unknown",
    },
    description: "indoor",
    location: { latitude: 43.636284, longitude: -79.415278 },
    title: "ricoh coliseum basketball Court",
    website: "https://www.coca-colacoliseum.com/",
    imageUrl: "https://images.app.goo.gl/cKo6XrqRnq9Jm6JZ7",
  },
  {
    _id: 35,
    hours: {
      monday: "8AM�11PM",
      tuesday: "8AM�11PM",
      wednesday: "8AM�11PM",
      thursday: "8AM�11PM",
      friday: "8AM�11PM",
      saturday: "8AM�11PM",
      sunday: "8AM�11PM",
      Hoursofoperation: "15 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.671612, longitude: -79.466857 },
    title: "Mulock Parkette Basketball court",
    website: "https://goo.gl/maps/BUmncvgHcHqit1VZA",
    imageUrl: "https://goo.gl/maps/GTyFsFMiq8SRUfjh7",
  },
  {
    _id: 36,
    hours: {
      monday: "9AM�12AM",
      tuesday: "4PM�12AM",
      wednesday: "4PM�12AM",
      thursday: "4PM�12AM",
      friday: "4PM�12AM",
      saturday: "7:30AM�12AM",
      sunday: "8AM�12AM",
      Hoursofoperation: "8 hours",
    },
    description: "Indoor ",
    location: { latitude: 43.637238, longitude: -79.625287 },
    title: "Z5 Courts",
    website: "http://z5courts.com/",
    imageUrl: "https://goo.gl/maps/esrsdcmvaCqp3sJD6",
  },
  {
    _id: 37,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.642229, longitude: -79.408774 },
    title: "2cyb Basketball court",
    website: "https://goo.gl/maps/o5puuXktMPXbJ83i9",
    imageUrl: "https://goo.gl/maps/WD2zACzgabvPrvQX9",
  },
  {
    _id: 38,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 hours",
    },
    description: "Outdoor",
    location: { latitude: 43.7032, longitude: -79.420302 },
    title: "Basketball court School",
    website: "https://goo.gl/maps/iQDM897UxWkh1uUR7",
    imageUrl: "https://goo.gl/maps/sd551nxvEL7Xxa9i9",
  },
  {
    _id: 39,
    hours: {
      monday: "9AM�6PM",
      tuesday: "9AM�6PM",
      wednesday: "9AM�6PM",
      thursday: "9AM�6PM",
      friday: "9AM�6PM",
      saturday: "Closed",
      sunday: "Closed",
      Hoursofoperation: "9 hours",
    },
    description: "Indoor",
    location: { latitude: 43.716937, longitude: -79.503009 },
    title: "Falstaff Community Centre",
    website: "https://goo.gl/maps/UjK81rTQNu5Lh5Uq5",
    imageUrl: "https://images.app.goo.gl/UgiczjfxfXTgErib8",
  },
  {
    _id: 40,
    hours: {
      monday: "7AM�5PM",
      tuesday: "7AM�5PM",
      wednesday: "7AM�5PM",
      thursday: "7AM�5PM",
      friday: "7AM�5PM",
      saturday: "Closed",
      sunday: "Closed",
      Hoursofoperation: "10 hours",
    },
    description: "Outdoor School ",
    location: { latitude: 43.66168, longitude: -79.472844 },
    title: "Annette Street Junior and Senior Public School",
    website: "http://www.tdsb.on.ca/findyour/schools.aspx?schno=5202",
    imageUrl: "https://goo.gl/maps/cv7RYjJ4FP7UKHts6",
  },
  {
    _id: 41,
    hours: {
      monday: "7AM�7PM",
      tuesday: "7AM�7PM",
      wednesday: "7AM�7PM",
      thursday: "7AM�7PM",
      friday: "7AM�7PM",
      saturday: "7AM�7PM",
      sunday: "7AM�7PM",
      Hoursofoperation: "12 hours",
    },
    description: "Indoor",
    location: { latitude: 43.694601, longitude: -79.449757 },
    title: "St. Hildas Senior Care Community",
    website: "http://www.sthildastowers.com/",
    imageUrl: "https://goo.gl/maps/rXKQNKbfoN6z6aa5A",
  },
  {
    _id: 42,
    hours: {
      monday: "Hours may Differ",
      tuesday: "Hours may Differ",
      wednesday: "Hours may Differ",
      thursday: "Hours may Differ",
      friday: "Hours may Differ",
      saturday: "Hours may Differ",
      sunday: "Hours may Differ",
      Hoursofoperation: "Unknown",
    },
    description: "Public park",
    location: { latitude: 43.643781, longitude: -79.378235 },
    title: "Scotiabank Arena ",
    website: "https://www.scotiabankarena.com/",
    imageUrl: "https://images.app.goo.gl/eZ9vkX41beipgPgRA",
  },
  {
    _id: 43,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.657089, longitude: -79.431651 },
    title: "Dufferin Grove Park",
    website: "https://goo.gl/maps/TVAcqqX1upjRWpEk6",
    imageUrl: "https://images.app.goo.gl/pjgiMD2ZbVmnHwKk7",
  },
  {
    _id: 44,
    hours: {
      monday: "Hours may differ",
      tuesday: "Hours may differ",
      wednesday: "Hours may differ",
      thursday: "Hours may differ",
      friday: "Hours may differ",
      saturday: "Hours may differ",
      sunday: "Hours may differ",
      Hoursofoperation: "Unknown",
    },
    description: "Outdoor school",
    location: { latitude: 43.656039, longitude: -79.47793 },
    title: "Runnymede Junior and Senior Public School",
    website: "https://schoolweb.tdsb.on.ca/runnymede",
    imageUrl: "https://goo.gl/maps/MbXjgPyrAfPPv4VEA",
  },
  {
    _id: 45,
    hours: {
      monday: "9AM�5PM",
      tuesday: "9AM�5PM",
      wednesday: "9AM�5PM",
      thursday: "9AM�5PM",
      friday: "19AM�5PM",
      saturday: "closed",
      sunday: "closed",
      Hoursofoperation: "8 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 24.548876, longitude: -81.806424 },
    title: "Key West Basket ball court",
    website: "https://www.courtsoftheworld.com/united-states/key-west-fl/",
    imageUrl: "https://images.app.goo.gl/QReaGg5WrgGmbsbH7",
  },
  {
    _id: 46,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor public",
    location: { latitude: 43.715888, longitude: -79.493425 },
    title: "Maple Leaf Park Basketball Court",
    website: "https://goo.gl/maps/sdqr9W1GNwHsCKPz6",
    imageUrl: "https://goo.gl/maps/fEEjgXBqEyExAK1a9",
  },
  {
    _id: 47,
    hours: {
      monday: "9AM�5PM",
      tuesday: "9AM�5PM",
      wednesday: "9AM�5PM",
      thursday: "9AM�5PM",
      friday: "9AM�5PM",
      saturday: "closed",
      sunday: "closed",
      Hoursofoperation: "8 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.709724, longitude: -79.411638 },
    title: "St Clements Ave basketball court",
    website: "https://www.stclementschool.org/about/facilities",
    imageUrl: "https://images.app.goo.gl/JCBXrKN7TT9ujGk27",
  },
  {
    _id: 48,
    hours: {
      monday: "Hours may differ",
      tuesday: "Hours may differ",
      wednesday: "Hours may differ",
      thursday: "Hours may differ",
      friday: "Hours may differ",
      saturday: "Hours may differ",
      sunday: "Hours may differ",
      Hoursofoperation: "Unknown",
    },
    description: "Outdoor public",
    location: { latitude: 43.703205, longitude: -79.4204 },
    title: "Basketball court Chaplin crescent",
    website:
      "https://www.northernbeaches.nsw.gov.au/things-to-do/recreation-area/john-fisher-park-basketball-court",
    imageUrl: "https://images.app.goo.gl/aVx8ngBVpRpbJZyt8",
  },
  {
    _id: 49,
    hours: {
      monday: "8AM�11PM",
      tuesday: "8AM�11PM",
      wednesday: "8AM�11PM",
      thursday: "8AM�11PM",
      friday: "8AM�11PM",
      saturday: "8AM�11PM",
      sunday: "8AM�11PM",
      Hoursofoperation: "15 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.659382, longitude: -79.359035 },
    title: "Regent park court basketball court",
    website: "https://images.app.goo.gl/JsQEnHdVpnazfUmeA",
    imageUrl: "https://images.app.goo.gl/JsQEnHdVpnazfUmeA",
  },
  {
    _id: 50,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.795048, longitude: -79.398024 },
    title: "Conacher Park Basketball Court",
    website: "https://www.explace.on.ca/",
    imageUrl: "https://images.app.goo.gl/i2PNnBMop5Qb4K828",
  },
  {
    _id: 51,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.665523, longitude: -79.433296 },
    title: "Lakeshore Village Basketball Court",
    website: "https://goo.gl/maps/VAvSQP44eksrFQwH6",
    imageUrl: "https://goo.gl/maps/xtW6pKtweMhnicFr6",
  },
  {
    _id: 52,
    hours: {
      monday: "Open 24 hours",
      tuesday: "Open 24 hours",
      wednesday: "Open 24 hours",
      thursday: "Open 24 hours",
      friday: "Open 24 hours",
      saturday: "Open 24 hours",
      sunday: "Open 24 hours",
      Hoursofoperation: "24 Hours",
    },
    description: "Outdoor Public",
    location: { latitude: 43.61502, longitude: -79.508634 },
    title: "Ourland Outdoor Basketball Court",
    website: "https://goo.gl/maps/wuRmh18yn3WK1SDfA",
    imageUrl: "https://goo.gl/maps/JErW3qXfCAsK1JVk8",
  },
  {
    _id: 53,
    hours: {
      monday: "Hours or services may differ",
      tuesday: "Hours or services may differ",
      wednesday: "Hours or services may differ",
      thursday: "Hours or services may differ",
      friday: "Hours or services may differ",
      saturday: "Hours or services may differ",
      sunday: "Hours or services may differ",
      Hoursofoperation: "Unknown",
    },
    description: "Outdoor",
    location: { latitude: 43.65921, longitude: -79.353029 },
    title: "Don Mount Court ",
    website: "https://images.app.goo.gl/Q7AhvWszqxxjJfeA8",
    imageUrl: "https://images.app.goo.gl/Q7AhvWszqxxjJfeA8",
  },
];
export default LeaguesMap;
