import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AdminHeader from "@/components/custom/AdminHeader";
import AdminSideNav from "@/components/custom/AdminSideNav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malamini",
  description: "Karena besok malam belum tentu sama",
};

const routes = {
  route: [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Hotel Detail",
      link: "/hotelDetail",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#FAFAFA]`}>
        <AdminHeader />
        <div className=" grid grid-flow-col grid-cols-3 max-w-7xl mx-auto px-8 gap-7 mt-16">
          <AdminSideNav route={routes.route} />
          <div className=" col-span-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
