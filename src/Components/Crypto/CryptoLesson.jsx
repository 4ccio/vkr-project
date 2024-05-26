import {
  Box,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";

const CryptoLesson = ({
  image,
  title,
  progress,
  bestScore,
  lastScore,
  totalQuestions,
  findColor,
}) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 220,
          height: 370,
          borderRadius: 4,
          boxShadow: "0px 2px 5px rgb(166, 180, 200)",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "translateY(-0.15em)",
            boxShadow: "0px 5px 15px rgb(166, 180, 200)",
          },
          position: "relative",
        }}
      >
        <Box padding={2}>
          <CardMedia
            sx={{
              borderRadius: 4,
              boxShadow: "0px 2px 5px rgb(166, 180, 200)",
            }}
            component="img"
            alt={title}
            height="150"
            width={"150"}
            image={image}
          />
        </Box>
        <CardContent>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Box>
                <Typography
                  height={50}
                  gutterBottom
                  variant="body1"
                  textAlign={"center"}
                >
                  {title}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Typography variant="body2">
                Прогресс: {progress.toFixed(0)}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ width: "80%", mt: 1, mb: 1 }}
              />
              <Typography variant="body2" color="textSecondary">
                Лучший результат:{" "}
                <span
                  style={{
                    color: findColor(bestScore, totalQuestions),
                  }}
                >
                  {bestScore}/{totalQuestions}
                </span>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize={"0.85rem"}
              >
                Последний результат:{" "}
                <span
                  style={{
                    color: findColor(lastScore, totalQuestions),
                  }}
                >
                  {lastScore}/{totalQuestions}
                </span>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CryptoLesson;
