import { MagnifyingGlass } from "phosphor-react";
import { InputHTMLAttributes } from "react";
import { InputComponent } from "./styles";

type TInput = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: TInput) {
  return (
    <InputComponent>
      <input {...props} />
      <button type="submit">
        <MagnifyingGlass size={20} />
      </button>
    </InputComponent>
  );
}
