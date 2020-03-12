import React, { useState, ChangeEvent } from "react";
import { Card, Slider } from "components/index";
import { BorderRadiusObject } from "components/card";
const initialState: [number, number] = [10, 10];
function App() {
  const [topLeft, setTopLeft] = useState(initialState);
  const [topRight, setTopRight] = useState(initialState);
  const [bottomLeft, setBottomLeft] = useState(initialState);
  const [bottomRight, setBottomRight] = useState(initialState);
  const borderRadiusObject: BorderRadiusObject = {
    borderTopLeft: topLeft,
    borderBottomLeft: bottomLeft,
    borderTopRight: topRight,
    borderBottomRight: bottomRight
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "topLefta":
        setTopLeft([parseInt(e.target.value), topLeft[1]]);
        return;
      case "topRighta":
        setTopRight([parseInt(e.target.value), topRight[1]]);
        return;
    }
  };

  return (
    <>
      <Slider
        id="topLefta"
        type="range"
        min={1}
        max={100}
        value={topLeft[0]}
        onChange={handleChange}
      />
      <Slider
        id="topRighta"
        type="range"
        min={1}
        max={100}
        value={topRight[0]}
        direction="rtl"
        onChange={handleChange}
      />
      <Card
        borderRadiusObject={borderRadiusObject}
        width="50vh"
        height="50vh"
      ></Card>
    </>
  );
}

export default App;
