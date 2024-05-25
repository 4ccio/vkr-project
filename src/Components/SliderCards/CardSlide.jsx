import { Box, Typography } from "@mui/material";
import Markdown from "react-markdown";

function CardSlide({ step, activeStep, index }) {
  return (
    <Box padding={1} key={index}>
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
            <Typography sx={{ fontSize: "0.9rem" }}>
              <Markdown>{step}</Markdown>
            </Typography>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}

export default CardSlide;
