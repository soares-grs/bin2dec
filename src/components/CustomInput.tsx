import { ChangeEventHandler } from "react";

interface CustomInputProps {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  digitsQuantityAllowed: number;
  onChange: ChangeEventHandler;
}

export function CustomInput(props: CustomInputProps) {
  return (
    <>
      <p>{props.label}</p>
      <input
        value={props.value}
        type="text"
        maxLength={props.digitsQuantityAllowed}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}
