import knex from 'knex';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: './database.sqlite'
    },
    useNullAsDefault: true
});

const getAverageGradesBySubject = async (userId) => {
    try {
        return await db('subjects')
            .join('assessments', 'subjects.id', '=', 'assessments.subject_id')
            .join('grades', 'assessments.id', '=', 'grades.assessment_id')
            .select('subjects.name', 'subjects.description')
            .where('grades.student_id', userId)
            .avg('grades.grade as score')
            .groupBy('subjects.name');
    } catch (error) {
        console.error('Error calculating average grades by subject:', error);
    }
};

const getStudyPlan = async (userId) => {
    try {
        return await db('study_plans')
            .join('student_study_plans', 'study_plans.id', '=', 'student_study_plans.study_plan_id')
            .select('study_plans.text')
            .where('student_study_plans.student_id', userId)
            .first();
    } catch (error) {
        console.error('Error getting study plan:', error);
    }
};

const studentData = async (userId, averageGrades) => {
    const user = db('users')
        .where({ id: userId })
        .first();

    if (!user) {
        throw new Error('User not found');
    }

    const studyPlan = await getStudyPlan(userId);

    const data = {
        performance_data:  {
            subjects: averageGrades
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
        remaining_course_time: 20,
        available_days: studyPlan.text
    };

    console.log(data);

    return "Input:" + JSON.stringify(data);
};

const getSubjectsString = (subjects) => {
    return subjects.map(subject => {
        return `${subject.name},`;
    }).join('\n');
};

const instructions = "Instruction: Given the following student data:\n";

const dataDescription ="Performance per subject: Scores from 0 to 100.\n" +
    "Daily study time: Hours studied per day in the last week.\n" +
    "Remaining course time: Number of weeks left to complete the course.\n" +
    "Available Study Days: The number of days the student can dedicate to studying each week, represented as text. The available options are:\n" +
    "\"De 1 a 3 dias por semana\"\n" +
    "\"Entre 4 e 5 dias\"\n" +
    "\"5 dias, considerando dias úteis\"\n" +
    "\"7 dias por semana\"" +
    "Subject Descriptions: Descriptions of each subject to guide insights generation.\n" +
    "Generate a JSON response in Portuguese with the following fields, each containing advanced-level insights for graduate and post-graduate courses:\n";

const responseFields = "Generate a JSON response in Portuguese with the following fields, each containing at least two paragraphs of detailed insights:\n" +
    "\n" +
    "general_insight: Provide a detailed analysis in two or more paragraphs:\n" +
    "\n" +
    "First paragraph: An advanced-level evaluation of the student's overall academic performance, considering the complexity of the courses and their progression.\n" +
    "Second paragraph: A detailed analysis of strengths and weaknesses in the subjects (%%subjects%%), focusing on the intellectual demands of the courses and identifying how the student's current habits align or fail to meet these demands.\n" +
    "Additional paragraph (optional): High-level recommendations for improvement, with a focus on time management, studying techniques, and how to manage more advanced academic content.\n" +
    "performance_insight: Provide a detailed analysis in two or more paragraphs:\n" +
    "\n" +
    "First paragraph: A summary of the student’s performance, emphasizing both strong and weak subjects (%%subjects%%), highlighting the complexity and academic level of each subject.\n" +
    "econd paragraph: Advanced strategies for improvement in weak subjects, tailored to graduate and post-graduate level. Focus on high-level resources, methodologies, and approaches for mastering complex topics.\n" +
    "Additional paragraph (optional): Suggestions for balancing study time in relation to the course’s demands and incorporating higher-level problem-solving or theoretical approaches.\n" +
    "time_insight: Provide a detailed analysis in two or more paragraphs:\n" +
    "\n" +
    "First paragraph: Analyze the student’s study time distribution and how it impacts their ability to meet the intellectual demands of their advanced coursework.\n" +
    "Second paragraph: Provide advanced techniques for optimizing study time, enhancing focus, and managing concentration at a higher level. Discuss methods such as deep work, active recall, spaced repetition, and techniques specific to higher-level learning." +
    "suggested_daily_time: A numeric value representing the recommended daily study time in minutes (e.g., 180 instead of 3 hours). This should be calculated based on the remaining time and the student’s goals.\n" +
    "\n" +
    "pd_suggested: An array of objects, where each object contains:\n" +
    "\n" +
    "\"title\": A specific and detailed topic relevant to the student's performance in a given subject (%%subjects%%)\n" +
    "\n" +
    "\"link\": A Passei Direto search link, optimized by removing connectors (\"de\", \"do\", \"em\", etc.) to increase search efficiency.\n" +
    "\n" +
    "https://www.passeidireto.com/busca?q={optimized_term}\n" +
    "The {optimized_term} should be refined to remove unnecessary connectors and must be URL-encoded (spaces replaced with +)." +
    "\n" +
    "Example:\n" +
    "Topic: \"Revolução Industrial\"\n" +
    "Link: \"https://www.passeidireto.com/busca?q=Revolu%C3%A7%C3%A3o+Industrial\"";

const observations = "Example:\n" +
    "Topic: \"Revolução Industrial\"\n" +
    "Link: \"https://www.passeidireto.com/busca?q=Revolu%C3%A7%C3%A3o+Industrial\"\n" +
    "Important: The output must be in Portuguese and follow the exact JSON structure described. Do not include subcategories inside each field except for pd_suggested, which must be an array of objects.\n";

export const studentDataPrompt = async (userId) => {

    const averageGrades = await getAverageGradesBySubject(userId);

    const subjectsStr = getSubjectsString(averageGrades);

    return instructions + dataDescription + responseFields.replace('%%subjects%%', subjectsStr) + observations + studentData(userId, averageGrades);
}