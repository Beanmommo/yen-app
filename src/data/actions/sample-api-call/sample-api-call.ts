"use server";
import { HotelField } from "../../schema/hotelValidation";

export async function sampleCall(field: HotelField)
{
  //Handle api call
  const response = await fetch("http://localhost:3000/api/hotel", {
    method: "POST",
    body: JSON.stringify(field),
  });

}
