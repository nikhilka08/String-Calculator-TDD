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
    });
  });

  describe("Newline seperator", () => {
    test("Given newline in string, it should return the sum", () => {
      const result = add("1\n2,3,4");
      const expectedValue = 10;
      expect(result).toBe(expectedValue);
    });
    test("Given multiple newline in string, it should return the sum", () => {
      const result = add("1\n2,3\n4,5");
      const expectedValue = 15;
      expect(result).toBe(expectedValue);
    });
  });

  describe("Custom delimiters", () => {
    test("Given a custom delimiter //; it should return sum", () => {
      const result = add("//;1;2");
      const expectedValue = 3;
      expect(result).toBe(expectedValue);
    });
    test("Given a custom delimiter //; with newline it should return sum", () => {
      const result = add("//;\n1;2;\n3;4");
      const expectedValue = 10;
      expect(result).toBe(expectedValue);
    });
    test("Given a custom delimiter //# it should return sum", () => {
      const result = add("//#\n1#2#3#4");
      const expectedValue = 10;
      expect(result).toBe(expectedValue);
    });
  });

  describe("Negative numbers should throw error", () => {
    test("Single Negative number error", () => {
      expect(() => {
        add("-1");
      }).toThrow("negatives not allowed -1");
    });

    test("Negative number with delimiter error", () => {
      expect(() => {
        add("//;\n-1;2;\n3");
      }).toThrow("negatives not allowed -1");
    });

    test("Multiple negative number with delimiter error", () => {
      expect(() => {
        add("//;\n-1;2;\-3");
      }).toThrow("negatives not allowed -1,-3");
    });
  });
});
