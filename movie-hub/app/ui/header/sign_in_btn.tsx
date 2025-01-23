import Link from "next/link";

export default function SignIn() {
  return (
    <Link href={"/sign-in"} className="btn">
      Sign In
    </Link>
  );
}
