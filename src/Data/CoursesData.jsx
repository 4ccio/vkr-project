import stockIntro from "../images/stock3.svg";
import cryptoIntro from "../images/crypto1.svg";

import stockIcon from "../images/stock_v2.svg";
import bondsIcon from "../images/bonds.svg";
import etfIcon from "../images/Frame.svg";

import whatIsCrypto from "../images/cryptoFirst.jpg";
import blockchain from "../images/blockchain.jpg";
import howCryptoMade from "../images/howcryptomade.jpg";
import significantCrypto from "../images/importantcrypto.jpg";

import stockCards from "./StockMarket/StocksCards";
import bondCards from "./StockMarket/BondsCards";
import etfCards from "./StockMarket/EtfCards";
import cryptoCards from "./Crypto/CryptoCards";

import tinkoff from "../images/tinkof.png";
import sber from "../images/sber13.png";
import alfa from "../images/alfa.png";
import handshake from "../images/handshake.png";
import bybit from "../images/bybit.png";
import oxk from "../images/OKX.png";
import gateio from "../images/gateio.png";

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
  {
    id: "crypto",
    title: "Криптовалюта",
    description: [
      `Криптовалюты стали одной из наиболее обсуждаемых тем в последние годы. Мы все видели, как биткоин, начиная с непонятной концепции, в течение недолгого времени превратился в ценный финансовый актив, который привлекает внимание инвесторов, трейдеров, специалистов в области информационных технологий и бизнесменов`,
    ],
    imageIntro: cryptoIntro,
    assets: [
      {
        id: "what_is_crypto",
        name: "Что такое криптовалюта",
        image: whatIsCrypto,
        cards: cryptoCards,
      },
      {
        id: "blockchain",
        name: "Что такое блокчейн",
        image: blockchain,
        cards: cryptoCards,
      },
      {
        id: "how_crypto_made",
        name: "Как появляется криптовалюта",
        image: howCryptoMade,
        cards: cryptoCards,
      },
      {
        id: "significant_crypto",
        name: "Значимые криптовалюты",
        image: significantCrypto,
        cards: cryptoCards,
      },
    ],
    partners: [
      {
        title: "Bybit",
        image: bybit,
        link: "https://www.bybit.com/ru-RU",
      },
      {
        title: "OKX",
        image: oxk,
        link: "http://www.sberbank.ru/ru/person/investments/broker_service",
      },
      {
        title: "Gate.io",
        image: gateio,
        link: "https://www.gate.io/ru",
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
