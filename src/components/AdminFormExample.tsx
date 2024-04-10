"use client";

import { useFormState } from "react-dom";
import InputText from "./InputText";
import { sampleCall } from "@/data/actions/sample-api-call/sample-api-call";
import { ZodErrors } from "./custom/ZodErrors";
import AdminButton from "./custom/AdminButton";
import { HotelField, HotelSchemaRegister } from "@/data/schema/hotelValidation";

interface AdminFormExampleProp {}

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

//Handle form validation and API call
async function handleSampleCall(prevState: any, formData: FormData) {
  const field: HotelField = {
    hotelName: (formData.get("hotelName") as string).toLowerCase(),
  };

  const validatedFields = HotelSchemaRegister.safeParse(field);

  if (!validatedFields.success) {
    return {
      ...prevState,
      data: null,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Could not create",
    };
  }

  const result = await sampleCall(field);

  return {
    ...prevState,
    data: result,
    zodErrors: null,
    message: null,
  };
}

const AdminFormExample: React.FunctionComponent<AdminFormExampleProp> = (
  prop: AdminFormExampleProp,
) => {
  const [formState, formAction] = useFormState(handleSampleCall, INITIAL_STATE);

  return (
    <div>
      <form action={formAction}>
        <InputText
          inputTitle="Hotel Name"
          name="hotelName"
          placeholder="Enter Hotel Name"
        />
        <ZodErrors error={formState?.zodErrors?.hotelName} />
        <AdminButton buttonTitle="Submit" type="submit" />
      </form>
    </div>
  );
};
export default AdminFormExample;
