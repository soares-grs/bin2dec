import { ChangeEvent, useState } from "react";
import "./App.css";
import { CustomInput } from "./components/CustomInput";

function App() {
  const [bin, setBin] = useState("");

  const verifyIsABinary = (value: string): boolean => {
    const regex = /^([01]+)?$/;

    return regex.test(value);
  }

  const handleBin = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    if(!verifyIsABinary(newValue)) {
      return;
    } 

    setBin(newValue);
  };

  return (
    <>
      <CustomInput
        digitsQuantityAllowed={8}
        label="Bin"
        value={bin}
        placeholder="números binários..."
        type="text"
        onChange={handleBin}
      />
      <p>Output: {bin}</p>
    </>
  );
}

export default App;
