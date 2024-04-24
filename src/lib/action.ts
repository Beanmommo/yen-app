import { Hotel } from "./definitions";
import { AddHotelFormData } from "@/ui/hotel/AddHotelForm";

export async function setHotel() {
  const res = await fetch("/api/addHotel");

  //   if (!res.ok) {
  //     throw new Error("Failed to set Hotel");
  //   }
  //   return res.json;
  console.log("Set Hotel..");
}

export async function addHotel(hotelFormData: AddHotelFormData) {
  const data: Hotel = {
    id: "",
    hotel_name: hotelFormData.hotel_name,
    hotel_address: hotelFormData.hotel_address,
    hotel_about: "",
    cover_image_url: null,
    hotel_images_url: null,
  };

  try {
    await fetch("/api/addHotel", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {}
}
