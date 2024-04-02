import AdminFormExample from "@/components/AdminFormExample";
import ClientHeader from "@/components/ClientHeader";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ClientHeader />
      <AdminFormExample />
    </main>
  );
}
