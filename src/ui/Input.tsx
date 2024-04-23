import { InputHTMLAttributes } from "react";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  inputtitle: string;
  wrapperclass?: string;
}

const Input: React.FunctionComponent<InputProp> = (prop: InputProp) => {
  return (
    <div className={`grid grid-flow-row ${prop.wrapperclass} `}>
      <label htmlFor={prop.id} className=" uppercase text-[#666666] pb-5">
        {prop.inputtitle}
      </label>
      <input
        {...prop}
        className=" border-[#cccccc] border py-3 px-5 placeholder-[#aaaaaa] uppercase text-[#666666] rounded focus:outline-[#717171]"
      />
    </div>
  );
};

export default Input;
