"use client";
import { NAV_ROUTE } from "@/app/admin/const";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useFormState } from "react-dom";
import * as v from "valibot";

const INITIAL_STATE: { [index: string]: any } = {};

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
  console.log(field);
  return prevState;
}

export default function AddFormSection() {
  const [formState, formAction] = useFormState(handleSubmit, INITIAL_STATE);
  return (
    <form action={formAction}>
      <Input
        type="text"
        label="HOTEL NAME"
        name="hotel_name"
        className="my-4"
        radius="sm"
      />
      <Input
        type="text"
        label="HOTEL ADDRESS"
        name="hotel_address"
        className="mb-4"
        radius="sm"
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
        <Button className="my-4" color="primary" type="submit">
          Add Hotel
        </Button>
      </div>
    </form>
  );
}
