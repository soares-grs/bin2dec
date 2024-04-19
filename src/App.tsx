import { ChangeEvent, useState } from "react";
import "./App.css";
import { CustomInput } from "./components/CustomInput";
import { ToastContainer, toast, Bounce } from "react-toastify";

function App() {
  const [bin, setBin] = useState("");

  const verifyIsABinary = (value: string): boolean => {
    const regex = /^([01]+)?$/;

    return regex.test(value);
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
      <CustomInput
        digitsQuantityAllowed={8}
        label="Bin"
        value={bin}
        placeholder="números binários..."
        type="text"
        onChange={handleBin}
      />
      <p>Output: {bin}</p>
      <ToastContainer />
    </>
  );
}

export default App;
