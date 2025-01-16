import db from "../src/config/knex.js";
import subjectsService from "../src/services/subjectsService.js";

jest.mock("../src/config/knex.js");

describe("Subject Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Encontra as matérias do curso", async () => {
    const courseId = 1;
    const mock = [
      {
        course_semester_name: "1° Trimestre",
        subject_name: "Lógica de Programação",
        subject_description: "Início da caminhada",
      },
      {
        course_semester_name: "1° Trimestre",
        subject_name: "Arquitetura de Computadores",
        subject_description: "Começa a reduzir a sua sanidade",
      },
      {
        course_semester_name: "2° Trimestre",
        subject_name: "Programação Web",
        subject_description: "Aqui começa a luta",
      },
    ];
    db.mockReturnValueOnce({
      select: jest.fn().mockReturnValueOnce(mock),
      join: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
    });
    expect(await subjectsService.getSubjectByCourse(courseId)).toBe(mock);
  });
});
