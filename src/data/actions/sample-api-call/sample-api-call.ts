"use server";
import { z } from "zod";
import { validateHotelField } from "../../schema/hotelValidation";

const schemaRegister = z.object({
  hotelName: z.string().min(5, {
    message: "Hotel Name must exceed 5 characters",
  }),
});

export async function sampleCall(prevState: any, formData: FormData) {
  console.log("Initiationg sample call");

  const field = {
    hotelName: (formData.get("hotelName") as string).toLowerCase(),
  };

  console.log(validateHotelField(field));
  const validatedFields = schemaRegister.safeParse(field);

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid Fields. Failed to add Hotel",
    };
  }

  //Handle api call
  await fetch("http://localhost:3000/api/hotel", {
    method: "POST",
    body: JSON.stringify(field),
  });

  return {
    ...prevState,
    data: "ok",
    zodErrors: null,
    message: null,
  };
}
