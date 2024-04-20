import { ChangeEvent, useState } from "react";
import "./App.css";
import { CustomInput } from "./components/CustomInput/CustomInput";
import { ToastContainer } from "react-toastify";
import { notify } from "./services/notification-service";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState(0);

  const verifyIsABinary = (value: string): boolean => {
    const regex = /^([01]+)?$/;

    return regex.test(value);
  };

  const convertBinToDec = (bin: string) => {
    const convertedBin = parseInt(bin, 2);
    if (isNaN(convertedBin)) return "";
    setDec(convertedBin);
    notify.sucess("Número convertido com sucesso!");
  };

  const handleBin = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (!verifyIsABinary(newValue)) {
      notify.error("Só é possível inserir números binários [0 ou 1]");
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
          label="Enter binary number"
          value={bin}
          type="text"
          onChange={handleBin}
        />
        <button onClick={() => convertBinToDec(bin)} className="btn-convert">
          Convert
        </button>
        <p className="decimal-container">
          <p>Decimal:</p>
          {dec && <p>{dec}</p>}
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
