"use client";

import dynamic from "next/dynamic";

const PlaceMap = dynamic(() => import("./PlaceMap"), {
  ssr: false,
  loading: () => <div>Загрузка карты…</div>,
});

type PlaceMapClientProps = {
  lat: number;
  lng: number;
};

export default function PlaceMapClient({ lat, lng }: PlaceMapClientProps) {
  return <PlaceMap lat={lat} lng={lng} />;
}
