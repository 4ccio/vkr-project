import stockIntro from "../images/stock3.svg";
import stockIcon from "../images/stock_v2.svg";
import bondsIcon from "../images/bonds.svg";
import etfIcon from "../images/Frame.svg";

import stockCards from "./StockMarket/StocksCards";

const coursesData = [
  {
    id: "stock-market",
    title: "Фондовый рынок",
    description: [
      `Это место, где происходит обмен активами, аналогично
        торговым площадкам. Здесь встречаются спрос и предложение
        на акции, облигации, валюты и другие ценные бумаги.`,
      `Чтобы начать инвестировать, необходимо обратиться к
        брокеру, который будет посредником между инвестором и
        компаниями, чьи акции будут покупаться или продаваться.`,
    ],
    imageIntro: stockIntro,
    assets: [
      {
        name: "Акции",
        image: stockIcon,
        details:
          "Акция — это доля в компании, приобретая которую инвестор становится совладельцем бизнеса и может разделить его успехи и неудачи.",
        cards: stockCards,
      },
      {
        name: "Облигации",
        image: bondsIcon,
        details:
          "Облигация — долговая расписка, которую выпускает компания или государство. Приобретая ее, инвестор получает в будущем сумму долга плюс проценты.",
        cards: stockCards,
      },
      {
        name: "Биржевые фонды",
        image: etfIcon,
        details:
          "Биржевые фонды — готовые портфели разных ценных бумаг или других активов. Инвесторы могут купить доли в таких портфелях — паи фонда.",
        cards: stockCards,
      },
    ],
  },
];

export default coursesData;
