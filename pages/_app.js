import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{"Sudi's weblog"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="you can find a vast bariety of different blog posts related to programming, including but not limited to JavaScript, NextJS and so many more"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
