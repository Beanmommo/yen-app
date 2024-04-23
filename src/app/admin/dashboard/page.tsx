"use client";

import { setHotel } from "@/lib/action";
import PageHeading from "@/ui/PageHeading";

export default function Page() {
  return (
    <div>
      <PageHeading headingTitle="Dashboard" />
      <button onClick={setHotel}>Click me lmao</button>
    </div>
  );
}
