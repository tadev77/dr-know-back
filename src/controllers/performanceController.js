import performanceService from "../services/performanceService.js";

async function getPerformanceByStudentCourse(req, res) {

  const { student_id: studentId, course_id: courseId } = req.query;

  if(!studentId || !courseId) {
    return res.status(400).json({ error: "No courseId and studentId provided!" });
  }

  try {

    const performance = await performanceService.getPerformanceByCourse(studentId, courseId);

    if (!performance) {
      return res.status(404).json({ error: "No performance found!" });
    }

    res.status(200).json(performance);
  } catch (error) {
    console.error("Error fetching performance:", error);
    res.status(500).json({ error: "Failed to fetch performance." });
  }
}

export { getPerformanceByStudentCourse };
