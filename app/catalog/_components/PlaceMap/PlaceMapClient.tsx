// PlaceMapClient.tsx
"use client";

import dynamic from "next/dynamic";

const PlaceMap = dynamic(() => import("./PlaceMap"), {
  ssr: false,
  loading: () => <div>Загрузка карты…</div>,
});

const YMapComponentsProvider = dynamic(
  () => import("ymap3-components").then((mod) => mod.YMapComponentsProvider),
  { ssr: false },
);

type PlaceMapClientProps = {
  lat: number;
  lng: number;
};

export default function PlaceMapClient({ lat, lng }: PlaceMapClientProps) {
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY!;
  return (
    <YMapComponentsProvider apiKey={apiKey}>
      <PlaceMap lat={lat} lng={lng} />
    </YMapComponentsProvider>
  );
}
