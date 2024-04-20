import { ChangeEvent, useState } from "react";
import "./App.css";
import { CustomInput } from "./components/CustomInput/CustomInput";
import { ToastContainer, toast, Bounce } from "react-toastify";

function App() {
  const [bin, setBin] = useState("");

  const verifyIsABinary = (value: string): boolean => {
    const regex = /^([01]+)?$/;

    return regex.test(value);
  };

  const convertBinToDec = (bin: string): number => {
    return parseInt(bin, 2);
  };

  const notifyErro = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleBin = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (!verifyIsABinary(newValue)) {
      notifyErro("Só é possível inserir números binários [0 ou 1]");
      return;
    }

    setBin(newValue);
  };

  return (
    <>
      <h1>Binary to Decimal</h1>
      <div className="form-container">
        <CustomInput
          digitsQuantityAllowed={8}
          label="Binary"
          value={bin}
          placeholder="Insert a binary number..."
          type="text"
          onChange={handleBin}
        />
        <p className="decimal-container">
          <p>Decimal:</p>
          {bin.length > 0 && <p>{convertBinToDec(bin)}</p>}
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
