export type Place = {
  id: string;
  title: string;
  type: string;
  kitchen: string;
  price: string;
  address: string;
  rating: number;
  reviewsCount: number;
  image: string;
  imageAlt: string;
};

export const places: Place[] = [
  {
    id: "neon",
    title: "Неон",
    type: "Бар",
    kitchen: "Европейская",
    price: "1000–1500 ₽",
    address: "Банковский пер., 3, Санкт-Петербург",
    rating: 5,
    reviewsCount: 18818,
    image: "/neon.png",
    imageAlt: "Интерьер бара Витя в Санкт-Петербурге",
  },
  {
    id: "broken-hearts-bar",
    title: "Бар Разбитых Сердец",
    type: "Бар",
    kitchen: "Международная",
    price: "500–800 ₽",
    address: "наб. канала Грибоедова, 30-32Ч, Санкт-Петербург",
    rating: 5.0,
    reviewsCount: 0,
    image: "/broken-hearts-bar.png",
    imageAlt: "Интерьер бара Разбитых Сердец в Санкт-Петербурге",
  },
  {
    id: "old-man-khinkalych",
    title: "Старик Хинкалыч",
    type: "Ресторан",
    kitchen: "Грузинская",
    price: "700–1000 ₽",
    address: "наб. реки Мойки, 71, Санкт-Петербург",
    rating: 5.0,
    reviewsCount: 2868,
    image: "/old-man-khinkalych.png",
    imageAlt: "Интерьер ресторана Старик Хинкалыч в Санкт-Петербурге",
  },
];

export function getPlace(id: string): Place | undefined {
  return places.find((place) => place.id === id);
}
