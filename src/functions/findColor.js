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

export default findColor;
