import add from "./index";

describe("String addition calculator", () => {
  describe("Basic calculator", () => {
    test("Given an empty string, it should return 0", () => {
      const result = add("");
      const expectedValue = 0;
      expect(result).toBe(expectedValue);
    });

    test("Given a single string, it should return number", () => {
      const result = add("2");
      const expectedValue = 2;
      expect(result).toBe(expectedValue);
    });
  });
});
