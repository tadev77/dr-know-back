import subjectsService from "../services/subjectsService.js";

async function getSubjectsByCourse(req, res) {
  const { course_id: courseId } = req.query;

  if (!courseId) {
    return res.status(400).json({ error: "Course not specified." });
  }

  try {

    const subject = await subjectsService.getSubjectByCourse(courseId);

    if (!subject) {
      return res.status(404).json({ error: "Subject not found." });
    }

    res.status(200).json(subject);
  } catch (error) {
    console.error("Error fetching subject:", error);
    res.status(500).json({ error: "Failed to fetch subject." });
  }
}

export { getSubjectsByCourse };
