"use client";
import { NAV_ROUTE } from "@/app/admin/const";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";

type AddHotelForm = {
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

function handleSubmit(prevState: any, formData: FormData) {
  const field = {
    hotel_name: formData.get("hotel_name")?.toString(),
    hotel_address: formData.get("hotel_address")?.toString(),
  };

  const validatedResult = v.safeParse(AddHotelSchema, field);

  if (validatedResult.success) {
    const hotelData = validatedResult.output;
  } else {
    prevState = {
      ...prevState,
      v_errors: v.flatten<typeof AddHotelSchema>(validatedResult.issues).nested,
    };
  }
  return prevState;
}

export default function AddFormSection() {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<AddHotelForm>({
    mode: "onBlur",
    resolver: valibotResolver(AddHotelSchema),
  });
  return (
    <form onSubmit={(d) => console.log(d)}>
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
          isDisabled={!isValid}
        >
          Add Hotel
        </Button>
      </div>
    </form>
  );
}
