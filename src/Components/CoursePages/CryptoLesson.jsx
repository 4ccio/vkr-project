import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CryptoLesson = ({ image, title }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 200,
          borderRadius: 4,
          boxShadow: "0px 2px 5px rgb(166, 180, 200)",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "translateY(-0.15em)",
            boxShadow: "0px 5px 15px rgb(166, 180, 200)",
          },
        }}
      >
        <Box padding={2}>
          <CardMedia
            sx={{
              borderRadius: 4,
              boxShadow: "0px 2px 5px rgb(166, 180, 200)",
            }}
            component="img"
            alt="green iguana"
            height="140"
            width={"150"}
            image={image}
          ></CardMedia>
        </Box>

        <CardContent>
          <Typography gutterBottom variant="body1" textAlign={"center"}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CryptoLesson;
