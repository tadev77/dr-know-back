const studentData = () => {
    const data = {
        performance: {
            Matemática: 7.5,
            História: 6.0,
            Física: 8.2,
            Química: 5.5
        },
        study_time: {
            monday: 2,
            tuesday: 1.5,
            wednesday: 3,
            thursday: 2.5,
            friday: 1,
            saturday: 0,
            sunday: 0
        },
        remaining_weeks: 20,
        available_days: 5
    };

    return "Input:" + JSON.stringify(data);
};

const instructions = "Instruction: Given the following student data:\n";

const dataDescription ="Performance per subject: Scores from 0 to 10.\n" +
    "Daily study time: Hours studied per day in the last week.\n" +
    "Remaining course time: Number of weeks left to complete the course.\n" +
    "Available study days: Number of days per week the student is free to study.\n" +
    "Generate a JSON response in Portuguese with the following fields:\n";

const responseFields = "Generate a JSON response in Portuguese with the following fields:\n" +
    "\n" +
    "general_insight: A single text string (no subcategories) that includes:\n" +
    "An overall evaluation of the student's academic performance.\n" +
    "A summary of strengths and weaknesses.\n" +
    "An analysis of how study time distribution is affecting learning.\n" +
    "General recommendations for improvement.\n" +
    "performance_insight: A single text string (no subcategories) that includes:\n" +
    "\n" +
    "A summary of the student’s performance, highlighting strong and weak subjects.\n" +
    "Detailed recommendations on what topics to focus on in each weak subject.\n" +
    "Study strategies to improve performance, such as specific techniques, resources, or study methods tailored to the subject.\n" +
    "time_insight: A single text string (no subcategories) analyzing how well the student’s study time is distributed and whether it is sufficient. Additionally, provide techniques for:\n" +
    "\n" +
    "Optimizing study time.\n" +
    "Increasing concentration, such as specific methods (e.g., Pomodoro Technique, time blocking, environment adjustments)." +
    "\n" +
    "suggested_daily_time: A numeric value representing the recommended daily study time in minutes (e.g., 180 instead of 3 hours).\n" +
    "\n" +
    "pd_suggested: An array of objects, where each object contains:\n" +
    "\n" +
    "\"title\": The topic suggested in performance_insight.\n" +
    "\n" +
    "\"link\": A search link from Passei Direto, following this format:\n" +
    "\n" +
    "https://www.passeidireto.com/busca?q={term}\n" +
    "\n" +
    "The {term} must be URL-encoded, replacing spaces with +.\n";

const observations = "Example:\n" +
    "Topic: \"Revolução Industrial\"\n" +
    "Link: \"https://www.passeidireto.com/busca?q=Revolu%C3%A7%C3%A3o+Industrial\"\n" +
    "Important: The output must be in Portuguese and follow the exact JSON structure described. Do not include subcategories inside each field except for pd_suggested, which must be an array of objects.\n";

export const studentDataPrompt = () => {
    return instructions + dataDescription + responseFields + observations + studentData();
}