import { Metadata } from "next";
import { Providers } from "./providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Malamini",
  description: "Karena besok malam belum tentu sama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
