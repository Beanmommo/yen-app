import { z } from "zod";

type Hotel = {
  hotelName: string;
};

const schemaRegister = z.object({
  hotelName: z.string().min(5, {
    message: "Hotel Name must exceed 5 characters",
  }),
});

export function validateHotelField(field: Hotel) {
  const validatedFields = schemaRegister.safeParse(field);

  if (!validatedFields.success) {
    return {
      validateSuccess: validatedFields.success,
      zodErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    validateSuccess: validatedFields.success,
  };
}
