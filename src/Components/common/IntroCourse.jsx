import { Box, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const IntroCourse = ({ title, description, image }) => {
  return (
    <section className="course-intro">
      <Box marginBottom={3}>
        <Container>
          <Container
            sx={{
              padding: "20px 0 20px 0",
              backgroundColor: "#dfe4e9",
              borderRadius: 5,
              // boxShadow: "0px 3px 20px #A6B4C8",
              boxShadow: "inset 0px 0px 10px 2px #A6B4C8",
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
                    <Typography variant="h2" gutterBottom={true}>
                      {title}
                    </Typography>
                  </Box>
                  <Box>
                    {description.map((item, index) => (
                      <Typography
                        key={index}
                        variant="body1"
                        textAlign={"start"}
                        sx={{
                          fontSize: "1.1rem",
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
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
                    src={image}
                    sx={{
                      height: "auto",
                      maxHeight: 300,
                      objectFit: "contain",
                      maxWidth: "100%",
                      width: { xs: 250, sm: 300 },
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </section>
  );
};
export default IntroCourse;
