// import React, { useState } from "react";
// import AlertDialogSlide from "./AlertDialogSlide";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import InvestCard from "./InvestCard";
import mainImage from "./images/maninvest.svg";
import stock from "./images/stockmarket.svg";
import crypto from "./images/crypto.svg";
import realEstate from "./images/realestate.jpg";
import { Link } from "react-router-dom";
// import { Stack } from "react-bootstrap";
// import { Carousel } from "react-bootstrap";
import coursesData from "./Data/CoursesData";

const MainPage = () => {
  // const [showAlert, setShowAlert] = useState(true);

  // const handleCloseAlert = () => {
  //   setShowAlert(false);
  // };
  return (
    <div>
      {/* <AlertDialogSlide open={showAlert} onClose={handleCloseAlert} /> */}
      {/* {showAlert && (
        <Backdrop
          sx={{
            backdropFilter: "blur(5px)",
          }}
          open={showAlert}
          onClick={handleCloseAlert}
        ></Backdrop>
      )} */}
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
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            useFlexGap
            gap={3}
          >
            <Box width={"300px"}>
              <Link to={`/${coursesData[0].id}`}>
                <InvestCard
                  title={`${coursesData[0].title}`}
                  image={stock}
                ></InvestCard>
              </Link>
            </Box>
            <Box width={"300px"}>
              <InvestCard title={"Криптовалюта"} image={crypto}></InvestCard>
            </Box>
            <Box width={"300px"}>
              <InvestCard
                title={"Недвижимость"}
                image={realEstate}
              ></InvestCard>
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default MainPage;
