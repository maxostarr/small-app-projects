import React from "react";
import { Card } from "components/index";
import { BorderRadiusObject } from "components/card";
function App() {
  const borderRadiusObject: BorderRadiusObject = {
    borderTopLeft: [10, 20],
    borderBottomLeft: [10, 20],
    borderTopRight: [10, 20],
    borderBottomRight: [10, 20]
  };
  return (
    <>
      <Card
        borderRadiusObject={borderRadiusObject}
        width="50vh"
        height="50vh"
      ></Card>
    </>
  );
}

export default App;
