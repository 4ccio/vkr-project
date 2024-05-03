import { Box, Typography, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import stock from "./images/stock3.svg";
import stockIcon from "./images/stock_v2.svg";
import bondsIcon from "./images/bonds.svg";
import etfIcon from "./images/Frame.svg";

import AssetCard from "./AssetCard";
import CourseIntro from "./CourseIntro";

import { useParams } from "react-router-dom";

const CoursePage = ({ data }) => {
  const { courseId } = useParams();
  // console.log("Data:", data);
  // console.log("Course ID:", courseId);

  const course = data.find((course) => course.id === courseId);
  // console.log("Course:", course);

  if (!course) {
    return <div>Course not found!</div>;
  }

  const { title, description, imageIntro, assets } = course;

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
              }}
            >
              <Typography variant="h1">Investika</Typography>
            </Box>
          </Container>
        </Box>

        <CourseIntro
          title={title}
          description={description}
          image={imageIntro}
        ></CourseIntro>

        <Box component={"section"} className="course-elements">
          <Container>
            <Grid container justifyContent="center">
              <Grid
                xs={12}
                // md={6}
                display={"flex"}
                justifyContent={{ xs: "center" }}
              >
                <Stack spacing={2} maxWidth={"700px"}>
                  <Typography
                    variant="h3"
                    gutterBottom={true}
                    textAlign={"center"}
                  >
                    Основные активы
                  </Typography>
                  {/* <AssetCard
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
                  ></AssetCard> */}
                  {assets.map((asset, index) => (
                    <AssetCard
                      key={index}
                      assetName={asset.name}
                      assetImage={asset.image}
                      assetDetails={asset.details}
                      assetButtonTitles={asset.cards}
                    />
                  ))}
                </Stack>
              </Grid>
              {/* <Grid xs={12} md={6}>
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom={true}
                  textAlign={"center"}
                >
                  Где инвестировать?
                </Typography>
              </Box>
            </Grid> */}
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default CoursePage;
