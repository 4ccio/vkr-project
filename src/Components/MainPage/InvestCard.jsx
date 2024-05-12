import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InvestCard({ title, image }) {
  return (
    <div>
      <Card
        sx={{
          height: "auto",
          borderRadius: "10px",
          boxShadow: "0px 2px 5px rgb(166, 180, 200)",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "translateY(-0.5em)",
            boxShadow: "0px 10px 25px rgb(166, 180, 200)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          height="250"
          sx={{ width: "100%", objectFit: "contain" }}
          image={image}
        />
        <CardContent sx={{ whiteSpace: "nowrap" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
