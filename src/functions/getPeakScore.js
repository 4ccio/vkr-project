import getProgressForLesson from "./getProgressForLesson";

const getPeakScore = (courseId, assetId, lessonId) => {
  const progress = getProgressForLesson(courseId, assetId, lessonId);
  const peakScore = progress.peakScore || 0;
  return peakScore;
};

export default getPeakScore;
