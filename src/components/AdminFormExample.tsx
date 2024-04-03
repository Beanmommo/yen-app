"use client";

import { useFormState } from "react-dom";
import InputText from "./InputText";
import { sampleCall } from "@/data/actions/sample-api-call/sample-api-call";
import { ZodErrors } from "./custom/ZodErrors";

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
        <InputText name="hotelName" placeholder="Hotel Name" />
        <ZodErrors error={formState?.zodErrors?.hotelName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AdminFormExample;
