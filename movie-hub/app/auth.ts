// import NextAuth from "next-auth";
// import { ZodError } from "zod";
// import Credentials from "next-auth/providers/credentials";
// // Your own logic for dealing with plaintext password strings; be careful!
// import { compare, genSaltSync, hashSync } from "bcrypt-ts";
// import { getUser } from "./auth/user";
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import { db } from "../drizzle/db";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     Credentials({
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       credentials: {
//         email: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         try {
//           let user = null;

//           const { email, password } = await signIn.parseAsync(credentials);

//           // logic to verify if the user exists
//           user = await getUser(email);

//           if (!user) {
//             // No user found, so this is their first attempt to login
//             // Optionally, this is also the place you could do a user registration
//             throw new Error("Invalid credentials.");
//           }

//           const passwordsMatch = await compare(password, user.password);

//           if (passwordsMatch) {
//             // logic to salt and hash password
//             const salt = genSaltSync(10);
//             const hashedPassword = hashSync(password, salt);
//           }
//           return user as any;

//           // return user object with their profile data
//           return user;
//         } catch (error) {
//           if (error instanceof ZodError) {
//             // Return `null` to indicate that the credentials are invalid
//             return null;
//           }
//         }
//       },
//     }),
//   ],
// });

// // export const {
// //   handlers: { GET, POST },
// //   auth,
// //   signIn,
// //   signOut,
// // } = NextAuth({
// //   ...authConfig,
// //   providers: [
// //     Credentials({
// //       async authorize({ email, password }: any) {
// //         const user = await getUser(email);
// //         if (user.length === 0) return null;

// //         const passwordsMatch = await compare(password, user[0].password!);
// //         if (passwordsMatch) return user[0] as any;
// //       },
// //     }),
// //   ],
// // });
