import { insertUser } from "./db";
import { NewUser } from "./schema";

async function main() {
  const newUser: NewUser = {
    email: "user@example.com",
    password: "123456",
  };

  const res = await insertUser(newUser);
  console.log("Sucessfully seeded users table:", res);
  process.exit();
}

main();
