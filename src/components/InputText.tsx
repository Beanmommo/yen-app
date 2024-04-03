import { InputHTMLAttributes } from "react";

interface InputTextProp extends InputHTMLAttributes<HTMLInputElement> {}

const InputText: React.FunctionComponent<InputTextProp> = (
  prop: InputTextProp,
) => {
  return <input type="text" name={prop.name} placeholder={prop.placeholder} />;
};

export default InputText;
