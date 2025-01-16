import db from "../src/config/knex.js";
import studyPlanService from "../src/services/studyPlanService.js";

jest.mock("../src/config/knex.js");

describe("User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Encontra o plano de estudo", async () => {
    const mock = [
        { id: 1, text: "De 1 a 3 dias por semana" },
        { id: 2, text: "Entre 4 e 5 dias" },
        { id: 3, text: "5 dias, considerando dias úteis" },
        { id: 4, text: "7 dias por semana" },
      ];
    db.mockReturnValueOnce({
      select: jest.fn().mockReturnValueOnce(mock),
    });
    expect(await studyPlanService.getStudyPlans()).toBe(mock);
  });

  test("Cria plano de estudo para estudante", async () => {
    const studentId = 1;
    const studyPlanId = 1;
    db.mockReturnValueOnce({
      insert: jest.fn().mockReturnValueOnce(true),
    });
    expect(await studyPlanService.createStudentStudyPlan(studentId, studyPlanId)).toBe(true);
  });
});
