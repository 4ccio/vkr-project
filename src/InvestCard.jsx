import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InvestCard({ title, image }) {
  return (
    <Card elevation={2} sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardMedia
        component="img"
        alt={title}
        height="250"
        sx={{ width: "100%", objectFit: "contain" }}
        image={image}
      />
      <CardContent>
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
  );
}
