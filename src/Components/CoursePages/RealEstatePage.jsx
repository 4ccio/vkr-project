import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { Link } from "react-router-dom";

import IntroCourse from "./IntroCourse";
import Partners from "./Partners";

import data from "../../Data/CoursesData";
import AssetButton from "./AssetButton";

const RealEstatePage = ({ courseId }) => {
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
                <Grid
                  xs={12}
                  sm={6}
                  spacing={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  // justifyContent={"space-around"}
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: 4,
                      boxShadow: "0px 2px 5px rgb(166, 180, 200)",
                      padding: 4,
                    }}
                  >
                    <Typography
                      variant="h4"
                      textAlign={"center"}
                      marginBottom={3}
                    >
                      Основы инвестирования в недвижимость
                    </Typography>
                    <Typography marginBottom={3}>
                      При быстром увеличении уровня инфляции возникает важный
                      вопрос о сохранении и приумножении накоплений. Один из
                      востребованных вариантов — вложение средств в
                      недвижимость.
                    </Typography>
                    <Stack spacing={3}>
                      {assets.map((asset, index) => (
                        <Link
                          key={asset.id}
                          to={`/${courseId}/${asset.id}/${asset.cards[index].lessonId}`}
                        >
                          <AssetButton title={asset.name}></AssetButton>
                        </Link>
                      ))}
                    </Stack>
                  </Box>
                </Grid>
                <Grid xs={12} md={6}>
                  <Box>
                    <Typography
                      variant="h3"
                      // gutterBottom={true}
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
                      <Typography
                        gutterBottom={true}
                        textAlign={"center"}
                        // sx={{
                        //   textIndent: "20px",
                        // }}
                      >
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
                        // alignItems={"center"}
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

export default RealEstatePage;
