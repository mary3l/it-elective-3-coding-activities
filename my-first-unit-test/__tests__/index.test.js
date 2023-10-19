const { sum, subtract, multiply, divide, factorial } = require("../index");

it("should add two numbers correctly", () => {
  const result = sum(4, 6);

  expect(result).toBe(10);
});

it("should subtract two numbers correctly", () => {
  const result = subtract(6, 4);

  expect(result).toBe(2);
});

it("should multiply two numbers correctly", () => {
  const result = multiply(4, 6);

  expect(result).toBe(24);
});

it("should divide two numbers correctly", () => {
  const result = divide(14, 7);

  expect(result).toBe(2);
});

describe("Should do factorial", () => {
  it("should throw an error if the n in the factorial is negative", () => {
    expect(() => factorial(-1)).toThrow(
      "Factorial is not defined for negative numbers"
    );
  });

  it("should return 1 if the n in factorial is zero", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return the factorial of n that is positive", () => {
    expect(factorial(5)).toBe(120);
  });
});
