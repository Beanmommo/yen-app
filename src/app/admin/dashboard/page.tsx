"use client";

import { setHotel } from "@/lib/action";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={setHotel}>Click me lmao</button>
    </div>
  );
}
