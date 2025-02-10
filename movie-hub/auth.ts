import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import saltAndHashPassword from "./app/utils/password";
import getUserFromDb from "./app/actions/user";
import { LoginFormSchema } from "./app/actions/definitions";
import { ZodError } from "zod";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./app/db";
import { authConfig } from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await LoginFormSchema.parseAsync(
            credentials
          );

          // logic to salt and hash password
          const pwHash = saltAndHashPassword(password);

          // logic to verify if the user exists
          user = await getUserFromDb(email, password);

          if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.");
          }

          // return user object with their profile data

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: DrizzleAdapter(db),
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id as string;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
});
