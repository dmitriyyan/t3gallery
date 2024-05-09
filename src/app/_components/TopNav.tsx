import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "./UploadButton";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Gallery</Link>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
