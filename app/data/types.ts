export type PlaceHours = {
  days: string;
  time: string;
};

export type PlacePhoto = {
  src: string;
  alt: string;
};

export type MenuCategory = {
  slug: string;
  title: string; // "Закуски", "Коктейли", "Десерты"
  items: MenuItem[];
};

export type MenuItem = {
  name: string;
  description?: string;
  price: number; // в рублях, без копеек
  weight?: string; // "250 г", "0.5 л"
};

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Place = {
  slug: string;
  title: string;
  type: string;
  kitchen: string;
  price: string;
  address: string;
  rating: number;
  reviewsCount: number;
  photos: PlacePhoto[];
  description: string;
  hours: PlaceHours[];
  menu: MenuCategory[];
  coordinates: Coordinates;
  features: string[];
  phone: string;
  website: string;
};
