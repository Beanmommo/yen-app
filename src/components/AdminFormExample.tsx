// "use client";

// import { useFormState } from "react-dom";
// import InputText from "./InputText";
// import { sampleCall } from "@/data/actions/sample-api-call/sample-api-call";
// import { ZodErrors } from "./custom/ZodErrors";
// import AdminButton from "./custom/AdminButton";
// import { HotelField, HotelSchemaRegister } from "@/data/schema/hotelValidation";
// import { useState } from "react";

// interface AdminFormExampleProp {}

// const INITIAL_STATE = {
//   data: null,
//   zodErrors: null,
//   message: null,
//   submitDisabled: true,
// };

// const FIELD_STATE = {
//   hotelName: "",
// };

// function handleValidation(prevState: any, formData: FormData) {
//   const field: HotelField = {
//     hotelName: (formData.get("hotelName") as string).toLowerCase(),
//   };

//   const validatedFields = HotelSchemaRegister.safeParse(field);

//   if (!validatedFields.success) {
//     return {
//       ...prevState,
//       data: null,
//       zodErrors: validatedFields.error.flatten().fieldErrors,
//       message: "Could not create",
//       submitDisabled: true,
//     };
//   }

//   return {
//     ...prevState,
//     data: "OK",
//     zodErrors: null,
//     message: null,
//     submitDisabled: false,
//   };
// }

// const AdminFormExample: React.FunctionComponent<AdminFormExampleProp> = (
//   prop: AdminFormExampleProp,
// ) => {
//   const [formState, formValidateAction] = useFormState(
//     handleValidation,
//     INITIAL_STATE,
//   );
//   const [submitState, submitAction] = useFormState(handleSubmit, FIELD_STATE);
//   const [isLoading, setIsLoading] = useState(false);

//   async function handleSubmit(prevState: HotelField, formData: FormData) {
//     setIsLoading(true);
//     const field = {
//       ...prevState,
//       hotelName: (formData.get("hotelName") as string).toLowerCase(),
//     };

//     try {
//       const response = await sampleCall(field);
//     } catch (error) {
//     } finally {
//       setIsLoading(false);
//     }
//     return field;
//     // const result = await sampleCall(field);
//     // console.log(result);
//   }

//   function handleOnChange(targetForm: HTMLFormElement) {
//     const formData = new FormData(targetForm);
//     formValidateAction(formData);
//   }

//   return (
//     <div>
//       <form
//         action={submitAction}
//         onChange={(e) => handleOnChange(e.currentTarget)}
//       >
//         <InputText
//           inputTitle="Hotel Name"
//           name="hotelName"
//           placeholder="Enter Hotel Name"
//         />
//         <ZodErrors error={formState?.zodErrors?.hotelName} />
//         <AdminButton type="submit" disabled={formState.submitDisabled}>
//           {isLoading ? "Submitting..." : "Submit"}
//         </AdminButton>
//       </form>
//     </div>
//   );
// };
// export default AdminFormExample;
