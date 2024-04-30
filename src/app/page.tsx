"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Page() {
  return (
    <div className=" flex gap-2">
      <Link isBlock showAnchorIcon href="/admin">
        Admin
      </Link>
      <Link isBlock showAnchorIcon href="/user">
        User
      </Link>
    </div>
  );
}
