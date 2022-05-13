import { Joke } from "../components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import Head from "next/head";

function Search() {
  const router = useRouter();
  const { term } = router.query;

  // const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   fetchJokes();
  // }, []);

  // const fetchJokes = async () => {
  //   const resp = await fetch(
  //     `https://dad-jokes.p.rapidapi.com/joke/search?term=${term}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  //         "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
  //       },
  //     }
  //   ).then((res) => res.json());
  //   setJokes(resp.body);
  // };

  return (
    // This part will only show of user is logged in
    <>
      <Head>
        <title>Search - {term}</title>
      </Head>

      <div className="px-8 md:px-16 py-20 text-white">
        <h1 className="text-[#C900EC] text-3xl font-semibold mb-5">
          {/* {term?`Search results for ${query}:"}
           */}
          {term
            ? `Search results for "${term}"`
            : "Please provide search value to search"}
        </h1>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          Search doesn&apos;t works because its paid API for search
          {/* {jokes?.map((joke) => (
          <Joke
            key={joke._id}
            id={joke._id}
            setup={joke.setup}
            punchline={joke.punchline}
            type={joke.type}
          />
        ))} */}
        </div>
      </div>
    </>
  );
}

export default Search;

// Server Side Rendering
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
