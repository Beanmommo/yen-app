"use client";

import { useFormState } from "react-dom";
import InputText from "./InputText";
import { sampleCall } from "@/data/actions/sample-api-call/sample-api-call";
import { ZodErrors } from "./custom/ZodErrors";
import AdminButton from "./custom/AdminButton";

interface AdminFormExampleProp {
  apiCall: (formData: FormData) => void;
}

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

const AdminFormExample: React.FunctionComponent<AdminFormExampleProp> = (
  prop: AdminFormExampleProp,
) => {
  const [formState, formAction] = useFormState(sampleCall, INITIAL_STATE);
  console.log(formState);
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
