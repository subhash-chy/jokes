import { useSession } from "next-auth/react";
import { Joke, Welcome } from "../components";
import { SunIcon, RefreshIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home(props) {
  const { success, body } = props;
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Joker</title>
      </Head>
      {status === "loading" ? (
        <div className="px-8 md:px-16 py-20 text-[#C900EC] flex flex-col gap-3 items-center justify-center">
          <SunIcon className="w-10 animate-spin" />
          <p>Authenticating...</p>
        </div>
      ) : !session && status === "unauthenticated" ? (
        <Welcome />
      ) : (
        // This part will only show if user is logged in
        <div className="px-8 md:px-16 py-20 text-white">
          <h1 className="text-[#C900EC] text-3xl font-semibold mb-5">
            Explore Jokes
          </h1>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {body.map((joke) => (
              <Joke
                key={joke._id}
                id={joke._id}
                setup={joke.setup}
                punchline={joke.punchline}
                type={joke.type}
              />
            ))}
          </div>

          <button
            className="mt-10 flex items-center justify-center gap-2 bg-[#663F6C] text-[#C900EC] uppercase px-3 py-2 rounded-md w-full sm:w-fit h-full"
            onClick={() => router.reload(window.location.pathname)}
          >
            <RefreshIcon className="w-5" /> Refresh Jokes
          </button>
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const jokes = await fetch(
    "https://dad-jokes.p.rapidapi.com/random/joke?count=5",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
      },
    }
  ).then((res) => res.json());

  const success = jokes.success;
  const body = jokes.body;

  return {
    props: {
      success,
      body,
    },
  };
}
