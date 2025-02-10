import { db } from "../db";
import { eq } from "drizzle-orm";
import { users } from "../db/schema";
import { compare } from "bcrypt-ts";

export default async function getUserFromDb(
  email: string,
  hashPassword: string
) {
  if (!email || !hashPassword) return null;

  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user?.password) return null;

  const passwordMatch = await compare(hashPassword, user.password);

  if (!passwordMatch) return null;

  return {
    id: user.id,
    email: user.email,
  };
}
