import { SearchIcon, LogoutIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Button from "./Button";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

function Header() {
  const searchRef = useRef();
  const [showProfile, setShowProfile] = useState(false);
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
            ref={searchRef}
            type="text"
            placeholder="Search Jokes"
            className="bg-transparent text-white outline-none border-2 border-[#663F6C] rounded-l-md px-2 w-32 sm:w-40 md:w-72 lg:w-96"
          />
          <div
            onClick={() => {
              router.push(`/search?term=${searchRef.current.value}`);
            }}
            className="bg-[#663F6C] p-2 px-3 rounded-r-md cursor-pointer"
          >
            <SearchIcon className="w-6 text-[#C900EC]" />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        {!session ? (
          <div
            className="w-20 h-10 cursor-pointer"
            onClick={() => router.push("/auth/signin")}
          >
            <Button />
          </div>
        ) : (
          <>
            <div
              className="text-white sm:whitespace-nowrap flex items-center gap-3 cursor-pointer transition group"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="relative w-8 h-8 rounded-full hidden lg:block">
                <Image
                  alt={session?.user?.name}
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
                <p className="text-xs text-[#989898] group-hover:border-b-2 border-[#663F6C]">
                  Explore the best jokes.
                </p>
              </div>
            </div>
            {showProfile && (
              <div className="absolute rounded-md right-5 mt-2 text-white z-10 bg-[#422B46] border border-[#663F6C] p-8 drop-shadow-2xl">
                <h1 className="text-2xl font-semibold text-[#C900EC]">
                  Your Profile
                </h1>
                <div className="flex items-center gap-5 py-5">
                  <div className="relative w-12 h-12 rounded-full">
                    <Image
                      alt={session?.user?.name}
                      className="rounded-full"
                      src={session?.user?.image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-medium">
                      {session?.user?.name}
                    </h1>
                    <p className="text-sm text-[#989898]">
                      {session?.user?.email}
                    </p>
                  </div>
                </div>
                <div className="border-t-2 border-[#663F6C] pt-8">
                  <div
                    className="bg-[#663F6C] py-3 rounded-md flex items-center gap-2 justify-center px-5 cursor-pointer"
                    onClick={() => signOut()}
                  >
                    <p className="text-lg">Logout</p>
                    <LogoutIcon className="w-6" />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
