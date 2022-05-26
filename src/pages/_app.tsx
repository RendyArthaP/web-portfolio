import "~/src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
      console.log('Page start to change');
    })

    return(() => {
      Router.events.on("routeChangeComplete", () => {
        setLoading(false);
        console.log('Page already change');
      })
    })
  })

  return (
    <>
      <Head>
        <title>Rendy Artha Prawira</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      {loading && <Loader />}
      {!loading && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
