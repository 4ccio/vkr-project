const getProgressForLesson = (courseId, assetId, lessonId) => {
  const progressKey = `${courseId}-${assetId}-${lessonId}-progress`;
  return JSON.parse(localStorage.getItem(progressKey)) || {};
};

export default getProgressForLesson;
