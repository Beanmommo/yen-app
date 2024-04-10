import { z } from "zod";

export type HotelField = {
  hotelName: string;
};

export const HotelSchemaRegister = z.object({
  hotelName: z.string().min(5, {
    message: "Hotel Name must exceed 5 characters",
  }),
});
