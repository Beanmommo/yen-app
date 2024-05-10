"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";

import { LoginForm, LoginSchema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginFormSection() {
  const { register, handleSubmit } = useForm<LoginForm>({
    mode: "onBlur",
    resolver: valibotResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    console.log("submitting");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>Ligma login balls form</form>
    </div>
  );
}
