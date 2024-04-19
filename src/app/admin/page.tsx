import ClientHeader from "@/components/ClientHeader";

import Image from "next/image";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
