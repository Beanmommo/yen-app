import AdminFormExample from "@/components/AdminFormExample";
import ClientHeader from "@/components/ClientHeader";
import apiCall from "@/components/server/sampleApiCall";
import Image from "next/image";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
