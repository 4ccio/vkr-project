import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AssetCard = ({ assetName, assetImage, assetDetails }) => {
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
          <AccordionDetails
            sx={{
              paddingBottom: "8px",
            }}
          >
            <Container>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                }}
              >
                {assetDetails}
              </Typography>
            </Container>
          </AccordionDetails>
          <AccordionActions>
            <Button>Подробнее</Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </div>
  );
};
export default AssetCard;
