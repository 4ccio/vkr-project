import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#3C3C3C",
  boxShadow: "0px 2px 5px rgb(72, 80, 87)",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#3C3C3C",
    boxShadow: "0px 2px 5px rgb(166, 180, 200)",
    "&:disabled": {
      boxShadow: "0px 2px 5px rgb(166, 180, 200)",
      backgroundColor: "transparent",
      color: theme.palette.text.disabled,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#3C3C3C",
      color: "#FFFFFF",
      boxShadow: "0px 2px 5px rgb(72, 80, 87)",
    },
  },
}));

export default CustomIconButton;