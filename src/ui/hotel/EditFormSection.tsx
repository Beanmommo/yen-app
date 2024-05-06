import { Hotel } from "@/lib/definitions";
import { useForm } from "react-hook-form";
import { EditHotelSchema, EditHotelForm } from "./schema";
import { valibotResolver } from "@hookform/resolvers/valibot";

export default function EditFormSection({ hotelData }: { hotelData: Hotel }) {
  const { register, handleSubmit } = useForm<EditHotelForm>({
    mode: "onBlur",
    resolver: valibotResolver(EditHotelSchema),
  });
  return (
    <div>
      <form>Form</form>
    </div>
  );
}
