"use server";
import { Hotel } from "@/lib/definitions";
import { db } from "@/lib/firebase/firebase";
import { randomUUID } from "crypto";
import { child, get, ref, set } from "firebase/database";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const url = new URL(req.url);
  const searchParam = new URLSearchParams(url.searchParams);
  const searchedId = searchParam.get("id") ?? null;

  let firebasePath = "hotel"; // get all hotel if id param is not specified
  if (searchedId != null) {
    firebasePath = `hotel/${searchedId}`;
  }
  let hotelList = {};
  const dbRef = ref(db);
  await get(child(dbRef, firebasePath))
    .then((snapshot) => {
      if (snapshot.exists()) {
        hotelList = snapshot.val();
      }
    })
    .catch((error) => {
      throw new Error("Database failed: Failed to get hotel data");
    });

  return NextResponse.json(hotelList);
};

export const POST = async (req: Request) => {
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
};

export const DELETE = async (req: any) => {
  const url = new URL(req.url);
  const searchParam = new URLSearchParams(url.searchParams);
  const deleteId = searchParam.get("id") ?? null;
  const firebasePath = `hotel/${deleteId}`;
  try {
    set(ref(db, firebasePath), null);
  } catch (error) {
    throw new Error(
      `Database Error: ${error}, failed to delete Hotel with id:${deleteId}`,
    );
  }

  return NextResponse.json({
    message: `Hotel with id:${deleteId} has been deleted`,
  });
};
