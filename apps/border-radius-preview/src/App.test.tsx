import React from "react";
import { render } from "../utils.test";
import App from "./App";
import { getByTestId, fireEvent } from "@testing-library/react";

test("renders", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Border Radius Preview!/i);
  expect(titleElement).toBeInTheDocument();
});

test("changes border radius", () => {
  const { getByTestId } = render(<App />);
  const inputElement = getByTestId("topLeft");
  const cardElement = getByTestId("card");
  expect(cardElement).toHaveStyle(
    "border-radius: 10% 10% 10% 10% / 10% 10% 10% 10%"
  );
  fireEvent.change(inputElement, { target: { value: "20" } });
  expect(cardElement).toHaveStyle(
    "border-radius: 20% 10% 10% 10% / 10% 10% 10% 10%"
  );
});

test("changes the css display", () => {
  const { getByTestId } = render(<App />);
  const inputElement = getByTestId("topLeft");
  const outputElement = getByTestId("output");
  expect(outputElement).toHaveTextContent(
    "border-radius: 10% 10% 10% 10% / 10% 10% 10% 10%"
  );
  fireEvent.change(inputElement, { target: { value: "20" } });
  expect(outputElement).toHaveTextContent(
    "border-radius: 20% 10% 10% 10% / 10% 10% 10% 10%"
  );
});
