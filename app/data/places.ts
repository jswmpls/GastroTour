import type { Place } from "./types";

export const places: Place[] = [
  {
    slug: "neon",
    title: "Неон",
    type: "Бар",
    kitchen: "Европейская",
    price: "1000–1500 ₽",
    address: "Банковский пер., 3, Санкт-Петербург",
    rating: 4.8,
    reviewsCount: 18818,
    photos: [
      { src: "/places/neon/neon.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image1.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image2.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image3.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image4.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image5.png", alt: "Интерьер бара Неон" },
    ],
    description:
      "Один из самых узнаваемых баров Петербурга — и, пожалуй, самый громкий. Неон светится в буквальном смысле: стены, вывески, отражения в бокалах. Здесь шумно, людно и всегда есть куда сесть. Кухня европейская без лишних сложностей — тартары, паста, бургеры, — но идут сюда в первую очередь за атмосферой и коктейльной картой.",
    hours: [
      { days: "Пн–Чт", time: "18:00–02:00" },
      { days: "Пт–Сб", time: "18:00–04:00" },
      { days: "Вс", time: "18:00–00:00" },
    ],
    menu: [
      {
        slug: "cocktails",
        title: "Коктейли",
        items: [
          {
            name: "Неоновый",
            description: "Джин, тоник, лемонграсс",
            price: 550,
            weight: "300 мл",
          },
          {
            name: "Old Fashioned",
            description: "Бурбон, ангостура, апельсин",
            price: 600,
            weight: "120 мл",
          },
          { name: "Апероль Шприц", price: 500, weight: "250 мл" },
          { name: "Безалкогольный лимонад", price: 350, weight: "400 мл" },
        ],
      },
      {
        slug: "appetizers",
        title: "Закуски",
        items: [
          {
            name: "Тартар из говядины",
            description: "С каперсами и желтком",
            price: 690,
            weight: "180 г",
          },
          {
            name: "Сырная тарелка",
            description: "5 сортов, мёд, орехи",
            price: 890,
            weight: "220 г",
          },
          { name: "Картофель фри с трюфелем", price: 450, weight: "200 г" },
        ],
      },
      {
        slug: "hotDishes",
        title: "Горячее",
        items: [
          { name: "Паста карбонара", price: 690, weight: "320 г" },
          {
            name: "Бургер с говядиной",
            description: "С чеддером и соусом барбекю",
            price: 750,
            weight: "400 г",
          },
          {
            name: "Стейк рибай",
            description: "С розмариновым маслом",
            price: 1200,
            weight: "300 г",
          },
        ],
      },
      {
        slug: "desserts",
        title: "Десерты",
        items: [
          { name: "Чизкейк", price: 450, weight: "150 г" },
          { name: "Шоколадный фондан", price: 490, weight: "180 г" },
        ],
      },
    ],
    coordinates: { lat: 59.9341, lng: 30.3148 },
    features: ["Wi-Fi", "Танцпол", "Работает до утра", "Можно с компанией"],
    phone: "+7 (812) 000-00-01",
    website: "https://neon-bar.example",
  },

  {
    slug: "broken-hearts-bar",
    title: "Бар Разбитых Сердец",
    type: "Бар",
    kitchen: "Международная",
    price: "500–800 ₽",
    address: "наб. канала Грибоедова, 30-32Ч, Санкт-Петербург",
    rating: 5.0,
    reviewsCount: 321,
    photos: [
      {
        src: "/places/broken-hearts-bar/broken-hearts-bar.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
      { src: "/places/neon/image1.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image2.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image3.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image4.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image5.png", alt: "Интерьер бара Неон" },
    ],
    description:
      "Камерный бар на набережной канала Грибоедова с говорящим названием и очень петербургским характером. Небольшой зал, приглушённый свет, винил на фоне — сюда приходят не за громкой музыкой, а за разговором. Меню интернациональное, коктейли авторские, часто с сезонными ингредиентами.",
    hours: [
      { days: "Пн–Чт", time: "16:00–01:00" },
      { days: "Пт–Сб", time: "16:00–03:00" },
      { days: "Вс", time: "16:00–23:00" },
    ],
    menu: [
      {
        slug: "cocktails",
        title: "Коктейли",
        items: [
          {
            name: "Разбитое сердце",
            description: "Авторский, с малиной и джином",
            price: 550,
            weight: "200 мл",
          },
          { name: "Negroni", price: 500, weight: "120 мл" },
          { name: "Hugo", price: 450, weight: "250 мл" },
        ],
      },
      {
        slug: "appetizers",
        title: "Закуски",
        items: [
          { name: "Брускетта с томатами", price: 350, weight: "180 г" },
          { name: "Хумус с питой", price: 400, weight: "220 г" },
          {
            name: "Спринг-роллы",
            description: "С овощами и сладким чили",
            price: 450,
            weight: "200 г",
          },
        ],
      },
      {
        slug: "mainCourses",
        title: "Основные блюда",
        items: [
          { name: "Пад Тай", price: 550, weight: "350 г" },
          {
            name: "Рамен",
            description: "С курицей и яйцом",
            price: 600,
            weight: "450 мл",
          },
          { name: "Стейк из лосося", price: 750, weight: "250 г" },
        ],
      },
    ],
    coordinates: { lat: 59.9329, lng: 30.3234 },
    features: ["Wi-Fi", "Винил", "Камерная атмосфера", "Бронирование"],
    phone: "+7 (812) 000-00-02",
    website: "https://broken-hearts.example",
  },

  {
    slug: "old-man-khinkalych",
    title: "Старик Хинкалыч",
    type: "Ресторан",
    kitchen: "Грузинская",
    price: "700–1000 ₽",
    address: "наб. реки Мойки, 71, Санкт-Петербург",
    rating: 5.0,
    reviewsCount: 2868,
    photos: [
      {
        src: "/places/old-man-khinkalych/image.png",
        alt: "Интерьер ресторана Старик Хинкалыч",
      },
      { src: "/places/neon/image1.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image2.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image3.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image4.png", alt: "Интерьер бара Неон" },
      { src: "/places/neon/image5.png", alt: "Интерьер бара Неон" },
    ],
    description:
      "Грузинский ресторан в самом центре — прямо на набережной Мойки. Здесь всё по классике: хинкали с сочным бульоном внутри, хачапури по-аджарски, хаш, чахохбили и домашнее вино. Порции щедрые, цены гуманные для локации, а интерьер тёплый и обжитой. Место популярное, столик лучше бронировать.",
    hours: [
      { days: "Пн–Чт", time: "11:00–23:00" },
      { days: "Пт–Сб", time: "11:00–00:00" },
      { days: "Вс", time: "11:00–22:00" },
    ],
    menu: [
      {
        slug: "khinkali",
        title: "Хинкали",
        items: [
          { name: "Хинкали с говядиной", price: 90, weight: "1 шт" },
          { name: "Хинкали с бараниной", price: 110, weight: "1 шт" },
          { name: "Хинкали с сыром", price: 80, weight: "1 шт" },
        ],
      },
      {
        slug: "khachapuri",
        title: "Хачапури",
        items: [
          { name: "Хачапури по-аджарски", price: 590, weight: "450 г" },
          { name: "Хачапури по-имеретински", price: 490, weight: "400 г" },
          { name: "Хачапури с мясом", price: 550, weight: "450 г" },
        ],
      },
      {
        slug: "hotDishes",
        title: "Горячее",
        items: [
          { name: "Чахохбили", price: 590, weight: "350 г" },
          { name: "Шашлык из свинины", price: 650, weight: "300 г" },
          {
            name: "Хаш",
            description: "Наваристый суп из говядины",
            price: 490,
            weight: "400 мл",
          },
        ],
      },
      {
        slug: "appetizers",
        title: "Закуски",
        items: [
          { name: "Ассорти солений", price: 350, weight: "300 г" },
          {
            name: "Пхали",
            description: "Из шпината и свёклы",
            price: 390,
            weight: "200 г",
          },
          {
            name: "Сациви",
            description: "Курица в ореховом соусе",
            price: 450,
            weight: "250 г",
          },
        ],
      },
      {
        slug: "wine",
        title: "Вино",
        items: [
          { name: "Домашнее красное", price: 300, weight: "150 мл" },
          { name: "Домашнее белое", price: 300, weight: "150 мл" },
          { name: "Киндзмараули", price: 450, weight: "150 мл" },
        ],
      },
    ],
    coordinates: { lat: 59.9311, lng: 30.3184 },
    features: ["Wi-Fi", "Веранда", "Можно с детьми", "Бронирование"],
    phone: "+7 (812) 000-00-03",
    website: "https://khinkalych.example",
  },
];

export function getPlace(slug: string): Place | undefined {
  return places.find((place) => place.slug === slug);
}
