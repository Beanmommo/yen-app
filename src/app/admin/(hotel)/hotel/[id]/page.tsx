"use client";
import { useHotelById } from "@/lib/action";

export default function Page({ params }: { params: { id: string } }) {
  const [data, error, isLoading] = useHotelById(params.id);

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Hotel view edit page: {params.id}</h1>
      <p>{data.hotel_name}</p>
      <p>{data.hotel_address}</p>
    </div>
  );
}
