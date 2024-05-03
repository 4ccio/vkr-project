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
import AssetButton from "./AssetButton";
import { Link, useParams } from "react-router-dom";

// import stockCards from "./Data/StockMarket/Stocks/StocksCards"

const AssetCard = ({
  assetName,
  assetImage,
  assetDetails,
  assetButtonTitles,
}) => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div>
      <Box>
        <Accordion
          square={true}
          disableGutters={true}
          sx={{
            borderRadius: 4,
            boxShadow: "0px 2px 5px rgb(166, 180, 200)",
          }}
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
                marginBottom={1}
                sx={{
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
              >
                {assetDetails}
              </Typography>
              <Stack spacing={2}>
                {assetButtonTitles.map((item) => (
                  <Link to={`/${courseId}/${item.lessonId}`} key={item}>
                    <AssetButton title={item.title}></AssetButton>
                  </Link>
                ))}
              </Stack>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};
export default AssetCard;
