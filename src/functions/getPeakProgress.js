import getProgressForLesson from "./getProgressForLesson";

const getPeakProgress = (courseId, assetId, lessonId) => {
  const progress = getProgressForLesson(courseId, assetId, lessonId);
  const peakProgress = progress.peakProgress || 0;
  return peakProgress;
};

export default getPeakProgress;
