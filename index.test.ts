import add from "./index";

describe("String addition calculator", () => {
  test("Given an empty string, it should return 0", () => {
    const result = add("");
    const expectedValue = 0;
    expect(result).toBe(expectedValue);
  });
});
