import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";

export type NavigationData = {
  label: string;
  link: string;
  items?: { title: string; link: string }[];
};

export default function AdminNavItem({
  navigationData,
}: {
  navigationData: NavigationData;
}) {
  if (navigationData.items) {
    return (
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              endContent="^"
              radius="sm"
              variant="light"
            >
              {navigationData.label}
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label={`Malamini ${navigationData.label}`}
          className=" w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          {navigationData.items.map((navItem) => (
            <DropdownItem key={navItem.title} href={navItem.link}>
              {navItem.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <NavbarItem>
      <Button
        disableRipple
        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
        radius="sm"
        variant="light"
        as={Link}
        href={navigationData.link}
      >
        {navigationData.label}
      </Button>
    </NavbarItem>
  );
}
