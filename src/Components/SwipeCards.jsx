import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, IconButton, Typography, styled } from "@mui/material";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";

import data from "../Data/StockMarket/StocksCards";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#3C3C3C",
  boxShadow: "0px 2px 5px rgb(72, 80, 87)",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#3C3C3C",
    boxShadow: "0px 2px 5px rgb(166, 180, 200)",
    "&:disabled": {
      boxShadow: "0px 2px 5px rgb(166, 180, 200)",
      backgroundColor: "transparent",
      color: theme.palette.text.disabled,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#3C3C3C",
      color: "#FFFFFF",
      boxShadow: "0px 2px 5px rgb(72, 80, 87)",
    },
  },
}));

function SwipeableTextMobileStepper({ corsesData }) {
  const { courseId, id } = useParams();
  const course = corsesData.find((course) => course.id === courseId);
  const cards = course.console.log(courseId);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = cards.lessons[0].cards.length;
  const cardsArray = data[0].cards;
  const maxSteps = cardsArray.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconButton
              component={Link}
              to={"/coursepage"}
              sx={{
                position: "absolute",
                left: { xs: "5%", sm: "15%" },
              }}
            >
              <CloseIcon color="primary" />
            </IconButton>

            <Typography variant="h4">{data[0].title}</Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LinearProgress
                variant="determinate"
                value={(activeStep / (maxSteps - 1)) * 100}
                sx={{ margin: 2, width: "100%", maxWidth: "45%" }}
              />
            </Box>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{ position: "relative" }}
            >
              {/* {cards.lessons[0].cards.map((step, index) => ( */}
              {cardsArray.map((step, index) => (
                <Box padding={1} key={step}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box display={"flex"} justifyContent={"center"}>
                      <Box
                        sx={{
                          height: {
                            xs: "70vh",
                            sm: "60vh",
                            md: "70vh",
                            lg: "50vh",
                          },

                          maxHeight: 500,
                          display: "flex",
                          alignItems: "center",
                          maxWidth: 900,
                          width: "100%",
                          backgroundColor: "white",
                          borderRadius: "20px",
                          padding: "5%",
                          boxShadow: "0px 2px 5px rgb(166, 180, 200)",
                          opacity: activeStep === index ? 1 : 0,
                          transition: "opacity 0.65s ease-in-out",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                          }}
                        >
                          <Markdown>{step}</Markdown>
                        </Typography>
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              ))}
            </SwipeableViews>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <CustomIconButton
              variant="contain"
              size="large"
              color="secondary"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <ArrowBackIosNew fontSize="medium" />
            </CustomIconButton>
            <CustomIconButton
              variant="contain"
              size="large"
              color="secondary"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <ArrowForwardIosIcon fontSize="medium" />
            </CustomIconButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SwipeableTextMobileStepper;
