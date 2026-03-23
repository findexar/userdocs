import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Agentsyx Help</title>
        <link rel="icon" href="https://docs.agentsyx.com/A6.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
