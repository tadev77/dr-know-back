import progressService from "../services/progressService.js";

async function getProgressByStudentCourse(req, res) {

  const { student_id: studentId, course_id: courseId } = req.query;

  if(!studentId || !courseId) {
    return res.status(400).json({ error: "No courseId and studentId provided!" });
  }

  try {

    const progress = await progressService.getProgressByStudentCourse(studentId, courseId);

    if (!progress) {
      return res.status(404).json({ error: "No progress found!" });
    }

    res.status(200).json(progress);
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ error: "Failed to fetch progress." });
  }
}

export { getProgressByStudentCourse };
