import * as v from "valibot";

//Add Hotel Form ...
export type AddHotelForm = {
  hotel_name: string;
  hotel_address: string;
};
export const AddHotelSchema = v.object({
  hotel_name: v.string("Hotel name must be a string", [
    v.minLength(5, "Hotel name must have 5 characters or more"),
  ]),
  hotel_address: v.string("Hotel address must be a string", [
    v.minLength(5, "Hotel address must have 5 characters or more"),
  ]),
});

// View Edit Form ...
export type EditHotelForm = {
  hotel_name: string;
  cover_image_url: string;
  hotel_address: string;
  hotel_about: string;
  hotel_images_url: string;
};

export const EditHotelSchema = v.object({
  hotel_name: v.string("Hotel name must be a string", [
    v.minLength(5, "Hotel name must have 5 characters or more"),
  ]),
  cover_image_url: v.string(),
  hotel_address: v.string("Hotel address must be a string", [
    v.minLength(5, "Hotel address must have 5 characters or more"),
  ]),
  hotel_about: v.string(),
});
