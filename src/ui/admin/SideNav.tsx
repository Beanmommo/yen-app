import React from "react";
import SideNavItem from "./SideNavItem";

interface SideNavProp {
  route: { name: string; link: string }[];
}

const SideNav: React.FunctionComponent<SideNavProp> = (prop: SideNavProp) => {
  return (
    <ul className=" border-t border-x border-[#DDDDDD]">
      {prop.route.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <SideNavItem name={item.name} link={item.link} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default SideNav;
