import "../globals.css";

import AdminNavBar from "@/ui/admin/AdminNavBar";

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
    <main>
      <AdminNavBar />
      <div>{children}</div>
    </main>
  );
}
