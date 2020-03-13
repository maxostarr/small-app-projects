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
    console.log(e.target);

    switch (e.target.id) {
      case "top":
        setTopRight([100 - parseInt(e.target.value), topRight[1]]);
        setTopLeft([parseInt(e.target.value), topRight[1]]);
        return;
      case "bottom":
        setBottomRight([100 - parseInt(e.target.value), topRight[1]]);
        setBottomLeft([parseInt(e.target.value), topRight[1]]);
        return;
    }
  };

  return (
    <>
      <Slider
        type="range"
        id="top"
        value={topLeft[0]}
        onChange={handleChange}
        min={1}
        max={100}
      />
      <Card
        borderRadiusObject={borderRadiusObject}
        width="50vh"
        height="50vh"
      ></Card>
      <Slider
        type="range"
        id="bottom"
        value={bottomLeft[0]}
        onChange={handleChange}
        min={1}
        max={100}
      />
    </>
  );
}

export default App;
