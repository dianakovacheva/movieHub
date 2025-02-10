// import "server-only";

// import type { SessionPayload } from "./definitions";
// import { SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// const secretKey = process.env.SESSION_SECRET;
// const encodedKey = new TextEncoder().encode(secretKey);

// export async function encrypt(payload: SessionPayload) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("7d")
//     .sign(encodedKey);
// }

// export async function decrypt(session: string | undefined = "") {
//   try {
//     const { payload } = await jwtVerify(session, encodedKey, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch (error) {
//     console.log("Failed to verify session");
//     return null;
//   }
// }

// // Create Session
// export async function createSession(userId: string) {
//   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   const session = await encrypt({ userId, expiresAt });
//   const cookieStore = await cookies();

//   cookieStore.set("session", session, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: "lax",
//     path: "/",
//   });

//   redirect("/");
// }

// // Verify Session
// export async function verifySession() {
//   const cookie = (await cookies()).get("session")?.value;
//   const session = await decrypt(cookie);

//   if (!session?.userId) {
//     redirect("/login");
//   }

//   return { isAuth: true, userId: Number(session!.userId) };
// }

// // Update Session: Keeping the user logged in after they access the application again
// export async function updateSession() {
//   const session = (await cookies()).get("session")?.value;
//   const payload = await decrypt(session);

//   if (!session || !payload) {
//     return null;
//   }

//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   const cookieStore = await cookies();

//   cookieStore.set("session", session, {
//     httpOnly: true,
//     secure: true,
//     expires: expires,
//     sameSite: "lax",
//     path: "/",
//   });
// }

// // Delete Session
// export async function deleteSession() {
//   const cookieStore = await cookies();
//   try {
//     cookieStore.delete("session");
//     redirect("/login");
//   } catch (error) {
//     throw error;
//   }
// }
