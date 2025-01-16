import db from "../src/config/knex.js";
import performanceService from "../src/services/performanceService.js";

jest.mock("../src/config/knex.js");

describe("Performance Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Encontra as performances", async () => {

    const studentId = 1;
    const courseId = 1;

    const mock = [
        { avg_grade: 90, subject_id: 1 },
        { avg_grade: 80, subject_id: 2 },
        { avg_grade: 100, subject_id: 3 },
        { avg_grade: 60, subject_id: 4 },
        { avg_grade: 100, subject_id: 5 }
    ]
    db.mockReturnValueOnce({
      select: jest.fn().mockReturnValueOnce(mock),
      where: jest.fn().mockReturnThis(),
      join: jest.fn().mockReturnThis(),
      avg: jest.fn().mockReturnThis(),
      groupBy: jest.fn().mockReturnThis(),
    });
    expect(await performanceService.getPerformanceByCourse(studentId, courseId)).toBe(mock);
  });
});
