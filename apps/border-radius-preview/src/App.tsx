import React, { useState, ChangeEvent } from "react";
import { Card, Text, GridContainer, GridItem } from "components/index";
import { BorderRadiusObject } from "components/card";
const initialState: BorderRadiusObject = {
  topLeft: { a: 10, b: 10 },
  bottomLeft: { a: 10, b: 10 },
  topRight: { a: 10, b: 10 },
  bottomRight: { a: 10, b: 10 }
};

function App() {
  const [borderRadiusObject, setBorderRadiusObject] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [corner, pair]: string[] = e.target.id.split(".");
    setBorderRadiusObject({
      ...borderRadiusObject,
      [corner]: {
        ...borderRadiusObject[corner],
        [pair]: parseInt(e.target.value)
      }
    });
  };

  return (
    <>
      <h1>Border Radius Preview!</h1>
      <p data-testid="output">
        border-radius:
        {`
      ${borderRadiusObject.topLeft.a}%
      ${borderRadiusObject.topRight.a}%
      ${borderRadiusObject.bottomRight.a}%
      ${borderRadiusObject.bottomLeft.a}%
      /
      ${borderRadiusObject.topLeft.b}%
      ${borderRadiusObject.topRight.b}%
      ${borderRadiusObject.bottomRight.b}%
      ${borderRadiusObject.bottomLeft.b}%
      `}
      </p>
      <GridContainer width="70vh" height="70vh">
        <GridItem gridColumn="2/3" gridRow="1/1" justify="center" align="end">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.topLeft.a}
            id="topLeft.a"
            data-testid="topLeft"
          />
        </GridItem>
        <GridItem gridColumn="4/5" gridRow="1/1" justify="center" align="end">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.topRight.a}
            id="topRight.a"
          />
        </GridItem>
        <GridItem gridColumn="1/2" gridRow="2/3" justify="end" align="center">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.topLeft.b}
            id="topLeft.b"
          />
        </GridItem>
        <GridItem gridColumn="2/5" gridRow="2/5" padding="1em">
          <Card
            borderRadiusObject={borderRadiusObject}
            data-testid="card"
          ></Card>
        </GridItem>
        <GridItem gridColumn="5/6" gridRow="2/3" justify="start" align="center">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.topRight.b}
            id="topRight.b"
          />
        </GridItem>
        <GridItem gridColumn="1/2" gridRow="4/5" justify="end" align="center">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.bottomLeft.b}
            id="bottomLeft.b"
          />
        </GridItem>
        <GridItem gridColumn="5/6" gridRow="4/5" justify="start" align="center">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.bottomRight.b}
            id="bottomRight.b"
          />
        </GridItem>
        <GridItem gridColumn="2/3" gridRow="5/6" justify="center" align="top">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.bottomLeft.a}
            id="bottomLeft.a"
          />
        </GridItem>
        <GridItem gridColumn="4/5" gridRow="5/6" justify="center" align="top">
          <Text
            type="number"
            width="3em"
            onChange={handleChange}
            value={borderRadiusObject.bottomRight.a}
            id="bottomRight.a"
          />
        </GridItem>
      </GridContainer>
    </>
  );
}

export default App;
