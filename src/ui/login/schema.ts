import * as v from "valibot";

// Login Form ...
export type LoginForm = {
  email: string;
  password: string;
};

export const LoginSchema = v.object({
  email: v.string("Email must be a string", [
    v.email("Email must be a valid email"),
  ]),
  password: v.string("Password must be a string", [
    v.minLength(5, "Password must have 5 characters or more"),
  ]),
});
