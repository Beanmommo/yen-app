"use client";

import { useFormState } from "react-dom";
import Input from "../Input";
import Button from "../Button";

const INITIAL_STATE = {
  data: null,
  zodError: null,
  message: null,
  submitDisabled: true,
};

function handleSubmit(prevState: any, formData: FormData) {
  console.log("test submit");
  return prevState;
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
