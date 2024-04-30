"use client";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { DropdownSection } from "@nextui-org/react";
import { link } from "fs";
import { useState } from "react";
import AdminNavItem, { NavigationData } from "./AdminNavItem";

export default function AdminNavBar({
  wrapperClass,
}: {
  wrapperClass?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationData: NavigationData[] = [
    {
      label: "Home",
      link: "/admin/dashboard",
    },
    {
      label: "Manage",
      link: "#",
      items: [
        {
          title: "Hotel",
          link: "#",
        },
        {
          title: "Room Promo",
          link: "#",
        },
        {
          title: "Banner",
          link: "#",
        },
      ],
    },
    {
      label: "View",
      link: "#",
      items: [
        {
          title: "Booking",
          link: "#",
        },
        {
          title: "Invoice",
          link: "#",
        },
        {
          title: "Report",
          link: "#",
        },
      ],
    },
    {
      label: "Setting",
      link: "#",
    },
  ];
  return (
    <div className={wrapperClass}>
      <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
        <NavbarBrand>
          <p className=" font-bold text-primary-800">Malamini</p>
        </NavbarBrand>
        <NavbarContent className=" sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          ></NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className=" hidden sm:flex gap-4 " justify="center">
          {navigationData.map((navigation) => (
            <AdminNavItem key={navigation.label} navigationData={navigation} />
          ))}
        </NavbarContent>
      </Navbar>
    </div>
  );
}
