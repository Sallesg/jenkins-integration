import { it, expect } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the welcome message", () => {
  render(<App />);
  expect(screen.getByText(/Vite React/i)).toBeInTheDocument();
});
