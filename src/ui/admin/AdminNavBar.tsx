"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import { useState } from "react";
import AdminNavItem, { NavigationData } from "./AdminNavItem";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function AdminNavBar() {
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
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        maxWidth={`full`}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden "
          ></NavbarMenuToggle>
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className=" hidden sm:flex gap-4" justify="center">
          {navigationData.map((navigation) => (
            <AdminNavItem key={navigation.label} navigationData={navigation} />
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
