import React from "react";
import { render } from "../utils.test";
import App from "./App";
import { fireEvent } from "@testing-library/react";

test("renders", () => {
  const { getByLabelText } = render(<App />);
  const binaryInput = getByLabelText(/bin/i);
  const decimalInput = getByLabelText(/dec/i);
  expect(binaryInput).toBeInTheDocument();
  expect(decimalInput).toBeInTheDocument();
});

test("ouputs correct decimal for binary input", () => {
  const { getByLabelText } = render(<App />);
  const binaryInput = getByLabelText(/bin/i);
  const decimalInput = getByLabelText(/dec/i);
  fireEvent.change(binaryInput, { target: { value: "101" } });
  expect(decimalInput).toHaveValue(5);
});

test("ouputs correct binary for decimal input", () => {
  const { getByLabelText } = render(<App />);
  const binaryInput = getByLabelText(/bin/i);
  const decimalInput = getByLabelText(/dec/i);
  fireEvent.change(decimalInput, { target: { value: "8" } });
  expect(binaryInput).toHaveValue(1000);
});
