const studentData = () => {
    const data = {
        performance:  [
            {
                name: "Matemática",
                score: 7.5,
                description: "Matemática é uma disciplina que abrange tópicos como álgebra, geometria, cálculo e estatística. Ela exige forte habilidade lógica e resolução de problemas. Os conceitos abordados são fundamentais para várias áreas do conhecimento, como física e engenharia."
            },
            {
                name: "Física",
                score: 8.2,
                description: "Física estuda as leis fundamentais que governam o universo, com tópicos como mecânica, termodinâmica, ondas e eletromagnetismo. A prática constante de exercícios é crucial para a compreensão e aplicação desses conceitos."
            },
            {
                name: "História",
                score: 6.0,
                description: "História envolve o estudo de eventos passados, sociedades antigas e a evolução das civilizações. A compreensão de contextos históricos e sua cronologia é essencial para interpretar o presente e projetar o futuro."
            },
            {
                name: "Química",
                score: 5.5,
                description: "Química investiga as propriedades e transformações da matéria, incluindo temas como átomos, ligações químicas, reações químicas e soluções. É uma disciplina que exige conhecimento teórico aliado à prática de experimentos e resolução de exercícios."
            }
        ],
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
    "Performance Descriptions: Descriptions of each subject to guide insights generation.\n" +
    "Generate a JSON response in Portuguese with the following fields:\n";

const responseFields = "Generate a JSON response in Portuguese with the following fields, each containing at least two paragraphs of detailed insights:\n" +
    "\n" +
    "general_insight: Provide a detailed analysis in two or more paragraphs:\n" +
    "\n" +
    "First paragraph: An overall evaluation of the student's academic performance.\n" +
    "Second paragraph: A detailed summary of the student’s strengths and weaknesses, including any patterns observed in the study time distribution and their impact on performance.\n" +
    "Additional paragraph (optional): General recommendations for improvement, including time management tips or study techniques." +
    "performance_insight: Provide a detailed analysis in two or more paragraphs:\n" +
    "\n" +
    "First paragraph: A summary of the student’s performance, highlighting both strong and weak subjects.\n" +
    "Second paragraph: Specific recommendations for improvement in each weak subject. Include detailed strategies such as focused topics, techniques, and resources to help the student improve.\n" +
    "Additional paragraph (optional): Suggestions on how to balance study time or additional resources to enhance performance." +
    "time_insight: Provide a detailed analysis in two or more paragraphs:\n" +
    "\n" +
    "First paragraph: Analyze the current distribution of study time and its impact on academic performance. Discuss whether the student’s study time is sufficient and well-distributed.\n" +
    "Second paragraph: Provide techniques to optimize study time, increase focus, and improve concentration. Suggest methods like time management strategies, study environments, and specific routines that could benefit the student." +
    "\n" +
    "suggested_daily_time: A numeric value representing the recommended daily study time in minutes (e.g., 180 instead of 3 hours).\n" +
    "\n" +
    "pd_suggested: An array of objects, where each object contains:\n" +
    "\n" +
    "\"title\": The topic suggested in performance_insight, enhanced with related terms, synonyms, or broader keywords.\n" +
    "\n" +
    "\"link\": A search link from Passei Direto, following this format:\n" +
    "\n" +
    "https://www.passeidireto.com/busca?q={term}\n" +
    "\n" +
    "The {term} must be URL-encoded, replacing spaces with +.\n" +
    "Example:\n" +
    "Topic: \"Revolução Industrial\"\n" +
    "Link: \"https://www.passeidireto.com/busca?q=Revolu%C3%A7%C3%A3o+Industrial\"";

const observations = "Example:\n" +
    "Topic: \"Revolução Industrial\"\n" +
    "Link: \"https://www.passeidireto.com/busca?q=Revolu%C3%A7%C3%A3o+Industrial\"\n" +
    "Important: The output must be in Portuguese and follow the exact JSON structure described. Do not include subcategories inside each field except for pd_suggested, which must be an array of objects.\n";

export const studentDataPrompt = () => {
    return instructions + dataDescription + responseFields + observations + studentData();
}