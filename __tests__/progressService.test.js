import db from "../src/config/knex.js";
import progressService from "../src/services/progressService.js";
jest.mock("../src/config/knex.js");

describe("Progress Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Encontra o progresso do aluno", async () => {
    const studentId = 1;
    const courseId = 1;
    const mock = [
      { current_day: 1736812800000, progress: 90 },
      { current_day: 1736899200000, progress: 60 },
      { current_day: 1736985600000, progress: 90 },
      { current_day: 1736467200000, progress: 55 },
      { current_day: 1736553600000, progress: 90 },
      { current_day: 1736640000000, progress: 120 },
      { current_day: 1736726400000, progress: 25 },
    ];
    db.mockReturnValueOnce({
      select: jest.fn().mockReturnValueOnce(mock),
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
    });
    expect(await progressService.getProgressByStudentCourse(studentId, courseId)).toBe(mock);
  });
});
