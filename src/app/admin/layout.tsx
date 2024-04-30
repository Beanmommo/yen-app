import "../globals.css";
import AdminNavBar from "@/ui/admin/AdminNavBar";

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
