import studyPlanService from "../services/studyPlanService.js";

async function getStudyPlans(_req, res) {
  try {

    const studyPlans = await studyPlanService.getStudyPlans();

    if (!studyPlans) {
      return res.status(404).json({ error: "No study plan available!" });
    }

    res.status(200).json(studyPlans);
  } catch (error) {
    console.error("Error fetching study plans:", error);
    res.status(500).json({ error: "Failed to fetch study plans." });
  }
}

export { getStudyPlans };
