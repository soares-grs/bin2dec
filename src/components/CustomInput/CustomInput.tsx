import { ChangeEventHandler } from "react";
import "./CustomInput.css";

interface CustomInputProps {
  type: string;
  placeholder?: string;
  label: string;
  value: string;
  digitsQuantityAllowed: number;
  onChange: ChangeEventHandler;
}

export function CustomInput(props: CustomInputProps) {
  return (
    <>
      <div className="input-field-container">
        <p className="label">{props.label}</p>
        <input
          className="input"
          value={props.value}
          type="text"
          maxLength={props.digitsQuantityAllowed}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </>
  );
}
