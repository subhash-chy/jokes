import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Footer() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <footer className="px-8 md:px-16 bg-[#422B46] py-20 text-white">
      <div className="grid grid-cols-12 gap-3 md:gap-10">
        <div className="col-span-7 md:col-span-8">
          <h1 className="text-3xl font-semibold mb-5">JOKER</h1>
          <p className="max-w-3xl text-sm text-[#989898]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            necessitatibus rerum esse iure cupiditate. At pariatur atque
            delectus reprehenderit harum?
          </p>
        </div>
        <div className="col-span-5 md:col-span-4 mt-5 text-[#989898] flex justify-end">
          <div className="w-full md:w-2/3 space-y-3">
            <h1 className="text-xl md:text-2xl font-semibold text-[#C900EC] mb-5">
              Quick Links
            </h1>
            <p className="md:text-xl cursor-pointer">
              <Link href={"/"}>Home</Link>
            </p>
            <p className="md:text-xl cursor-pointer">Categories</p>
            {!session ? (
              <div
                onClick={() => router.push("/auth/signin")}
                className="w-full h-12 md:text-xl"
              >
                <Button />
              </div>
            ) : (
              <div>
                <p className="text-sm">
                  Signed in as{" "}
                  <span className="font-semibold text-[#C900EC]">
                    {session?.user?.name}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#663F6C] pt-20 mt-10 flex justify-between items-center">
        <p className="text-[#989898]">© 2022 All rights reserved.</p>
        <p className="text-[#cccccc]">Privacy | Terms</p>
      </div>
    </footer>
  );
}

export default Footer;
