import React from "react";
import AdminSideNavItem from "../AdminSideNavItem";

interface AdminSideNavProp {
  route: { name: string; link: string }[];
}

const AdminSideNav: React.FunctionComponent<AdminSideNavProp> = (
  prop: AdminSideNavProp,
) => {
  return (
    <ul>
      {prop.route.map((item) => {
        return (
          <React.Fragment key={item.name}>
            <AdminSideNavItem name={item.name} link={item.link} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default AdminSideNav;
