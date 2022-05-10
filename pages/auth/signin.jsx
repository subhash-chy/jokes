import { signIn, getCsrfToken, getProviders } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Signin = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    session && router.push("/");
  }, []);

  return (
    <div className="px-8 md:px-16 py-20 text-white flex flex-col items-center justify-center">
      <div className="bg-[#422B46] p-10 md:p-20 rounded-md">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          Login to <span className="font-semibold text-[#C900EC]">JOKERS!</span>
        </h1>
        <p className="mb-5 text-[#989898]">Use the modern login providers.</p>
        <div className="">
          {providers &&
            Object.values(providers).map((provider) => (
              <div
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                key={provider.name}
                className="bg-[#663F6C] cursor-pointer rounded-md flex gap-1 items-center justify-center p-3 md:px-5"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg"
                  alt="Google"
                />
                <button className="w-full">Sign in with {provider.name}</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
