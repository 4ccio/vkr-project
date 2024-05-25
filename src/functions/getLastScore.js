import getProgressForLesson from "./getProgressForLesson"

const getLastScore = (courseId, assetId, lessonId) => {
  const progress = getProgressForLesson(courseId, assetId, lessonId);
  return progress.lastScore || 0;
};

export default getLastScore;