import { Box, Typography, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import stock from "./images/stock3.svg";
import stockIcon from "./images/stock_v2.svg";
import bondsIcon from "./images/bonds.svg";
import etfIcon from "./images/Frame.svg";

import AssetCard from "./AssetCard";
import CourseIntro from "./CourseIntro";

const CoursePage = () => {
  return (
    <div>
      <Box component={"header"}>
        <Container
          sx={{
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1">Investika</Typography>
          </Box>
        </Container>
      </Box>

      <CourseIntro
        title={"Фондовый рынок"}
        description={`Это место, где происходит обмен активами, аналогично
                      торговым площадкам. Здесь встречаются спрос и предложение
                      на акции, облигации, валюты и другие ценные бумаги. ${(
                        <br />
                      )}
                      Чтобы начать инвестировать, необходимо обратиться к
                      брокеру, который будет посредником между инвестором и
                      компаниями, чьи акции будут покупаться или продаваться.`}
        image={stock}
      ></CourseIntro>

      <Box component={"section"} className="course-elements">
        <Container>
          <Grid container justifyContent="center">
            <Grid
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={{ xs: "center", md: "space-between" }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  gutterBottom={true}
                  textAlign={"center"}
                >
                  Основные активы
                </Typography>
                <AssetCard
                  assetName={"Акции"}
                  assetImage={stockIcon}
                  assetDetails={
                    "Акция — это доля в компании, приобретая которую инвестор становится совладельцем бизнеса и может разделить его успехи и неудачи."
                  }
                  assetButtonTitles={[
                    "Что такое акции",
                    "Как заработать на акциях",
                    "Почему акции дорожают",
                    "Почему акции дешевеют",
                    "Рынок российских акций",
                  ]}
                ></AssetCard>
                <AssetCard
                  assetName={"Облигации"}
                  assetImage={bondsIcon}
                  assetDetails={
                    "Облигация — долговая расписка, которую выпускает компания или государство. Приобретая ее, инвестор получает в будущем сумму долга плюс проценты."
                  }
                  assetButtonTitles={[
                    "Что такое облигации",
                    "Как устроены облигации",
                    "Какие бывают облигации",
                    "Почему меняется цена облигаций",
                    "Как и зачем покупать облигации",
                  ]}
                ></AssetCard>
                <AssetCard
                  assetName={"Биржевые фонды"}
                  assetImage={etfIcon}
                  assetDetails={
                    "Биржевые фонды — готовые портфели разных ценных бумаг или других активов. Инвесторы могут купить доли в таких портфелях — паи фонда."
                  }
                  assetButtonTitles={[
                    "Зачем нужны биржевые фонды",
                    "Инвестируем в фонды акций",
                    "В какие еще фонды можно инвестировать",
                    "Как инвестору выбрать фонд",
                  ]}
                ></AssetCard>
              </Stack>
            </Grid>
            <Grid xs={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom={true}
                  textAlign={"center"}
                >
                  Где инвестировать?
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default CoursePage;
