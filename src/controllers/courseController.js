import courseService from "../services/courseService.js";

async function getCourseById(req, res) {
  const { id } = req.params;

  try {

    const course = await courseService.getCourseById(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch course." });
  }
}

export { getCourseById };
