"use client";

import { useFormState } from "react-dom";

import { z } from "zod";

import { addHotel } from "@/lib/action";
import { Button } from "@nextui-org/button";
import Input from "../Input";

export type AddHotelFormData = {
  hotel_name: string;
  hotel_address: string;
};

type AddHotelFormState = {
  errors?: {
    hotel_name?: string[];
    hotel_address?: string[];
  };
  message?: string | null;
};
export const AddHotelFormSchema = z.object({
  id: z.string(),
  hotel_name: z
    .string({
      invalid_type_error: "Please enter hotel name",
    })
    .min(5, "Hotel Name must exceed 5 characters"),
  hotel_address: z
    .string({
      invalid_type_error: "Please enter hotel address",
    })
    .min(5, "Hotel Address must exceed 5 characters"),
});

const INITIAL_STATE: AddHotelFormState = {};

async function handleSubmit(prevState: any, formData: FormData) {
  const CreateHotel = AddHotelFormSchema.omit({ id: true });
  const validatedFields = CreateHotel.safeParse({
    hotel_name: formData.get("hotel_name")?.toString(),
    hotel_address: formData.get("hotel_address")?.toString(),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid Input: failed to add hotel",
    };
  }

  // Add Hotel to firebase
  await addHotel(validatedFields.data);
}

export default function AddHotelForm() {
  const [formState, formAction] = useFormState(handleSubmit, INITIAL_STATE);
  return (
    <form action={formAction}>
      <Input inputtitle="Hotel Name" name="hotel_name" wrapperclass=" mb-5" />
      <Input
        inputtitle="Hotel Address"
        name="hotel_address"
        wrapperclass=" mb-2"
      />
      <h5 className="text-[#1829BE] cursor-pointer">Pin Location in Map</h5>
      <Button type="submit">Submit Button</Button>
    </form>
  );
}
