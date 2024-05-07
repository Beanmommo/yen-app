"use client";
import { useHotelById } from "@/lib/action";
import EditFormSection from "@/ui/hotel/EditFormSection";
import ViewHotel from "@/ui/hotel/ViewHotel";

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
      <ViewHotel hotelData={data} />
    </div>
  );
}
