"use server";
import { Hotel } from "@/lib/definitions";
import { db } from "@/lib/firebase/firebase";
import { randomUUID } from "crypto";
import { ref, set } from "firebase/database";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // try {
  //   set(ref(db, "hotel/" + "testhotel2"), {
  //     id: randomUUID(),
  //     hotelname: "pukimak hotel",
  //     address: "Lmao federation road",
  //   });
  // } catch (error) {
  //   throw new Error("Database Failed: failed to add hotel");
  // }

  // return NextResponse.json({
  //   message: "success",
  // });
  console.log("deni");
}

export async function POST(req: Request) {
  const hotelData: Hotel = await req.json();
  console.log(hotelData);

  return NextResponse.json({
    message: "Very nice",
  });
}
