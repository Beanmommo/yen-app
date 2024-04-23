import type { Metadata } from "next";
import "../globals.css";
import Header from "@/ui/admin/Header";
import SideNav from "@/ui/admin/SideNav";
import { montserrat } from "../fonts";

export const metadata: Metadata = {
  title: "Malamini",
  description: "Karena besok malam belum tentu sama",
};

const routes = {
  route: [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      name: "Hotel List",
      link: "/admin/hotelList",
    },
  ],
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${montserrat.className} bg-[#FAFAFA]`}>
      <Header />
      <div className=" grid grid-flow-col grid-cols-3 max-w-7xl mx-auto px-8 gap-7 mt-16">
        <SideNav route={routes.route} />
        <div className=" col-span-2">{children}</div>
      </div>
    </body>
  );
}
