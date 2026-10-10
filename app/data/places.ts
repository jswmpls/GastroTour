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
    coordinates: { lat: 59.930928, lng: 30.3235 },
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
      {
        src: "/places/broken-hearts-bar/image1.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
      {
        src: "/places/broken-hearts-bar/image2.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
      {
        src: "/places/broken-hearts-bar/image3.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
      {
        src: "/places/broken-hearts-bar/image4.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
      {
        src: "/places/broken-hearts-bar/image5.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
      {
        src: "/places/broken-hearts-bar/image6.png",
        alt: "Интерьер бара Разбитых Сердец",
      },
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
    coordinates: { lat: 59.931672, lng: 30.328791 },
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
        src: "/places/old-man-khinkalych/old-man-khinkalych.png",
        alt: "Интерьер ресторана Старик Хинкалыч",
      },
      {
        src: "/places/old-man-khinkalych/image1.png",
        alt: "Интерьер бара Неон",
      },
      {
        src: "/places/old-man-khinkalych/image2.png",
        alt: "Интерьер old-man-khinkalych Неон",
      },
      {
        src: "/places/old-man-khinkalych/image3.png",
        alt: "Интерьер бара Неон",
      },
      {
        src: "/places/old-man-khinkalych/image4.png",
        alt: "Интерьер бара Неон",
      },
      {
        src: "/places/old-man-khinkalych/image5.png",
        alt: "Интерьер бара Неон",
      },
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
    coordinates: { lat: 59.933324, lng: 30.315392 },
    features: ["Wi-Fi", "Веранда", "Можно с детьми", "Бронирование"],
    phone: "+7 (812) 000-00-03",
    website: "https://khinkalych.example",
  },

  {
    slug: "v-kvartire",
    title: "В квартире",
    type: "Кофейня, кафе, бильярдный клуб",
    kitchen: "Европейская",
    price: "300–500 ₽",
    address: "наб. Обводного канала, 121, Санкт-Петербург",
    rating: 4.9,
    reviewsCount: 205,
    photos: [
      {
        src: "/places/v-kvartire/v-kvartire.png",
        alt: "Интерьер кофейни В квартире",
      },
      {
        src: "/places/v-kvartire/image1.png",
        alt: "Бильярдный зал в кофейне В квартире",
      },
      {
        src: "/places/v-kvartire/image2.png",
        alt: "Атмосфера кооператива Вираж",
      },
      { src: "/places/v-kvartire/image3.png", alt: "Кофейная стойка" },
      {
        src: "/places/v-kvartire/image4.png",
        alt: "Бильярдный зал в кофейне В квартире",
      },
    ],
    description:
      "Атмосферное кафе-кооператив «Вираж» в историческом здании на Обводном канале. Интерьер оформлен в стиле европейских шестидесятых: на стенах — велосипеды и гоночная экипировка. Здесь можно выпить кофе, пообедать, починить велосипед, посмотреть кино и сыграть партию в бильярд. Первая игра в бильярд — бесплатно при заказе от 350 ₽.",
    hours: [
      { days: "Пн–Чт", time: "12:00–21:00" },
      { days: "Пт–Сб", time: "12:00–21:00" },
      { days: "Вс", time: "12:00–21:00" },
    ],
    menu: [
      {
        slug: "coffee",
        title: "Кофе",
        items: [
          { name: "Эспрессо", price: 100, weight: "30 мл" },
          { name: "Капучино", price: 150, weight: "200 мл" },
          { name: "Латте", price: 180, weight: "250 мл" },
        ],
      },
      {
        slug: "snacks",
        title: "Закуски",
        items: [
          { name: "Круассан с ветчиной и сыром", price: 250, weight: "120 г" },
          { name: "Салат дня", price: 300, weight: "200 г" },
        ],
      },
    ],
    coordinates: { lat: 59.9107, lng: 30.3246 },
    features: [
      "Бильярд",
      "Кинопоказы",
      "Веломasterская",
      "Мерч",
      "Можно с компанией",
    ],
    phone: "+7 (961) 810-32-48",
    website: "https://instagram.com/v.kvartire",
  },

  {
    slug: "ossi",
    title: "Осси",
    type: "Бар, коворкинг, кафе",
    kitchen: "Европейская",
    price: "400–800 ₽",
    address: "ул. Радищева, 25, Санкт-Петербург",
    rating: 4.9,
    reviewsCount: 587,
    photos: [
      { src: "/places/ossi/ossi.png", alt: "Интерьер бара Осси" },
      { src: "/places/ossi/image1.png", alt: "Уютные диванчики в баре Осси" },
      { src: "/places/ossi/image2.png", alt: "Барная стойка Осси" },
      { src: "/places/ossi/image3.png", alt: "Атмосфера коворкинга" },
      { src: "/places/ossi/image4.png", alt: "Атмосфера коворкинга" },
    ],
    description:
      "Городской бар и арт-пространство в стиле последних лет ГДР с домашней атмосферой. Три комнаты, уютные кресла, клетчатые подушки и миниатюрные торшеры из 80-х. В меню — крафтовое пиво, сидры, настойки, лимонады и лёгкие закуски. Здесь проводят стендапы, поэтические вечера, кинопоказы и можно поиграть в настолки. Отличное место для работы и встреч с друзьями.",
    hours: [
      { days: "Пн–Чт", time: "16:00–01:00" },
      { days: "Пт–Сб", time: "16:00–04:00" },
      { days: "Вс", time: "16:00–01:00" },
    ],
    menu: [
      {
        slug: "beer",
        title: "Пиво и сидры",
        items: [
          { name: "Крафтовое пиво", price: 400, weight: "500 мл" },
          { name: "Сидр", price: 350, weight: "400 мл" },
        ],
      },
      {
        slug: "snacks",
        title: "Закуски",
        items: [
          { name: "Сэндвич с курицей и руколой", price: 250, weight: "200 г" },
          { name: "Сырная тарелка", price: 300, weight: "180 г" },
          { name: "Мясная тарелка", price: 300, weight: "180 г" },
          { name: "Острый чечил", price: 220, weight: "100 г" },
        ],
      },
    ],
    coordinates: { lat: 59.9384, lng: 30.3637 },
    features: [
      "Wi-Fi",
      "Коворкинг",
      "Настольные игры",
      "Стендап",
      "Кинопоказы",
      "Оплата картой",
    ],
    phone: "+7 (812) 579-58-20",
    website: "https://t.me/ossi_bar_spb",
  },

  {
    slug: "zvonok",
    title: "Звонок",
    type: "Бар",
    kitchen: "Русская",
    price: "300–600 ₽",
    address: "ул. Некрасова, 34, Санкт-Петербург",
    rating: 5.0,
    reviewsCount: 412,
    photos: [
      { src: "/places/zvonok/zvonok.png", alt: "Интерьер рюмочной Звонок" },
      { src: "/places/zvonok/image1.png", alt: "Барная стойка Звонок" },
      {
        src: "/places/zvonok/image2.png",
        alt: "Выставка современного искусства в баре",
      },
      { src: "/places/zvonok/image3.png", alt: "Атмосфера русской гостиной" },
      { src: "/places/zvonok/image4.png", alt: "Атмосфера русской гостиной" },
    ],
    description:
      "Рюмочная в историческом центре Петербурга, которая смело совмещает антураж классической русской гостиной с выставками современного искусства. Меню лаконичное: пиво, вино, компот и кофе, а также салаты и лёгкие закуски. Вода бесплатная. Отличное место для камерных встреч и знакомства с местной арт-сценой.",
    hours: [
      { days: "Пн–Чт", time: "16:00–02:00" },
      { days: "Пт–Сб", time: "16:00–04:00" },
      { days: "Вс", time: "16:00–02:00" },
    ],
    menu: [
      {
        slug: "drinks",
        title: "Напитки",
        items: [
          { name: "Пиво (токсовское)", price: 300, weight: "500 мл" },
          { name: "Вино", price: 250, weight: "150 мл" },
          { name: "Компот", price: 100, weight: "300 мл" },
          { name: "Кофе", price: 100, weight: "200 мл" },
        ],
      },
      {
        slug: "snacks",
        title: "Закуски",
        items: [
          { name: "Салат из печени трески", price: 300, weight: "180 г" },
        ],
      },
    ],
    coordinates: { lat: 59.938937, lng: 30.358987 },
    features: [
      "Выставки",
      "Бесплатная вода",
      "Оплата картой",
      "Камерная атмосфера",
    ],
    phone: "+7 (905) 225-05-50",
    website: "https://vk.com/zvonok_bar",
  },

  {
    slug: "poltory-komnaty",
    title: "Полторы комнаты",
    type: "Бар",
    kitchen: "Европейская, авторская",
    price: "700–1500 ₽",
    address: "ул. Маяковского, 34/4, Санкт-Петербург",
    rating: 5.0,
    reviewsCount: 4261,
    photos: [
      {
        src: "/places/poltory-komnaty/poltory-komnaty.png",
        alt: "Интерьер бара Полторы комнаты",
      },
      { src: "/places/poltory-komnaty/image1.png", alt: "Коктейльный зал" },
      {
        src: "/places/poltory-komnaty/image2.png",
        alt: "Книжные полки в баре",
      },
      {
        src: "/places/poltory-komnaty/image3.png",
        alt: "Атмосфера бара Полторы комнаты",
      },
      {
        src: "/places/poltory-komnaty/image4.png",
        alt: "Атмосфера бара Полторы комнаты",
      },
    ],
    description:
      "Коктейльный бар с изящным алкоголем и закусками, расположенный в музее Иосифа Бродского «Полторы комнаты». Барная стойка установлена прямо среди книжных полок. В меню — авторские коктейли, европейская и смешанная кухня. Есть экспериментальное меню «Мегаполис», доступное по предварительному бронированию. Музыка: электронная, рок, рок-н-ролл. Wi-Fi, кофе с собой, можно с животными.",
    hours: [
      { days: "Пн–Чт", time: "18:00–02:00" },
      { days: "Пт–Сб", time: "18:00–03:00" },
      { days: "Вс", time: "18:00–02:00" },
    ],
    menu: [
      {
        slug: "cocktails",
        title: "Коктейли",
        items: [
          {
            name: "Анпакинг",
            description: "Джин, кедровая скорлупа, микс вермутов",
            price: 790,
            weight: "200 мл",
          },
          {
            name: "Лотерея",
            description: "Виски-сауэр на 12-летнем виски с морошкой",
            price: 850,
            weight: "180 мл",
          },
          {
            name: "Ленинградский",
            description: "Смесь вермутов, херес, морошковый рассол",
            price: 790,
            weight: "200 мл",
          },
          {
            name: "Самаркандский",
            description: "Орехово-сухофруктовый твист на «Манхэттен»",
            price: 790,
            weight: "200 мл",
          },
        ],
      },
      {
        slug: "snacks",
        title: "Закуски",
        items: [
          {
            name: "Котлеты с картофельным пюре в кастрюле",
            price: 650,
            weight: "350 г",
          },
          { name: "Печень по-венециански", price: 590, weight: "220 г" },
          { name: "Форшмак", price: 450, weight: "180 г" },
          { name: "Пельмени", price: 550, weight: "250 г" },
        ],
      },
    ],
    coordinates: { lat: 59.9379196, lng: 30.3551186 },
    features: [
      "Wi-Fi",
      "Кофе с собой",
      "Можно с животными",
      "Бронирование",
      "Оплата картой",
      "Подарочный сертификат",
      "Музыка: электронная, рок, рок-н-ролл",
    ],
    phone: "+7 (921) 941-82-07",
    website: "https://perfectbarsteam.ru",
  },
];

export function getPlace(slug: string): Place | undefined {
  return places.find((place) => place.slug === slug);
}
