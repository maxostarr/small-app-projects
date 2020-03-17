import React from "react";
import { Card, GridContainer, GridItem } from "components/index";
import "./App.css";

const buttons = [
  { label: "", columns: "span 4", rows: "", color: "#111" },
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
        {buttons.map(key => {
          return (
            <GridItem gridColumn={key.columns} gridRow={key.rows}>
              <Card backgroundColor={key.color} id={key.label}>
                {key.label}
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </>
  );
}

export default App;
