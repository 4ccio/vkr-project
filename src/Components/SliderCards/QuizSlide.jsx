import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";

function QuizSlide({
  questionsArray,
  currentQuestion,
  answers,
  handleAnswerChange,
  handleNext,
  validationMessage,
  showResults,
  calculateResults,
}) {
  const { courseId, assetId, lessonId } = useParams();
  console.log({ courseId, assetId, lessonId });
  // const [state, setState] = useState(initialState);
  // const resetState = () => {
  //   // Reset state to initial values
  //   setState(initialState);
  // };
  const result = calculateResults();
  const percentage = (result / questionsArray.length) * 100;
  let color = "";
  let text = "";
  if (percentage === 100) {
    text = "Поздравляем!";
    color = "green";
  } else if (percentage >= 66) {
    text = "Почти все верно!";
    color = "orange";
  } else {
    text = "Не расстраивайтесь";
    color = "red";
  }
  return (
    <Box
      padding={1}
      key="quiz"
      style={{
        transition: "transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{
          transition: "transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s",
        }}
      >
        <Box
          sx={{
            height: {
              xs: "70vh",
              sm: "60vh",
              md: "70vh",
              lg: "50vh",
            },
            maxHeight: 500,
            display: "flex",
            alignItems: "center",
            maxWidth: 900,
            width: "100%",
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "5%",
            boxShadow: "0px 2px 5px rgb(166, 180, 200)",
            opacity: 1,
            transition: "opacity 0.65s ease-in-out",
          }}
        >
          {!showResults ? (
            <Box width="100%">
              <Typography
                sx={{
                  margin: 1,
                }}
              >
                <Markdown>{questionsArray[currentQuestion].question}</Markdown>
              </Typography>
              <FormGroup>
                {questionsArray[currentQuestion].options.map(
                  (option, index) => (
                    <FormControlLabel
                      sx={{
                        marginBottom: 1,
                      }}
                      key={index}
                      control={
                        <Checkbox
                          checked={answers[currentQuestion] === index}
                          onChange={(event) => handleAnswerChange(event, index)}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: "0.9rem" }}>
                          {option}
                        </Typography>
                      }
                    />
                  )
                )}
              </FormGroup>
              {validationMessage && (
                <Typography fontSize={"0.9rem"} color="error">
                  {validationMessage}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "3%",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {currentQuestion < questionsArray.length - 1
                    ? "Следующий вопрос"
                    : "Показать результат"}
                </Button>
              </Box>
            </Box>
          ) : (
            <Box width="100%">
              <Typography
                variant="h5"
                textAlign={"center"}
                gutterBottom={true}
                fontWeight={"500"}
              >
                Ваш результат
              </Typography>
              <Typography variant="h4" textAlign={"center"} style={{ color }}>
                {calculateResults()}/{questionsArray.length}
              </Typography>
              <Typography
                variant="h5"
                textAlign={"center"}
                gutterBottom={true}
                fontWeight={"500"}
              >
                {text}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                marginTop={4}
              >
                <Button
                  component={Link}
                  to={`/${courseId}`}
                  variant="contained"
                  color="primary"
                >
                  Вернуться
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default QuizSlide;
