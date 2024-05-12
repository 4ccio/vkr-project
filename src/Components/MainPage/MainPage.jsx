import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";

import InvestCard from "./InvestCard";
import coursesData from "../../Data/CoursesData";

import mainImage from "../../images/mainInvest.svg";
import stock from "../../images/stockmarketMain.svg";
import crypto from "../../images/cryptoMain.svg";
import realEstate from "../../images/realEstateMain.svg";

import SwipeableViews from "react-swipeable-views-react-18-fix";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";

const styles = {
  slide: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};

function slideRenderer(params) {
  const { index, key } = params;

  switch (mod(index, 3)) {
    case 0:
      return (
        <div key={key} style={styles.slide}>
          <Box width={"300px"}>
            <Link to={`/stock-market`}>
              <InvestCard
                title={`${coursesData[0].title}`}
                image={stock}
              ></InvestCard>
            </Link>
          </Box>
        </div>
      );

    case 1:
      return (
        <div key={key} style={styles.slide}>
          <Box width={"300px"}>
            <Link to={"/crypto"}>
              <InvestCard
                title={`${coursesData[1].title}`}
                image={crypto}
              ></InvestCard>
            </Link>
          </Box>
        </div>
      );

    case 2:
      return (
        <div key={key} style={styles.slide}>
          <Box width={"300px"}>
            <Link to={"/real-estate"}>
              <InvestCard
                title={"Недвижимость"}
                image={realEstate}
              ></InvestCard>
            </Link>
          </Box>
        </div>
      );

    default:
      return null;
  }
}

const MainPage = () => {
  const VirtualizeSwipeableViews = virtualize(SwipeableViews);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
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
            <Box
              component={Link}
              to={"/"}
              sx={{
                color: "inherit",
              }}
            >
              <Typography variant="h1">Investika</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component={"section"} className="introduction">
        <Container>
          <Grid container alignItems={"center"}>
            <Grid xs={12} md={8}>
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box marginBottom={2}>
                  <Typography variant="h2" fontWeight={300}>
                    Инвестиции для начинающих
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1">
                    Погружаемся в основы инвестиций. Быстро и без воды изучаем,
                    какие активы существуют и могут приносить прибыль.
                    Разбираемся в целях инвестирования и возможных рисках.
                  </Typography>
                </Box>
              </Container>
            </Grid>
            <Grid xs={12} md={4}>
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
                  src={mainImage}
                  sx={{
                    height: "auto",
                    maxHeight: 350,
                    objectFit: "contain",
                    maxWidth: "100%",
                    width: { xs: 280, sm: "auto" },
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={"section"} className="investCards">
        <Container>
          <Typography variant="h3" mb={3} sx={{ textAlign: { xs: "center" } }}>
            Сферы инвестирования
          </Typography>
          <Box>
            {isSmallScreen ? (
              <Box>
                <VirtualizeSwipeableViews
                  slideRenderer={slideRenderer}
                  style={{
                    padding: "0 35px",
                  }}
                  slideStyle={{
                    padding: "0 10px",
                  }}
                />
              </Box>
            ) : (
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent={{ xs: "center", md: "space-between" }}
                alignItems={{ xs: "center", md: "flex-start" }}
                useFlexGap
                gap={3}
              >
                <Box width={"300px"}>
                  <Link to={`/stock-market`}>
                    <InvestCard
                      title={`${coursesData[0].title}`}
                      image={stock}
                    ></InvestCard>
                  </Link>
                </Box>
                <Box width={"300px"}>
                  <Link to={"/crypto"}>
                    <InvestCard
                      title={`${coursesData[1].title}`}
                      image={crypto}
                    ></InvestCard>
                  </Link>
                </Box>
                <Box width={"300px"}>
                  <Link to={"/real-estate"}>
                    <InvestCard
                      title={"Недвижимость"}
                      image={realEstate}
                    ></InvestCard>
                  </Link>
                </Box>
              </Stack>
            )}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default MainPage;
