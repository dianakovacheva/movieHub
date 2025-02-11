import Link from "next/link";
import { logout } from "../../app/actions/auth";
import { auth } from "../../auth";

export default async function AuthButton() {
  const session = await auth();

  return !session?.user?.id ? (
    <div>
      <Link href={"/login"} className="btn">
        Login
      </Link>
    </div>
  ) : (
    <div>
      <button onClick={logout} className="btn">
        Logout
      </button>
    </div>
  );
}
