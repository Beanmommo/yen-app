"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SideNavItemProp {
  name: string;
  link: string;
}

const SideNavItem: React.FunctionComponent<SideNavItemProp> = (
  prop: SideNavItemProp,
) => {
  const pathName = usePathname();
  return (
    <Link href={prop.link}>
      <li
        className={clsx(
          "uppercase py-5 pl-7 transition-all border-spacing-0 border-b border-[#DDDDDD] text-lg tracking-wide text-[#666666] hover:bg-[#0013BA] hover:text-white hover:cursor-pointer",
          {
            "bg-[#0013BA] text-white": pathName == prop.link,
          },
        )}
      >
        {prop.name}
      </li>
    </Link>
  );
};

export default SideNavItem;
