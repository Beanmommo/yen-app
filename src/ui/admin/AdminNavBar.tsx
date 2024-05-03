"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import { useState } from "react";
import AdminNavItem, { NavigationData } from "./AdminNavItem";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { NAV_ROUTE } from "@/app/admin/const";

export default function AdminNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationData: NavigationData[] = [
    {
      label: "Home",
      link: NAV_ROUTE.DASHBOARD,
    },
    {
      label: "Manage",
      link: "#",
      items: [
        {
          title: "Hotel",
          link: NAV_ROUTE.HOTEL.HOME,
        },
        {
          title: "Room Promo",
          link: NAV_ROUTE.PROMO.HOME,
        },
        {
          title: "Banner",
          link: NAV_ROUTE.BANNER.HOME,
        },
      ],
    },
    {
      label: "View",
      link: "#",
      items: [
        {
          title: "Booking",
          link: NAV_ROUTE.BOOKING.HOME,
        },
        {
          title: "Invoice",
          link: NAV_ROUTE.INVOICE.HOME,
        },
        {
          title: "Report",
          link: NAV_ROUTE.REPORT.HOME,
        },
      ],
    },
    {
      label: "Setting",
      link: NAV_ROUTE.SETTING.HOME,
    },
  ];

  const menuNavigationData = [
    {
      label: "Home",
      link: NAV_ROUTE.DASHBOARD,
    },
    {
      label: "Hotel",
      link: NAV_ROUTE.HOTEL.HOME,
    },
    {
      label: "Room Promo",
      link: NAV_ROUTE.PROMO.HOME,
    },
    {
      label: "Banner",
      link: NAV_ROUTE.BANNER.HOME,
    },
    {
      label: "Booking",
      link: NAV_ROUTE.BOOKING.HOME,
    },
    {
      label: "Invoice",
      link: NAV_ROUTE.INVOICE.HOME,
    },
    {
      label: "Report",
      link: NAV_ROUTE.REPORT.HOME,
    },
    {
      label: "Setting",
      link: NAV_ROUTE.SETTING.HOME,
    },
  ];
  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        shouldHideOnScroll
        maxWidth={"2xl"}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden "
          ></NavbarMenuToggle>
          <NavbarBrand>
            <p className="font-bold text-inherit">Malamini</p>
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

        <NavbarMenu>
          {menuNavigationData.map((navigation) => (
            <NavbarMenuItem key={navigation.label}>
              <Link
                className=" w-full"
                color="foreground"
                href={navigation.link}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {navigation.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
