"use server";

import { db } from "../db/index";
import { users } from "../db/schema";
import { FormState, LoginFormSchema, SignUpFormSchema } from "./definitions";
import { genSaltSync, hashSync, compare } from "bcrypt-ts";
// import { createSession, deleteSession } from "./stateless_session";
import { eq } from "drizzle-orm";
import { signIn, signOut } from "../../auth";
import { redirect } from "next/navigation";

// Sign Up
export async function signUp(
  // state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = SignUpFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data;

  // 3. Check if user already exists
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  // Hash password and save user
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  // 4. Insert the user into the database
  const data = await db
    .insert(users)
    .values({
      email,
      password: hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    throw new Error("Failed to create user.");
  }

  // Automatically sign in the user
  const result = await signIn("credentials", {
    ...Object.fromEntries(formData),
    redirect: true,
    redirectTo: "/",
  });

  return result; // Return result for error handling
}

// Login
export async function login(formData: FormData): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const result = await signIn("credentials", {
    ...Object.fromEntries(formData),
    redirect: true,
    redirectTo: "/",
  });

  return result; // Return result for error handling
}

// Logout
export async function logout() {
  await signOut({ redirect: true, redirectTo: "/login" });
}
