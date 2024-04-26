"use server";
import { Hotel } from "@/lib/definitions";
import { db } from "@/lib/firebase/firebase";
import { randomUUID } from "crypto";
import { ref, set } from "firebase/database";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const hotelData: Hotel = await req.json();
  hotelData.id = randomUUID();

  try {
    set(ref(db, "hotel/" + hotelData.id), hotelData);
  } catch (error) {
    throw new Error(`Database Error: ${error}, failed to add hotel`);
  }

  return NextResponse.json({
    id: hotelData.id,
    message: "hotel created very nice",
  });
}
