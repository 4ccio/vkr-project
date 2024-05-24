import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import ProgressIndicator from "./ProgressIndicator";
import CardSlide from "./CardSlide";
import QuizSlide from "./QuizSlide";
import NavigationButtons from "./NavigationButtons";

const findAsset = (data, courseId, assetId) => {
  const courseData = data.find((course) => course.id === courseId);
  const asset = courseData?.assets.find((asset) => asset.id === assetId);
  return { asset };
};

function SwipeCards({ data }) {
  const { courseId, assetId, lessonId } = useParams();
  const { asset } = findAsset(data, courseId, assetId);
  const assetCards = asset.cards;
  const cardsArray = assetCards[lessonId].cards;
  const questionsArray = assetCards[lessonId].testQuestions;

  const maxSteps = cardsArray.length + 1;

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(questionsArray.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (answers[currentQuestion] === null) {
      setValidationMessage("Выберите ответ для продолжения");
    } else if (currentQuestion < questionsArray.length - 1) {
      setValidationMessage("");
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setValidationMessage("");
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleAnswerChange = (event, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = index;
    setAnswers(updatedAnswers);
    setValidationMessage(""); // Clear the validation message
  };

  const calculateResults = () => {
    let correctAnswers = 0;
    questionsArray.forEach((question, index) => {
      if (
        answers[index] !== null &&
        answers[index] === question.correctAnswer
      ) {
        correctAnswers += 1;
      }
    });
    return correctAnswers;
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            paddingTop: "10%",
            paddingBottom: "5%",
            justifyContent: "space-around",
          }}
        >
          <Header courseId={courseId} title={assetCards[lessonId].title} />
          <Box>
            <ProgressIndicator activeStep={activeStep} maxSteps={maxSteps} />
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{
                position: "relative",
              }}
            >
              {cardsArray.map((step, index) => (
                <CardSlide
                  key={index}
                  step={step}
                  activeStep={activeStep}
                  index={index}
                />
              ))}
              <QuizSlide
                questionsArray={questionsArray}
                currentQuestion={currentQuestion}
                answers={answers}
                handleAnswerChange={handleAnswerChange}
                handleNext={handleNext}
                validationMessage={validationMessage}
                showResults={showResults}
                calculateResults={calculateResults}
              />
            </SwipeableViews>
          </Box>

          <NavigationButtons
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            maxSteps={maxSteps}
          />
        </Box>
      </Container>
    </div>
  );
}

export default SwipeCards;
