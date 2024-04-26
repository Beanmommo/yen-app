import { db } from "@/lib/firebase/firebase";

import { child, get, ref } from "firebase/database";
import { NextResponse } from "next/server";

export async function GET() {
  let hotelList = {};
  const dbRef = ref(db);
  await get(child(dbRef, "hotel"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        hotelList = snapshot.val();
      }
    })
    .catch((error) => {
      throw new Error(error);
    });

  return NextResponse.json(hotelList);
}
