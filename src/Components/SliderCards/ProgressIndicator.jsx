import { Box, LinearProgress } from "@mui/material";

function ProgressIndicator({ activeStep, maxSteps }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={(activeStep / (maxSteps - 1)) * 100}
        sx={{ margin: 2, width: "100%", maxWidth: "45%" }}
      />
    </Box>
  );
}

export default ProgressIndicator;
