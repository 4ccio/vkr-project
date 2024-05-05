import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Partners = ({ image, title, link }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <Avatar
          src={image}
          sx={{
            width: 80,
            height: 80,
            marginBottom: 1,
            boxShadow: "0px 2px 5px rgb(166, 180, 200)",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "translateY(-0.08em)",
              boxShadow: "0px 2px 10px rgb(166, 180, 200)",
            },
          }}
        />
      </Link>
      <Typography textAlign={"center"}>{title}</Typography>
    </Box>
  );
};

export default Partners;
