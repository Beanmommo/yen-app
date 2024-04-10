import AdminFormExample from "@/components/AdminFormExample";
import ClientHeader from "@/components/ClientHeader";
import apiCall from "@/components/server/sampleApiCall";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ClientHeader />
      <AdminFormExample />
    </main>
  );
}
