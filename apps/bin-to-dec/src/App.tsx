import React, { useState, ChangeEvent } from "react";

function App() {
  const [bin, setBin] = useState(0);
  const [dec, setDec] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    switch (e.target.id) {
      case "bin":
        if (/[2-9]+|-/.test(inputValue)) {
          setBin(bin);
          return;
        }
        setBin(parseInt(inputValue));
        setDec(parseInt(parseInt(inputValue, 2).toString(10), 10));
        return;
      case "dec":
        if (/-/.test(inputValue)) {
          setDec(dec);
          return;
        }
        setDec(parseInt(inputValue));
        setBin(parseInt(parseInt(inputValue).toString(2)));
    }
  };

  return (
    <>
      <input id="bin" type="number" value={bin} onChange={handleChange} />
      <input id="dec" type="number" value={dec} onChange={handleChange} />
    </>
  );
}

export default App;
