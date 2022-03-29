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

    test("Given multiple numbers in string, it should return the sum", () => {
      const result = add("2,3,4");
      const expectedValue = 9;
      expect(result).toBe(expectedValue);
    })
  });

});
