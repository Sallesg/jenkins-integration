import { it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

it.only("renders the button with text", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByTestId("button")).toHaveTextContent("Click Me");
});
