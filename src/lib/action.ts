import { Hotel } from "./definitions";
import { AddHotelFormData } from "@/ui/hotel/AddHotelForm";

export async function addHotel(hotelFormData: AddHotelFormData) {
  const data: Hotel = {
    id: "",
    hotel_name: hotelFormData.hotel_name,
    hotel_address: hotelFormData.hotel_address,
    hotel_about: null,
    cover_image_url: null,
    hotel_images_url: null,
  };

  try {
    const res = await fetch("/api/addHotel", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {}
}

export async function getHotel() {
  const res = await fetch(process.env.LOCAL_URL + "/api/getHotel", {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Database Error: failed to get Hotel");
  }
  return res.json();
}
