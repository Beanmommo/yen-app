import { AddHotelForm } from "@/ui/hotel/AddFormSection";
import { Hotel } from "./definitions";
import useSWR from "swr";

import { API_ROUTE } from "@/app/api/const";
import { addQueryToUrl } from "./utils";

const fetcher = (url: string, body?: any) =>
  fetch(url, body).then((res) => res.json()); // client-side fetch

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
    const res = await fetch(API_ROUTE.HOTEL, {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {}
}

export async function getHotel() {
  const res = await fetch(API_ROUTE.HOTEL, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Database Error: failed to get Hotel");
  }
  return res.json();
}

// client side hotel-dashboard
export function useHotel() {
  const { data, error, isLoading } = useSWR(API_ROUTE.HOTEL, fetcher);
  return [data, error, isLoading];
}

export function useHotelById(id: string) {
  const fetchUrl = addQueryToUrl(API_ROUTE.HOTEL, "id", id);
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  return [data, error, isLoading];
}

// client side hotel/[id]
// export function useHotelById(id: string) {
//   const { data, error, isLoading } = useSWR(
//     "http://localhost:3000/api/getHotelbyId",
//     {},
//     fetcher,
//   );

//   return [data, error, isLoading];
// }
