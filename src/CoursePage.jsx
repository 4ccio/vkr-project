import { Box, Typography, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import stock from "./images/stock3.svg";
import stockIcon from "./images/stock_v2.svg";
import bondsIcon from "./images/bonds.svg";
import etfIcon from "./images/Frame.svg";

import AssetCard from "./AssetCard";

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

      <Box component={"section"} className="course-intro" marginBottom={3}>
        <Container>
          <Container
            sx={{
              padding: "20px 0 20px 0",
              backgroundColor: "#dfe4e9",
              borderRadius: 5,
              // border: "2px solid black",
              boxShadow: "0px 3px 20px #A6B4C8",
            }}
          >
            <Grid container alignItems={"center"}>
              <Grid item={true} xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
                <Container
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Typography variant="h2" gutterBottom={true}>
                      Фондовый рынок
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      textAlign={"start"}
                      sx={{
                        fontSize: "1.1rem",
                      }}
                    >
                      Это место, где происходит обмен активами, аналогично
                      торговым площадкам. Здесь встречаются спрос и предложение
                      на акции, облигации, валюты и другие ценные бумаги. <br />
                      Чтобы начать инвестировать, необходимо обратиться к
                      брокеру, который будет посредником между инвестором и
                      компаниями, чьи акции будут покупаться или продаваться.
                      <br />
                      {/* Фондовый рынок можно сравнить с продуктовым рынком, где
                      множество участников торгует разнообразными активами по
                      различным ценам и качеству. На бирже можно встретить акции
                      компаний, облигации государств, инвестиционные фонды,
                      валюты и другие инструменты, каждый из которых имеет свою
                      уникальную цену, формируемую в результате взаимодействия
                      спроса и предложения. */}
                    </Typography>
                  </Box>
                </Container>
              </Grid>
              <Grid item={true} xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    alt="Image"
                    src={stock}
                    sx={{
                      height: "auto",
                      maxHeight: 300,
                      // width: 500,
                      objectFit: "contain",
                      maxWidth: "100%",
                      width: { xs: 250, sm: 300 },
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>

      <Box component={"section"} className="course-elements">
        <Container>
          <Grid
            container
            justifyContent={{ xs: "center", md: "space-between" }}
          >
            <Grid xs={12} md={6}>
              <Stack spacing={2} maxWidth={"500px"}>
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
                    "Акция — это доля в компании, приобретая которую инвестор становится совладельцем бизнеса и может разделить его успехи."
                  }
                ></AssetCard>
                <AssetCard
                  assetName={"Облигации"}
                  assetImage={bondsIcon}
                  assetDetails={
                    "Облигация — долговая расписка, которую выпускает компания или государство. Приобретая ее, инвестор получает в будущем сумму долга плюс проценты."
                  }
                ></AssetCard>
                <AssetCard
                  assetName={"Биржевые фонды"}
                  assetImage={etfIcon}
                  assetDetails={
                    "Биржевые фонды — готовые портфели разных ценных бумаг или других активов. Инвесторы могут купить доли в таких портфелях — паи фонда."
                  }
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
