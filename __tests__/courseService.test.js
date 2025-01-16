import courseService from "../src/services/courseService.js";
import db from "../src/config/knex.js";

jest.mock("../src/config/knex.js");

describe("User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Encontra o curso", async () => {
    const mockCourse = { course_id: 1, course_name: "Banco de Dados", ie_name: "PUCRS" };
    db.mockReturnValueOnce({
      where: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      join: jest.fn().mockReturnThis(),
      first: jest.fn().mockReturnValueOnce(mockCourse),
    });
    expect(await courseService.getCourseById(1)).toBe(mockCourse);
  });
});
