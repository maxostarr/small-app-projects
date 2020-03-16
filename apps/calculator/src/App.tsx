import React from "react";
import { Card, GridContainer, GridItem } from "components/index";
import "./App.css";

const buttons = [
  { label: "", columns: "1/5", rows: "1/1", color: "" },
  {
    label: "AC",
    columns: "",
    rows: "",
    color: "rgba(202,202,204,1)"
  },
  {
    label: "%",
    columns: "",
    rows: "",
    color: "rgba(202,202,204,1)"
  },
  {
    label: "+-",
    columns: "",
    rows: "",
    color: "rgba(202,202,204,1)"
  },
  {
    label: "/",
    columns: "",
    rows: "",
    color: "rgba(252,156,23,1)"
  },
  {
    label: "7",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "8",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "9",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "*",
    columns: "",
    rows: "",
    color: "rgba(252,156,23,1)"
  },
  {
    label: "4",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "5",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "6",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "-",
    columns: "",
    rows: "",
    color: "rgba(252,156,23,1)"
  },
  {
    label: "1",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "2",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "3",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "+",
    columns: "",
    rows: "",
    color: "rgba(252,156,23,1)"
  },
  {
    label: "0",
    columns: "span 2",
    rows: "",
    color: "#777"
  },
  {
    label: ".",
    columns: "",
    rows: "",
    color: " #777"
  },
  {
    label: "=",
    columns: "",
    rows: "",
    color: "rgba(252,156,23,1)"
  }
];

function App() {
  return (
    <>
      <GridContainer
        numberOfRows={6}
        numberOfColumns={4}
        width="50%"
        height="70%"
      >
        {/* <GridItem gridColumn="1/2" gridRow="2/2">
          <Card backgroundColor="lightGrey">AC</Card>
        </GridItem>
        <GridItem gridColumn="2/3" gridRow="2/2">
          <Card backgroundColor="lightGrey">+-</Card>
        </GridItem>
        <GridItem gridColumn="3/4" gridRow="2/2">
          <Card backgroundColor="lightGrey">%</Card>
        </GridItem>
        <GridItem gridColumn="4/5" gridRow="2/2">
          <Card backgroundColor="orange">/</Card>
        </GridItem> */}
        {buttons.map((key, i) => {
          return (
            <GridItem gridColumn={key.columns} gridRow={key.rows}>
              <Card backgroundColor={key.color}>{key.label}</Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </>
  );
}

export default App;
