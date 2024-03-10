import React, { useState } from "react";
import AlertDialogSlide from "./AlertDialogSlide";
import { Backdrop, Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import InvestCard from "./InvestCard";
import mainImage from "./images/maninvest.svg";
import stock from "./images/stockmarket.svg";
import crypto from "./images/crypto.svg";
import realEstate from "./images/realestate.jpg";
import { Stack } from "react-bootstrap";
// import { Carousel } from "react-bootstrap";

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
          <Grid container spacing={2} alignItems={"center"}>
            <Grid xs={12} md={8}>
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box marginBottom={2}>
                  <Typography variant="h2">Lorem, ipsum dolor.</Typography>
                </Box>
                <Box>
                  <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci iure, ducimus sint sapiente rerum distinctio,
                    assumenda autem provident repellendus excepturi nesciunt!
                    Veniam corporis in possimus recusandae commodi minus
                    assumenda est.
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
                    // width: 500,
                    objectFit: "contain",
                    maxWidth: "100%",
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component={"section"} className="investCards">
        <Container>
          <Box className="investCards-title">
            <Typography variant="h3" mb={3}>
              Сферы инвестирования
            </Typography>
            <Grid container spacing={4} justifyContent={"space-between"}>
              <Grid xs={12} md={4}>
                <InvestCard title={"Stock Market"} image={stock}></InvestCard>
              </Grid>
              <Grid xs={12} md={4}>
                <InvestCard
                  title={"Cryptocurrency"}
                  image={crypto}
                ></InvestCard>
              </Grid>
              <Grid xs={12} md={4}>
                <InvestCard
                  title={"Real Estate"}
                  image={realEstate}
                ></InvestCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default MainPage;
