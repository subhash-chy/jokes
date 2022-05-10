import { SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Button from "./Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav className="bg-[#422B46] py-2 px-8 md:px-16 flex justify-between items-center gap-8">
      <div className="flex justify-between gap-8 md:justify-start items-center w-full">
        <h1 className="text-white font-semibold text-3xl cursor-pointer">
          <Link href={"/"}>JOKER</Link>
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search Jokes"
            className="bg-transparent text-white outline-none border-2 border-[#663F6C] rounded-l-md px-2 w-32 sm:w-40 md:w-72 lg:w-96"
          />
          <div className="bg-[#663F6C] p-2 px-3 rounded-r-md cursor-pointer">
            <SearchIcon className="w-6 text-[#C900EC]" />
          </div>
        </div>
      </div>

      <div
        className="hidden md:block cursor-pointer"
        onClick={() => (session ? signOut() : router.push("/auth/signin"))}
      >
        {!session ? (
          <div className="w-20 h-10">
            <Button />
          </div>
        ) : (
          <div className="text-white sm:whitespace-nowrap flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full hidden lg:block">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div>
              <h1 className="text-sm font-semibold">
                <span className="text-[#C900EC]">{session?.user?.name}!</span>
              </h1>
              <p className="text-xs text-[#989898]">Explore the best jokes.</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
