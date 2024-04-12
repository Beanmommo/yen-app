import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AdminHeader from "@/components/custom/AdminHeader";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malamini",
  description: "Karena besok malam belum tentu sama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AdminHeader />
        {children}
      </body>
    </html>
  );
}
