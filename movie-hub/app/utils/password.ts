import { genSaltSync, hashSync } from "bcrypt-ts";

export default function saltAndHashPassword(password: string) {
  const salt = genSaltSync(10);

  // Hash the user's password
  const hashedPassword = hashSync(password, salt);

  return hashedPassword;
}
