import { InputHTMLAttributes } from "react";
import { ZodErrors } from "./custom/ZodErrors";

interface InputTextProp extends InputHTMLAttributes<HTMLInputElement> {
  inputTitle: string;
}

const InputText: React.FunctionComponent<InputTextProp> = (
  prop: InputTextProp,
) => {
  return (
    <div className=" grid grid-flow-row ">
      <label htmlFor={prop.name} className=" uppercase text-[#666666] pb-5">
        {prop.inputTitle}
      </label>
      <input
        className=" border-[#cccccc] border py-3 px-5 placeholder-[#aaaaaa] uppercase text-[#666666] rounded focus:outline-[#717171]"
        type="text"
        name={prop.name}
        placeholder={prop.placeholder}
      />
    </div>
  );
};

export default InputText;
