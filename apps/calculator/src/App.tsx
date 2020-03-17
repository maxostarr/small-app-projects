import React from "react";
import { Card, GridContainer, GridItem } from "components/index";
import "./App.css";

const buttons = [
  { label: "", columns: "span 4", rows: "", color: "#111111" },
  {
    label: "AC",
    columns: "",
    rows: "",
    color: "#cacacc"
  },
  {
    label: "%",
    columns: "",
    rows: "",
    color: "#cacacc"
  },
  {
    label: "±",
    columns: "",
    rows: "",
    color: "#cacacc"
  },
  {
    label: "/",
    columns: "",
    rows: "",
    color: "#fc9c17"
  },
  {
    label: "7",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "8",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "9",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "*",
    columns: "",
    rows: "",
    color: "#fc9c17"
  },
  {
    label: "4",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "5",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "6",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "-",
    columns: "",
    rows: "",
    color: "#fc9c17"
  },
  {
    label: "1",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "2",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "3",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "+",
    columns: "",
    rows: "",
    color: "#fc9c17"
  },
  {
    label: "0",
    columns: "span 2",
    rows: "",
    color: "#777777"
  },
  {
    label: ".",
    columns: "",
    rows: "",
    color: "#777777"
  },
  {
    label: "=",
    columns: "",
    rows: "",
    color: "#fc9c17"
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
              <Card
                backgroundColor={key.color}
                id={key.label}
                style={{ border: "1px solid #222" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    fontSize: "2em"
                  }}
                >
                  {key.label}
                </div>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </>
  );
}

export default App;
