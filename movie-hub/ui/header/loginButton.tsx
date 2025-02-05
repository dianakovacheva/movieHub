import Link from "next/link";

export default function LoginButton() {
  return (
    <div className="flex-none">
      <Link href={"/login"} className="btn">
        Login
      </Link>
    </div>
  );
}
