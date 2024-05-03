import { AddHotelForm } from "@/ui/hotel/AddFormSection";
import { Hotel } from "./definitions";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json()); // client-side fetch

export async function postHotel(hotelFormData: AddHotelForm) {
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

// client side hotel-dashboard
export function useHotel() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/getHotel",
    fetcher,
  );

  return [data, error, isLoading];
}
