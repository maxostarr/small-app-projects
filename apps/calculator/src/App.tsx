import React, { useState, MouseEvent } from "react";
import { Card, GridContainer, GridItem } from "components/index";
import "./App.css";

const buttons = [
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
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");

  const handleClick = (e: MouseEvent) => {
    if (/\d/.test(e.currentTarget.id)) {
      if (currentNumber === result) {
        setCurrentNumber(e.currentTarget.id);
        setResult("0");
        return;
      }
      if (currentNumber === "0" || currentNumber === "-0") {
        setCurrentNumber(
          currentNumber.includes("-")
            ? "-" + e.currentTarget.id
            : e.currentTarget.id
        );
      } else {
        setCurrentNumber(currentNumber + e.currentTarget.id);
      }
      return;
    }

    if (/\+|-|\*|\//.test(e.currentTarget.id)) {
      setOperator(e.currentTarget.id);
      setPreviousNumber(currentNumber);
      setCurrentNumber("0");
      return;
    }

    switch (e.currentTarget.id) {
      case "AC":
        setCurrentNumber("0");
        setPreviousNumber("0");
        setResult("0");
        setOperator("");
        break;
      case ".":
        if (!currentNumber.includes(".")) {
          setCurrentNumber(currentNumber + ".");
        }
        break;
      case "±":
        setCurrentNumber(
          currentNumber.includes("-")
            ? currentNumber.slice(1)
            : "-" + currentNumber
        );

        break;
      case "=":
        let result_ = "";
        switch (operator) {
          case "+":
            result_ = (
              parseFloat(previousNumber) + parseFloat(currentNumber)
            ).toString();
            break;
          case "-":
            result_ = (
              parseFloat(previousNumber) - parseFloat(currentNumber)
            ).toString();
            break;
          case "*":
            result_ = (
              parseFloat(previousNumber) * parseFloat(currentNumber)
            ).toString();
            break;
          case "/":
            result_ = (
              parseFloat(previousNumber) / parseFloat(currentNumber)
            ).toString();
            break;
          default:
            result_ = result;
        }
        setResult(result_);
        setCurrentNumber(result_);
        setPreviousNumber("0");
        setOperator("");
        break;
    }
  };

  return (
    <>
      <GridContainer
        numberOfRows={6}
        numberOfColumns={4}
        width="50%"
        height="70%"
      >
        <GridItem gridColumn="span 4" gridRow="">
          <Card
            style={{
              border: "1px solid #222",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              height: "100%"
            }}
            backgroundColor="#111"
          >
            <div
              style={{
                paddingRight: ".5em"
              }}
            >
              {previousNumber === "0" ? " " : previousNumber} {operator}
            </div>
            <div
              style={{
                fontSize: "2.5em",
                paddingRight: ".5em"
              }}
            >
              {currentNumber}
            </div>
          </Card>
        </GridItem>
        {buttons.map(key => {
          return (
            <GridItem
              gridColumn={key.columns}
              gridRow={key.rows}
              key={key.label}
            >
              <Card
                backgroundColor={key.color}
                id={key.label}
                clickable={true}
                style={{ border: "1px solid #222" }}
                onMouseDown={handleClick}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    fontSize: "2em",
                    userSelect: "none",
                    cursor: "pointer"
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
