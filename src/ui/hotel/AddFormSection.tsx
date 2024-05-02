"use client";
import { NAV_ROUTE } from "@/app/admin/const";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";

import { postHotel } from "@/lib/action";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

export type AddHotelForm = {
  hotel_name: string;
  hotel_address: string;
};
const AddHotelSchema = v.object({
  hotel_name: v.string("Hotel name must be a string", [
    v.minLength(5, "Hotel name must have 5 characters or more"),
  ]),
  hotel_address: v.string("Hotel address must be a string", [
    v.minLength(5, "Hotel address must have 5 characters or more"),
  ]),
});

export default function AddFormSection() {
  const {
    register,
    formState: { isValid, errors, isSubmitting },
    handleSubmit,
  } = useForm<AddHotelForm>({
    mode: "onBlur",
    resolver: valibotResolver(AddHotelSchema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<AddHotelForm> = async (data) => {
    await postHotel(data);
    router.push(NAV_ROUTE.HOTEL.HOME);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="HOTEL NAME"
        className="my-4"
        radius="sm"
        {...register("hotel_name")}
        isInvalid={errors.hotel_name ? true : false}
        errorMessage={errors.hotel_name?.message}
      />
      <Input
        type="text"
        label="HOTEL ADDRESS"
        className="mb-4"
        radius="sm"
        {...register("hotel_address")}
        isInvalid={errors.hotel_address ? true : false}
        errorMessage={errors.hotel_address?.message}
      />
      <h5 className="text-primary cursor-pointer">Pin Location in Map</h5>
      <div className="grid gap-4 grid-cols-2 max-w-60 mt-4">
        <Button
          as={Link}
          href={NAV_ROUTE.HOTEL.HOME}
          variant="bordered"
          className=" my-4"
        >
          Cancel
        </Button>

        <Button
          className="my-4"
          color="primary"
          type="submit"
          isDisabled={!isValid && !isSubmitting}
          isLoading={isSubmitting}
        >
          Add Hotel
        </Button>
      </div>
    </form>
  );
}
