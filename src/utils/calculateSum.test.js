import { it, expect } from "@jest/globals";
import { calculateSum } from "./calculateSum";

it("calculates the sum of two numbers", () => {
  expect(calculateSum(2, 3)).toBe(5);
});
