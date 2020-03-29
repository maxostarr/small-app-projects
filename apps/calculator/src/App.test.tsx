import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

const renderExtras = () => {
  const utils = render(<App />);
  const outputDisplay = utils.getByTestId("output");
  const secondaryOuputDisplay = utils.getByTestId("secondaryOuput");
  return { ...utils, outputDisplay, secondaryOuputDisplay };
};

test("renders", () => {
  const linkElement = renderExtras().getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});

test("can type in number", () => {
  const { outputDisplay, getByText } = renderExtras();
  const num = "1234560789.1234567089";
  Array.from(num).forEach(digit => {
    fireEvent.mouseDown(getByText(digit));
  });
  expect(outputDisplay).toHaveTextContent(num);
});

test("clear", () => {
  const { outputDisplay, secondaryOuputDisplay, getByText } = renderExtras();
  const oneDigitKey = getByText("1");
  const CKey = getByText("C");
  fireEvent.mouseDown(oneDigitKey);
  expect(outputDisplay).toHaveTextContent("1");
  fireEvent.mouseDown(CKey);
  expect(outputDisplay).toHaveTextContent("0");

  fireEvent.mouseDown(oneDigitKey);
  fireEvent.mouseDown(oneDigitKey);
  fireEvent.mouseDown(getByText("+"));
  expect(outputDisplay).toHaveTextContent("0");
  expect(secondaryOuputDisplay).toHaveTextContent("11 +");
  fireEvent.mouseDown(oneDigitKey);
  fireEvent.mouseDown(oneDigitKey);
  expect(outputDisplay).toHaveTextContent("11");
  fireEvent.mouseDown(getByText("C"));
  expect(outputDisplay).toHaveTextContent("0");
  expect(secondaryOuputDisplay).toHaveTextContent("11 +");
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

test("operator keys", () => {
  const { outputDisplay, secondaryOuputDisplay, getByText } = renderExtras();
  const operators = ["+", "-", "*", "/"];
  operators.forEach(operator => {
    const num = "123";
    Array.from(num).forEach(digit => {
      fireEvent.mouseDown(getByText(digit));
    });
    expect(outputDisplay).toHaveTextContent(num);
    fireEvent.mouseDown(getByText(operator));
    expect(outputDisplay).toHaveTextContent("0");
    expect(secondaryOuputDisplay).toHaveTextContent(num + " " + operator);
  });
});

test("performs computation", () => {
  const { outputDisplay, secondaryOuputDisplay, getByText } = renderExtras();
  const operators = ["+", "-", "*", "/"];
  operators.forEach(operator => {
    const num = "123";
    Array.from(num).forEach(digit => {
      fireEvent.mouseDown(getByText(digit));
    });
    expect(outputDisplay).toHaveTextContent(num);
    fireEvent.mouseDown(getByText(operator));

    expect(outputDisplay).toHaveTextContent("0");

    expect(secondaryOuputDisplay).toHaveTextContent(`${num} ${operator}`);

    const num2 = "456";
    Array.from(num2).forEach(digit => {
      fireEvent.mouseDown(getByText(digit));
    });
    expect(outputDisplay).toHaveTextContent(num2);
    fireEvent.mouseDown(getByText("="));
    expect(outputDisplay).toHaveTextContent(eval(`${num} ${operator} ${num2}`));
    expect(secondaryOuputDisplay).toHaveTextContent("");
  });
});

test("functions with keyboard input", () => {
  const { outputDisplay, secondaryOuputDisplay } = renderExtras();
  const operators = ["+", "-", "*", "/"];
  operators.forEach(operator => {
    const num = "123";
    Array.from(num).forEach(digit => {
      fireEvent.keyDown(document, { key: digit });
    });
    expect(outputDisplay).toHaveTextContent(num);
    fireEvent.keyDown(document, { key: operator });

    expect(outputDisplay).toHaveTextContent("0");

    expect(secondaryOuputDisplay).toHaveTextContent(`${num} ${operator}`);

    const num2 = "456";
    Array.from(num2).forEach(digit => {
      fireEvent.keyDown(document, { key: digit });
    });
    expect(outputDisplay).toHaveTextContent(num2);
    fireEvent.keyDown(document, { key: "Enter" });
    expect(outputDisplay).toHaveTextContent(eval(`${num} ${operator} ${num2}`));
    expect(secondaryOuputDisplay).toHaveTextContent("");
  });
});
