import { Hotel } from "@/lib/definitions";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditHotelSchema, EditHotelForm } from "./schema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Textarea } from "@nextui-org/input";
import PinLocation from "../PinLocation";

export default function EditFormSection({ hotelData }: { hotelData: Hotel }) {
  const { register, handleSubmit } = useForm<EditHotelForm>({
    mode: "onBlur",
    resolver: valibotResolver(EditHotelSchema),
  });
  const onSubmit: SubmitHandler<EditHotelForm> = async (data) => {
    console.log("submitting");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" text-sm">HOTEL LIST {">"} HOTEL SANTIOK</div>
        <InputBorder>
          <Textarea
            label="HOTEL NAME"
            labelPlacement="outside"
            variant="bordered"
            value={hotelData.hotel_name}
            {...register("hotel_name")}
          />
          <div className=" pt-4">
            <PinLocation />
          </div>
        </InputBorder>
        <InputBorder>
          <Textarea
            label="HOTEL ADDRESS"
            labelPlacement="outside"
            variant="bordered"
            value={hotelData.hotel_address}
            {...register("hotel_address")}
          />
        </InputBorder>
        <InputBorder>
          <Textarea
            labelPlacement="outside"
            variant="bordered"
            // value={hotelData.hotel_about ? "" : hotelData.hotel_about}
            label={`ABOUT ${hotelData.hotel_name.toUpperCase()}`}
            {...register("hotel_about")}
          />
        </InputBorder>
      </form>
    </div>
  );
}

function InputBorder({ children }: { children?: React.ReactNode }) {
  return <div className=" py-6 px-7 border my-8">{children}</div>;
}
