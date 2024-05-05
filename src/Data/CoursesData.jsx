import stockIntro from "../images/stock3.svg";
import stockIcon from "../images/stock_v2.svg";
import bondsIcon from "../images/bonds.svg";
import etfIcon from "../images/Frame.svg";

import stockCards from "./StockMarket/StocksCards";
import bondCards from "./StockMarket/BondsCards";
import etfCards from "./StockMarket/EtfCards";

import tinkoff from "../images/tinkof.png";
import sber from "../images/sber13.png";
import alfa from "../images/alfa.png";
import handshake from "../images/handshake.png";

const coursesData = [
  {
    id: "stock-market",
    title: "Фондовый рынок",
    description: [
      `Это место, где происходит обмен активами, аналогично
        торговым площадкам. Здесь встречаются спрос и предложение
        на акции, облигации, валюты и другие ценные бумаги.`,
    ],
    imageIntro: stockIntro,
    assets: [
      {
        id: "stocks",
        name: "Акции",
        image: stockIcon,
        details:
          "Акция — это доля в компании, приобретая которую инвестор становится совладельцем бизнеса и может разделить его успехи и неудачи.",
        cards: stockCards,
      },
      {
        id: "bonds",
        name: "Облигации",
        image: bondsIcon,
        details:
          "Облигация — долговая расписка, которую выпускает компания или государство. Приобретая ее, инвестор получает в будущем сумму долга плюс проценты.",
        cards: bondCards,
      },
      {
        id: "etf",
        name: "Биржевые фонды",
        image: etfIcon,
        details:
          "Биржевые фонды — готовые портфели разных ценных бумаг или других активов. Инвесторы могут купить доли в таких портфелях — паи фонда.",
        cards: etfCards,
      },
    ],
    partners: [
      {
        title: "Тинькоф Инвестиции",
        image: tinkoff,
        link: "https://www.tinkoff.ru/invest/",
      },
      {
        title: "Сбер Инвестиции",
        image: sber,
        link: "http://www.sberbank.ru/ru/person/investments/broker_service",
      },
      {
        title: "Альфа-Инвестиции",
        image: alfa,
        link: "https://alfabank.ru/make-money/investments/brokerskij-schyot/",
      },
      {
        title: "Ваша реклама",
        image: handshake,
        link: "https://github.com/4ccio",
      },
    ],
  },
];

export default coursesData;
