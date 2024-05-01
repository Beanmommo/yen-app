import { montserrat } from "../fonts";
import "../globals.css";
import AdminNavBar from "@/ui/admin/AdminNavBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={montserrat.className}>
      <AdminNavBar />
      <div className=" mx-6 grid grid-cols-1 justify-items-center ">
        <div className=" max-w-5xl w-full">{children}</div>
      </div>
    </main>
  );
}
