"use client";

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
} from "ymap3-components";

type PlaceMapProps = {
  lat: number;
  lng: number;
};

export default function PlaceMap({ lat, lng }: PlaceMapProps) {
  return (
    <YMap location={{ center: [lng, lat], zoom: 14 }}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapDefaultMarker coordinates={[lng, lat]} draggable={true} />
    </YMap>
  );
}
