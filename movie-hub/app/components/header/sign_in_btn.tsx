import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex-none">
      <Link href={"/sign-in"} className="btn">
        Sign In
      </Link>
    </div>
  );
}
