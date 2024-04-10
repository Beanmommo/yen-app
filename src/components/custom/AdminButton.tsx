import { ButtonHTMLAttributes } from "react";

interface AdminButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTitle: string;
}

const AdminButton: React.FunctionComponent<AdminButtonProp> = (
  prop: AdminButtonProp,
) => {
  return (
    <button className=" py-4 min-w-52 px-7 text-[#0013BA] uppercase text-sm rounded-[40px] border border-[#0013BA] hover:text-white hover:bg-[#0013BA] transition-all active:outline active:outline-offset-1 active:outline-[#0013BA]">
      {prop.buttonTitle}
    </button>
  );
};

export default AdminButton;
