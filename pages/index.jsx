import { useSession } from "next-auth/react";
import { Welcome } from "../components";
import { SunIcon } from "@heroicons/react/outline";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <div className="px-8 md:px-16 py-20 text-[#C900EC] flex flex-col gap-3 items-center justify-center">
          <SunIcon className="w-10 animate-spin" />
          <p>Authenticating...</p>
        </div>
      ) : !session && status === "unauthenticated" ? (
        <Welcome />
      ) : (
        // This part will only show of user is logged in
        <div className="px-8 md:px-16 py-20 text-white">
          <p>Logged in</p>
        </div>
      )}
    </>
  );
}
