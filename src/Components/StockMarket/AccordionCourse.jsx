import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stats from "../common/Stats";

const AccordionCourse = ({
  assetId,
  assetName,
  assetImage,
  assetDetails,
  assetCards,
  courseId,
  getPeakProgress,
  getPeakScore,
  getLastScore,
}) => {
  // const result = calculateResults();

  return (
    <div>
      <Box>
        <Accordion
          square={true}
          disableGutters={true}
          sx={{ borderRadius: 4, boxShadow: "0px 2px 5px rgb(166, 180, 200)" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ width: "100%", columnGap: 1 }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              sx={{ width: "100%", columnGap: 2 }}
            >
              <Box
                component={"img"}
                src={assetImage}
                sx={{
                  height: "auto",
                  width: 70,
                  maxHeight: 70,
                  objectFit: "contain",
                  maxWidth: "auto",
                }}
              ></Box>
              <Box>
                <Typography variant="h5">{assetName}</Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Container>
              <Typography
                marginBottom={3}
                sx={{ fontSize: "1rem", fontWeight: "400" }}
              >
                {assetDetails}
              </Typography>
              <Stack spacing={2}>
                {assetCards.map((item) => {
                  return (
                    <Box key={item.lessonId}>
                      <Stats
                        item={item}
                        courseId={courseId}
                        assetId={assetId}
                        getPeakProgress={getPeakProgress}
                        getPeakScore={getPeakScore}
                        getLastScore={getLastScore}
                      ></Stats>
                    </Box>
                  );
                })}
              </Stack>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default AccordionCourse;
