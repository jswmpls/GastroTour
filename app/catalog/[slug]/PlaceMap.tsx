"use client";

import styles from "./PlaceMap.module.scss";

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapComponentsProvider,
} from "ymap3-components";

type PlaceMapProps = {
  lat: number;
  lng: number;
};

export default function PlaceMap({ lat, lng }: PlaceMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error("NEXT_PUBLIC_YANDEX_MAPS_API_KEY is not defined");
  }

  return (
    <YMapComponentsProvider apiKey={apiKey}>
      <YMap location={{ center: [lng, lat], zoom: 14 }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker coordinates={[lng, lat]} draggable={true} />
      </YMap>
    </YMapComponentsProvider>
  );
}
