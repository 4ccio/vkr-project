import { useMediaQuery } from "@mui/material";

import { Box, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views-react-18-fix";

import IntroCourse from "./IntroCourse";
import CryptoLesson from "./CryptoLesson";
import Partners from "./Partners";

import data from "../../Data/CoursesData";

const styles = {
  slide: {
    maxWidth: "200px",
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};

const CryptoPage = ({ courseId }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const courseData = data.find((course) => course.id === courseId);

  if (!courseData) {
    return <div>Course not found!</div>;
  }

  const { title, description, imageIntro, assets, partners } = courseData;
  return (
    <div>
      <Box marginBottom={3}>
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
                alignItems: "center",
                position: "relative",
              }}
            >
              <IconButton
                size="medium"
                component={Link}
                to={`/`}
                sx={{
                  position: "absolute",
                  left: { xs: "5%" },
                }}
              >
                <ArrowBackRoundedIcon color="primary" />
              </IconButton>
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
        <IntroCourse
          title={title}
          description={description}
          image={imageIntro}
        ></IntroCourse>
        <Box>
          <Container>
            <Box>
              <Grid container spacing={4}>
                {isSmallScreen ? (
                  <Grid>
                    <SwipeableViews
                      style={{
                        padding: "0 64px",
                      }}
                      slideStyle={{
                        padding: "0 36px",
                      }}
                    >
                      {assets.map((asset, index) => (
                        <div key={asset.id} style={styles.slide}>
                          <Link
                            to={`/${courseId}/${asset.id}/${asset.cards[index].lessonId}`}
                          >
                            <CryptoLesson
                              image={asset.image}
                              title={asset.name}
                            ></CryptoLesson>
                          </Link>
                        </div>
                      ))}
                    </SwipeableViews>
                  </Grid>
                ) : (
                  <Grid xs={12} md={6} container spacing={2}>
                    {assets.map((asset, index) => (
                      <Grid
                        key={asset.id}
                        xs={12}
                        sm={6}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <Link
                          to={`/${courseId}/${asset.id}/${asset.cards[index].lessonId}`}
                        >
                          <CryptoLesson
                            image={asset.image}
                            title={asset.name}
                          ></CryptoLesson>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                )}

                <Grid xs={12} md={6}>
                  <Box>
                    <Typography
                      variant="h3"
                      marginBottom={2}
                      textAlign={"center"}
                    >
                      Где купить криптовалюту?
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 4,
                        boxShadow: "0px 2px 5px rgb(166, 180, 200)",
                        padding: 4,
                      }}
                    >
                      <Typography gutterBottom={true} textAlign={"center"}>
                        Криптовалюту можно купить на различных криптовалютных
                        биржах или обменниках, которые предлагают услуги обмена
                        цифровых активов на традиционные валюты или другие
                        криптовалюты.
                      </Typography>
                      <Typography
                        textAlign={"center"}
                        marginBottom={2}
                        fontWeight={"500"}
                      >
                        Рекомендуемые криптобиржи и обменники
                      </Typography>
                      <Grid
                        container
                        justifyContent={"space-around"}
                        spacing={2}
                      >
                        {partners.map((item) => (
                          <Grid item key={item.title} xs={6}>
                            <Partners
                              image={item.image}
                              title={item.title}
                              link={item.link}
                            ></Partners>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default CryptoPage;
