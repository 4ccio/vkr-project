import { Stack, Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AssetButton = ({ title }) => {
  return (
    <Stack spacing={2}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"center"}
        columnGap={1}
        sx={{
          border: "2px solid black",
          padding: "8px 24px 8px 24px",
          color: "white",
          background:
            "linear-gradient(45deg, rgba(31, 36, 39,1) 50%, rgba(255,255,255,1) 50%)",
          backgroundSize: "200%",
          transition: "0.8s",
          backgroundPosition: "0",
          borderRadius: "10px",
          "&:hover": {
            color: "black",
            backgroundPosition: "99%",
          },
        }}
      >
        <Box>
          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <ArrowForwardIcon fontSize="medium"></ArrowForwardIcon>
        </Box>
      </Box>
    </Stack>
  );
};
export default AssetButton;
