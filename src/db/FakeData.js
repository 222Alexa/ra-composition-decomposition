/**Контент виджета новостей(новостная панель) */

export const newsData = [
  {
    id: 1,
    type: "block-news",
    author: "TASS",
    title: "В Петербургском зоопарке  проснулись сурки",
    icon: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1551-1563808847385-square/logo-square",
    url: "https://tass.ru/obschestvo/14203735?utm_source=yandex.ru&utm_medium=organic&utm_campaign=yandex.ru&utm_referrer=yandex.ru",
  },
  {
    id: 2,
    type: "block-news",
    author: "RG",
    title: "Архангельские лоси помешали посадить самолет",
    icon: "https://avatars.mds.yandex.net/get-ynews-logo/26056/1116-1478692904205-square/logo-square",
    url: "https://rg.ru/2022/03/31/reg-szfo/v-aeroportu-arhangelska-losi-pomeshali-samoletu-prizemlitsia.html",
  },
  {
    id: 3,
    type: "block-news",
    author: "RAMBLER",
    title: "В Германии собака получила штраф за превышение скоpости",
    icon: "https://avatars.mds.yandex.net/get-ynews-logo/33291/254125454-1478693875283-square/logo-square",
    url: "https://weekend.rambler.ru/crazy-world/48437354-v-germanii-sobaka-poluchila-shtraf-za-prevyshenie-skorosti/",
  },
  {
    id: 4,
    type: "block-news",
    author: "TASS",
    title: "С базы британских ВМС неизвестные похитили топливо ",
    icon: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1551-1563808847385-square/logo-square",
    url: "https://tass.ru/mezhdunarodnaya-panorama/14304917?utm_source=yxnews&utm_medium=desktop",
  },
  {
    id: 5,
    type: "block-news",
    author: "Life",
    title: "Индиец вернулся домой на следующий день после своих похорон",
    icon: "https://avatars.mds.yandex.net/get-ynews-logo/61287/12694-1589452473325-square/logo-square",
    url: "https://life.ru/p/1485030?utm_source=yxnews&utm_medium=desktop",
  },
  {
    id: 5,
    type: "block-news",
    author: "Life",
    title: "Египет возобновляет полеты в Москву из Каира",
    icon: "https://avatars.mds.yandex.net/get-ynews-logo/61287/12694-1589452473325-square/logo-square",
    url: "https://life.ru/p/1484976",
  },
];

/**Заголовки-ссылки навигатора по разделам новостей(верхний блок) */

export const NavNewsData = [
  { id: 11, type: "nav-news-titles", title: "Сейчас в СМИ", url: "#" },
  { id: 12, type: "nav-news-titles", title: "в Гонолулу", url: "#" },
  { id: 13, type: "nav-news-titles", title: "Рекомендуем", url: "#" },
];

/*Элементы сайдбара*/
export const teaserData = [
  {
    id: 21,
    type: "teaser",
    imageData: {
      type: "teaser-image",
      url: "https://avatars.mds.yandex.net/get-direct/5222671/O7CFC-2lO8urC6SAJBIQKg/x450",
      description: "Робот-секретарь",
    },
    title: "Робот-секретарь - идеальный помощник для социопатов!",
    text: [
      {
        description:
          "Поговорит за вас максимально вежливо и убедительно с тёщей, рекламными агентами, свидетелями третьей пятницы и военкоматом! ",
      },
    ],
    url: "#",
  },
];

/**Логотипы */
export const logoData = [
  {
    id: 111,
    type: "logo",
    imageData: {
      type: "logo-image",
      url: "https://res.cloudinary.com/teepublic/image/private/s--HqVvrzis--/t_Preview/b_rgb:262c3a,c_lpad,f_jpg,h_630,q_90,w_1200/v1552402713/production/designs/4396792_0.jpg",
      description: "",
    },

    url: "#",
  },
];

/**Баннеры */
export const bannersData = [
  {
    id: 112,
    type: "header-banner",
    imageData: {
      type: "banner",
      url: "https://creative.colorado.edu/~ioli1123/dm1/portal/index/blue.jpg",
      description: "",
    },

    url: "#",
  },
];

/**Курсы валют */

export const currencyData = [
  {
    id: 31,
    type: "currency",
    title: "USD MOEX",
    value: "63.52",
    url: "#",
  },
  {
    id: 32,
    type: "currency",
    title: "EUR MOEX",
    value: "70.86",
    url: "#",
  },
  {
    id: 33,
    type: "currency",
    title: "НЕФТЬ",
    value: "64.90",
    url: "#",
  },
];

/**Заголовки сервисов */

export const servicesTitle = [
  {
    id: 41,
    type: "services",
    title: "Видео",
    url: "#",
  },
  {
    id: 42,
    type: "services",
    title: "Картинки",
    url: "#",
  },
  {
    id: 43,
    type: "services",
    title: "Новости",
    url: "#",
  },
  {
    id: 44,
    type: "services",
    title: "Карты",
    url: "#",
  },
  {
    id: 45,
    type: "services",
    title: "Маркет",
    url: "#",
  },
  {
    id: 46,
    type: "services",
    title: "Переводчик",
    url: "#",
  },
  {
    id: 41,
    type: "services",
    title: "Эфир",
    url: "#",
  },
  {
    id: 46,
    type: "services",
    title: "Ещё",
    url: "#",
  },
];

/**Элементы формы поиска */
export const formSearchData = {
  type: "search",
  name: "search-form",
  icon: "&nbsp",
  text: "Найти",
};

/**Данные для виджетов */

export const widgetTitles = [
  {
    id: 51,
    icon: "https://yastatic.net/weather/i/icons/funky/dark/bkn_-ra_d.svg",
    type: "weather",
    title: "Погода",
    text: [{ name: "+8°", description: "Утром +5°, ночью +2°" }],
    url: "https://yandex.ru/pogoda/maps/nowcast?utm_campaign=informer&utm_content=main_informer&utm_term=nowcast_link&utm_medium=web&utm_source=home&le_Lightning=1",
  },

  {
    id: 52,
    icon: "",
    type: "map",
    title: "Карта Гонолулу",
    text: [{ name: "Расписание", description: "" }],

    url: "#",
  },
  {
    id: 53,
    icon: "https://p1.hiclipart.com/preview/187/658/408/flader-82-default-icons-for-apple-app-mac-os-x-player-dvd-blue-and-white-play-video-icon.jpg",
    type: "ether",
    title: "Эфир",
    text: [
      { name: "Управление как искусство", description: "Успех" },
      { name: "Ночь.Мир в это время", description: "earth.tv" },
      { name: "Они другие", description: "Совершенно секретно" },
    ],

    url: "#",
  },
  {
    id: 54,
    icon: "",
    type: "top",
    title: "Посещаемое",
    text: [
      { name: "Недвижимость - ", description: " о студиях" },
      { name: "Маркет - ", description: " где купить гречку" },
      { name: "Авто.ру - ", description: " ходить пешком бесплатно" },
    ],

    url: "#",
  },

  {
    id: 55,
    headerIcon:
      "https://repository-images.githubusercontent.com/188255616/f883fd00-7d86-11e9-913c-6da11b6266f0",
    icon: "",
    type: "tv-program",
    title: "Телепрограмма",
    text: [
      { time: "06.30", name: "На зарядку становись!", description: "RuTV" },
      { time: "07.00", name: "Говорим и показываем", description: "Первый" },
      { time: "08.00", name: "Письма из провинции", description: "Культура" },
    ],

    url: "№",
  },
];

/***/
