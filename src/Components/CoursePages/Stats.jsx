import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AssetButton from "./AssetButton";

const Stats = ({
  item,
  courseId,
  assetId,
  getPeakProgress,
  getPeakScore,
  getLastScore,
}) => {
  const peakProgress = getPeakProgress(courseId, assetId, item.lessonId);
  const peakScore = getPeakScore(courseId, assetId, item.lessonId);
  const lastScore = getLastScore(courseId, assetId, item.lessonId);
  const totalQuestions = item.testQuestions.length;
  const findColor = (score, totalQuestions) => {
    const percentage = (score / totalQuestions) * 100;

    if (percentage === 100) {
      return "green";
    } else if (percentage >= 66) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Link to={`/${courseId}/${assetId}/${item.lessonId}`}>
        <AssetButton title={item.title} />
      </Link>
      <Divider sx={{ marginTop: 2 }} />
      <Typography
        textAlign={"left"}
        sx={{
          fontSize: "1rem",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>Прогресс:</span>
        </Box>

        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={peakProgress.toFixed(0)}
            size={55}
            thickness={2.2}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              fontSize={"1rem"}
              // color="text.secondary"
            >
              {peakProgress.toFixed(0)}%
            </Typography>
          </Box>
        </Box>
        {/* <span>{peakProgress.toFixed(0)}%</span> */}
      </Typography>
      <Typography fontSize={"1rem"}>Проверочные вопросы</Typography>
      <Box
        sx={{
          marginLeft: 2,
        }}
      >
        <Typography
          textAlign={"left"}
          sx={{
            fontSize: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {console.log(peakScore)}
          <span>Лучший результат:</span>
          <span
            style={{
              color: findColor(peakScore, totalQuestions),
            }}
          >
            {peakScore}/{totalQuestions}
          </span>
        </Typography>
        <Typography
          textAlign={"left"}
          sx={{
            fontSize: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Последний результат:</span>
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
  );
};

export default Stats;
