import { Box, Typography, Container, Grid } from "@mui/material";

import stock from "./images/stock3.svg";

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

      <Box component={"section"} className="course-intro">
        <Container>
          <Container
            sx={{
              padding: "20px 0 20px 0",
              // backgroundColor: "#E9EDF0",
              borderRadius: 5,
              border: "2px solid black",
              boxShadow: "0px 2px 5px rgb(166, 180, 200)",
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
                    <Typography variant="h2" gutterBottom="true">
                      Фондовый рынок
                    </Typography>
                  </Box>
                  <Box>
                    <Typography textAlign={"start"}>
                      Фондовый рынок - это место, где происходит обмен активами,
                      аналогично торговым площадкам. Здесь встречаются спрос и
                      предложение на акции, облигации, валюты и другие ценные
                      бумаги. <br />
                      Чтобы начать инвестировать, необходимо обратиться к
                      брокеру, который будет посредником между инвестором и
                      компаниями, чьи акции будут покупаться или продаваться.
                      <br />
                      Фондовый рынок можно сравнить с продуктовым рынком, где
                      множество участников торгует разнообразными активами по
                      различным ценам и качеству. На бирже можно встретить акции
                      компаний, облигации государств, инвестиционные фонды,
                      валюты и другие инструменты, каждый из которых имеет свою
                      уникальную цену, формируемую в результате взаимодействия
                      спроса и предложения.
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
                      maxHeight: 350,
                      // width: 500,
                      objectFit: "contain",
                      maxWidth: "100%",
                      width: 350,
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </div>
  );
};

export default CoursePage;
