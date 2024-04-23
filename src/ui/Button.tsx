import { ButtonHTMLAttributes } from "react";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FunctionComponent<ButtonProp> = (prop: ButtonProp) => {
  return (
    <button
      {...prop}
      className="py-4 min-w-52 px-7 enabled:text-white enabled:bg-[#0013BA] uppercase text-sm rounded-[40px] border enabled:border-[#0013BA]  transition-all enabled:active:outline enabled:active:outline-offset-1 enabled:active:outline-[#0013BA] disabled:border-[#848484] disabled:text-[#848484]"
    >
      {prop.children}
    </button>
  );
};

export default Button;
