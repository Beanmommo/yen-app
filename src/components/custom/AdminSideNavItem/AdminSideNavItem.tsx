import Link from "next/link";

interface AdminSideNavItemProp {
  name: string;
  link: string;
}

const AdminSideNavItem: React.FunctionComponent<AdminSideNavItemProp> = (
  prop: AdminSideNavItemProp,
) => {
  return (
    <Link href={prop.link}>
      <li className=" uppercase py-5 pl-7 hover:bg-[#0013BA] hover:text-white hover:cursor-pointer transition-all border border-[#DDDDDD] text-lg tracking-wide text-[#666666] bg-white">
        {prop.name}
      </li>
    </Link>
  );
};

export default AdminSideNavItem;
