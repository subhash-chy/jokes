import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { GlobalLayout } from "../components";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </SessionProvider>
  );
}

export default MyApp;
