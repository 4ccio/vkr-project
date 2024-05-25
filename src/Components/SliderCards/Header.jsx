import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Header({ courseId, title }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <IconButton
        component={Link}
        to={`/${courseId}`}
        sx={{
          position: "absolute",
          left: { xs: "5%", sm: "8%", md: "15%" },
        }}
      >
        <CloseIcon color="primary" />
      </IconButton>
      <Box maxWidth={"65%"}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
