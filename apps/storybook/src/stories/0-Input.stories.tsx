import React from "react";
import { Input } from "components/index";

export default {
  title: "Input",
  component: Input
};

export const Text = () => <Input type="text" />;
export const Placeholder = () => (
  <Input type="text" placeholder="Test" fontSize="12em" />
);
export const Number = () => <Input type="number" fontSize="12em" />;
