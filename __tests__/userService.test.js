import userService from "../src/services/userService.js";
import db from "../src/config/knex.js";

jest.mock("../src/config/knex.js");

describe("User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Encontra o usuário", () => {
    const mockUser = { id: 1, name: "Bob", avatar: "https://google.com" };
    db.mockReturnValueOnce({
      where: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      first: jest.fn().mockReturnValueOnce(mockUser),
    });
    expect(userService.getUserById(1)).toBe(mockUser);
  });
});
