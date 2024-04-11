import { ButtonHTMLAttributes } from "react";

interface AdminButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string;
  disabled: boolean;
}

const AdminButton: React.FunctionComponent<AdminButtonProp> = (
  prop: AdminButtonProp,
) => {
  return (
    <button
      className=" py-4 min-w-52 px-7 enabled:text-white enabled:bg-[#0013BA] uppercase text-sm rounded-[40px] border enabled:border-[#0013BA]  transition-all enabled:active:outline enabled:active:outline-offset-1 enabled:active:outline-[#0013BA] disabled:border-[#848484] disabled:text-[#848484]"
      disabled={prop.disabled}
    >
      {prop.buttonTitle}
    </button>
  );
};

export default AdminButton;
