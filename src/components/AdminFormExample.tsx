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
  submitDisabled: true,
};

//Handle form validation and API call
async function handleValidation(prevState: any, formData: FormData) {
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
      submitDisabled: true,
    };
  }

  return {
    ...prevState,
    data: "OK",
    zodErrors: null,
    message: null,
    submitDisabled: false,
  };
}

const AdminFormExample: React.FunctionComponent<AdminFormExampleProp> = (
  prop: AdminFormExampleProp,
) => {
  const [formState, formValidateAction] = useFormState(
    handleValidation,
    INITIAL_STATE,
  );

  function handleOnChange(targetForm: HTMLFormElement) {
    const formData = new FormData(targetForm);
    formValidateAction(formData);
  }

  async function handleOnSubmit(targetForm: HTMLFormElement) {
    const formData = new FormData(targetForm);
    const field: HotelField = {
      hotelName: (formData.get("hotelName") as string).toLowerCase(),
    };
    console.log(field);
    const result = await sampleCall(field);
  }

  return (
    <div>
      <form
        onSubmit={(e) => handleOnSubmit(e.currentTarget)}
        onChange={(e) => handleOnChange(e.currentTarget)}
      >
        <InputText
          inputTitle="Hotel Name"
          name="hotelName"
          placeholder="Enter Hotel Name"
        />
        <ZodErrors error={formState?.zodErrors?.hotelName} />
        <AdminButton
          buttonTitle="Submit"
          type="submit"
          disabled={formState.submitDisabled}
        />
      </form>
    </div>
  );
};
export default AdminFormExample;
