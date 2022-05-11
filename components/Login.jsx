import Button from "./Button";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  return (
    <div className="text-white">
      <h1 className=" text-4xl sm:text-3xl md:text-2xl  leading-relaxed">
        Hey <span className="text-[#C900EC] font-semibold">jokers!</span> Login
        to find the joke <span className="text-[#C900EC]">.</span>
      </h1>
      <div
        className="w-full sm:w-60 md:w-40 h-12 mt-8 text-xl"
        onClick={() => router.push("/auth/signin")}
      >
        <Button />
      </div>
    </div>
  );
}

export default Login;
