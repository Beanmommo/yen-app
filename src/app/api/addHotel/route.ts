import { db } from "@/lib/firebase/firebase";
import { ref, set } from "firebase/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    set(ref(db, "hotel/" + "testhotel1"), {
      hotelname: "Test Hotel",
      address: "11 Federeation Road",
    });
  } catch (error) {
    throw new Error("Database Failed: failed to add hotel");
  }

  return NextResponse.json({
    message: "success",
  });
}
