import "server-only";

import { eq } from "drizzle-orm";
import { db } from "../../drizzle/db";
import { users } from "../../drizzle/schema";
import { cache } from "react";
import { verifySession } from "./stateless_session";

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db.query.users.findMany({
      where: eq(users.id, session.userId),

      // Explicitly return the columns you need rather than the whole user object
      columns: {
        id: true,
        email: true,
      },
    });

    const user = data[0];

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
