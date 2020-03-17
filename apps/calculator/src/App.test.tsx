import React from "react";
import {
  render,
  fireEvent,
  Matcher,
  SelectorMatcherOptions
} from "@testing-library/react";
import App from "./App";

const renderExtras = () => {
  const utils = render(<App />);
  const outputDisplay = utils.getByTestId("output");
  return { ...utils, outputDisplay };
};

test("renders", () => {
  const linkElement = renderExtras().getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test("digit key adds digit to current num", () => {
  const { outputDisplay, getByText } = renderExtras();
  let keyNum = 1;
  let output = "";
  for (keyNum; keyNum <= 9; keyNum++) {
    output += keyNum.toString();
    const digitKey = getByText(keyNum.toString());
    fireEvent.mouseDown(digitKey);
    expect(outputDisplay).toHaveTextContent(output);
  }
});

test("clear all", () => {
  const { outputDisplay, getByText } = renderExtras();
  const oneDigitKey = getByText("1");
  const ACKey = getByText("AC");
  fireEvent.mouseDown(oneDigitKey);
  expect(outputDisplay).toHaveTextContent("1");
  fireEvent.mouseDown(ACKey);
  expect(outputDisplay).toHaveTextContent("0");
});

test("change sign", () => {
  const { outputDisplay, getByText } = renderExtras();
  const oneDigitKey = getByText("1");
  const plusMinusKey = getByText("±");
  fireEvent.mouseDown(oneDigitKey);
  expect(outputDisplay).toHaveTextContent("1");
  fireEvent.mouseDown(plusMinusKey);
  expect(outputDisplay).toHaveTextContent("-1");
  fireEvent.mouseDown(plusMinusKey);
  expect(outputDisplay).toHaveTextContent("1");
});
