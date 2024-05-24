import { Box } from "@mui/material";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomIconButton from "./CustomButton";

function NavigationButtons({ handleBack, handleNext, activeStep, maxSteps }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <CustomIconButton
        variant="contain"
        size="large"
        color="secondary"
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        <ArrowBackIosNew fontSize="medium" />
      </CustomIconButton>
      <CustomIconButton
        variant="contain"
        size="large"
        color="secondary"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        <ArrowForwardIosIcon fontSize="medium" />
      </CustomIconButton>
    </Box>
  );
}

export default NavigationButtons;
