"use client";
import { Hotel } from "@/lib/definitions";
import PageHeader from "../admin/PageHeader";
import EditFormSection from "./EditFormSection";

export default function ViewHotel({ hotelData }: { hotelData: Hotel }) {
  return (
    <div>
      <PageHeader pageTitle={hotelData.hotel_name} />
      <EditFormSection hotelData={hotelData} />
    </div>
  );
}
