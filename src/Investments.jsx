import React, { useState } from "react";
import AlertDialogSlide from "./AlertDialogSlide";
import { Backdrop, Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import mainImage from "./images/maninvest.svg";
import stock from "./images/stockmarket.svg";
import { Stack } from "react-bootstrap";
// import { Carousel } from "react-bootstrap";

const Investments = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
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
                  justifyContent: "center",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci iure, ducimus sint sapiente rerum distinctio,
                  assumenda autem provident repellendus excepturi nesciunt!
                  Veniam corporis in possimus recusandae commodi minus assumenda
                  est.
                </Typography>
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
            <Grid container spacing={6} justifyContent={"space-between"}>
              <Grid xs={12} md={4}>
                <Paper elevation={2} sx={{ borderRadius: "20px" }}>
                  <Box
                    component={"img"}
                    alt="Image"
                    src={stock}
                    sx={{
                      height: "auto",
                      maxHeight: 350,
                      // width: 500,
                      objectFit: "contain",
                      maxWidth: "100%",
                    }}
                  ></Box>
                </Paper>
              </Grid>
              <Grid xs={12} md={4}>
                <Paper
                  elevation={2}
                  square={true}
                  sx={{ borderRadius: "20px" }}
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
                </Paper>
              </Grid>
              <Grid xs={12} md={4}>
                <Paper elevation={2} sx={{ borderRadius: "20px" }}>
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
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* <div className="container invest-ideas" id="investments">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="invest-idea">
                <img
                  src={stock}
                  className="b5-img-fluid rounded mx-auto d-block stock-img"
                  alt="stock market"
                />
                <h2 className="text-center">акции</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">крипта</div>
            <div className="col-xl-4 col-md-6 col-sm-12">недвижка</div>
            <div className="col-xl-4 col-md-6 col-sm-12">еще что то</div>
            <div className="col-xl-4 col-md-6 col-sm-12">еще</div>
            <div className="col-xl-4 col-md-6 col-sm-12">еще</div>
          </div>
        </div> */}
    </div>
  );
};

export default Investments;
