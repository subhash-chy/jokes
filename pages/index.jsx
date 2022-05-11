import { useSession } from "next-auth/react";
import { Joke, Welcome } from "../components";
import { SunIcon } from "@heroicons/react/outline";

export default function Home(props) {
  const { success, body } = props;
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
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const jokes = {
    success: true,
    body: [
      {
        _id: "60dd360040b99f545c5c3c8d",
        setup: "Did you hear about the creator of Arm & Hammer?",
        punchline:
          "He used to be armed and hammered, but he really cleaned up his act.",
        type: "creator",
        likes: [],
        author: {
          name: "unknown",
          id: null,
        },
        approved: true,
        date: 1618108661,
        NSFW: false,
      },
      {
        _id: "60dd37ad4c0735daef7ec636",
        setup: "My friend always wanted to get run over by a steam train...",
        punchline: "So when it finally happened, he was chuffed to bits.",
        type: "steam",
        likes: [],
        author: {
          name: "unknown",
          id: null,
        },
        approved: true,
        date: 1618108661,
        NSFW: false,
      },
      {
        _id: "60dd36f455bd0135080d3f65",
        setup: "What was the name of Schrodinger's cat?",
        punchline: "InterMittens.",
        type: "mitten",
        likes: [],
        author: {
          name: "unknown",
          id: null,
        },
        approved: true,
        date: 1618108661,
        NSFW: false,
      },
    ],
  };

  const success = jokes.success;
  const body = jokes.body;

  return {
    props: {
      success,
      body,
    },
  };
}
