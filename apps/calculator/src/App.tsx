import React, { useState, MouseEvent, Key } from "react";
import { Card, GridContainer, GridItem } from "components/index";
import { useKeyPress } from "./useKeyPress";
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

type operator = "+" | "-" | "*" | "/" | "";

type operatorFunctionsType = {
  [T in operator]: (a: number, b: number) => number;
};

const operatorFunctions: operatorFunctionsType = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
  "": (_, b) => b
};

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("" as operator);

  const handleDigitInput = (digit: Key) => {
    if (currentNumber === result) {
      setCurrentNumber(digit.toString());
      setResult("0");
      return;
    }
    if (currentNumber === "0" || currentNumber === "-0") {
      setCurrentNumber(
        currentNumber.includes("-") ? "-" + digit.toString() : digit.toString()
      );
    } else {
      setCurrentNumber(currentNumber + digit.toString());
      if (currentNumber + digit.toString() === "80085") {
        alert("FUCK YEAH!!!");
      }
    }
    return;
  };

  const handleOperatorInput = (operator: operator) => {
    if (currentNumber !== "0" && currentNumber !== "-0") {
      setOperator(operator);
      setPreviousNumber(currentNumber);
      setCurrentNumber("0");
    }
  };

  const handleCompute = () => {
    let result_ = operatorFunctions[operator](
      parseFloat(previousNumber),
      parseFloat(currentNumber)
    );

    setResult(result_.toString());
    setCurrentNumber(result_.toString());
    setPreviousNumber("0");
    setOperator("" as operator);
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setPreviousNumber("0");
    setResult("0");
    setOperator("" as operator);
  };

  useKeyPress(/\d/, (key: Key) => handleDigitInput(key));
  useKeyPress(/\+|-|\*|\//, (key: Key) => handleOperatorInput(key as operator));
  useKeyPress("Enter", handleCompute);
  useKeyPress(/Backspace|Delete/, handleClear);

  const handleClick = (e: MouseEvent) => {
    if (/\d/.test(e.currentTarget.id)) {
      handleDigitInput(e.currentTarget.id);
    }

    if (/\+|-|\*|\//.test(e.currentTarget.id)) {
      handleOperatorInput(e.currentTarget.id as operator);
      return;
    }

    switch (e.currentTarget.id) {
      case "AC":
        handleClear();
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
        handleCompute();
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
              data-testid="output"
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
