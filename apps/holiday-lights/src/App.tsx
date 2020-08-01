import React, { useState } from "react";
import Card from "../../../components/card";
import Box from "../../../components/box";
import useInterval from "./utils/use-interval";

const circleSize = "10em";
const initialColors = Array.from({ length: 7 }).map(() => Math.random() * 360);

function App() {
  const [colors, setColors] = useState(initialColors);
  useInterval(() => {
    setColors(colors.map((color) => color + 1));
  }, 100);
  const lights = colors.map((color: number, i: number) => {
    return (
      <Card
        key={i}
        backgroundColor={`hsl(${color}, 75%, 50%)`}
        circle={true}
        width={circleSize}
        height={circleSize}
      ></Card>
    );
  });
  return <Box justifyContent={"space-around"}>{lights}</Box>;
}

export default App;
