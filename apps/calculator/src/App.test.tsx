import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test("digit key adds digit to current num", () => {
  const { getByTestId, getByText } = render(<App />);
  let keyNum = 1;
  let output = "";
  const outputDisplay = getByTestId("output");
  for (keyNum; keyNum <= 9; keyNum++) {
    output += keyNum.toString();
    const digitKey = getByText(keyNum.toString());
    fireEvent.mouseDown(digitKey);
    expect(outputDisplay).toHaveTextContent(output);
  }
});
