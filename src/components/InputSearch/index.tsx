import { MagnifyingGlass } from "phosphor-react";
import { InputHTMLAttributes } from "react";
import { InputSearchComponent } from "./styles";

type TInputSearch = InputHTMLAttributes<HTMLInputElement>;

export function InputSearch({ ...props }: TInputSearch) {
  return (
    <InputSearchComponent>
      <input {...props} />
      <button type="submit">
        <MagnifyingGlass size={20} />
      </button>
    </InputSearchComponent>
  );
}
