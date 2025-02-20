"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname(); //사이트 주소 '/'뒤에있는 주소 불러오기
  const isSignIn = pathname === "/sign-in";

  return (
    <main className=" bg-neutral-200 min-h-screen">
      <div className=" mx-auto max-w-screen-2xl p-4">
        <nav className=" flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={152} height={56} />
          <Button asChild variant="secondary">
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
