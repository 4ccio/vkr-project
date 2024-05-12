import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import AccordionCourse from "./AccordionCourse";
import IntroCourse from "./IntroCourse";
import Partners from "./Partners";

import data from "../../Data/CoursesData";

const StockMarketPage = ({ courseId }) => {
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

        <Box component={"section"} className="course-elements">
          <Container>
            <Grid container justifyContent="center" spacing={4}>
              <Grid
                xs={12}
                md={6}
                display={"flex"}
                justifyContent={{ xs: "center" }}
                marginBottom={3}
              >
                <Stack spacing={2} maxWidth={"700px"}>
                  <Typography variant="h3" textAlign={"center"}>
                    Основные активы
                  </Typography>
                  {assets.map((asset, index) => (
                    <AccordionCourse
                      key={index}
                      assetId={asset.id}
                      assetName={asset.name}
                      assetImage={asset.image}
                      assetDetails={asset.details}
                      assetCards={asset.cards}
                      courseId={courseId}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h3"
                    marginBottom={2}
                    textAlign={"center"}
                  >
                    Где инвестировать?
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
                      Чтобы начать инвестировать, необходимо обратиться к
                      брокеру, который будет посредником между инвестором и
                      компаниями.
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      marginBottom={2}
                      fontWeight={"500"}
                    >
                      Мы рекомендум следующих брокеров:
                    </Typography>
                    <Grid container justifyContent={"space-around"} spacing={2}>
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
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default StockMarketPage;
