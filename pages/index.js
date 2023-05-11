import React from "react";
import Head from "next/head";
import Home from "components/public/Home";
import Footer from "components/public/Footer";
import * as imports from "components/Imports";
import { useRouter } from "next/router";
import Navbar from "../components/public/Navbar";

const index = () => {
  const APP_URL = process.env.APP_URL;

  const cookies = new imports.Cookies();
  const router = useRouter();

  React.useEffect(() => {
    if (cookies.get("token")) {
      router.push("/profile");
    }
  }, []);
  return (
    <div className="home-container">
      <Head>
        <title>funconnect.net</title>
        <meta
          property="og:title"
          content="A Social Network And Dating Site For Live Chatting 
          And Finding New Friends"
        />
        <meta
          name="og:description"
          content="
         The Best Social Network And Dating Site For Live Chatting 
          And Finding New Friends. Virtually Meet Thousands Of Like-Minded Singles And Connect At Lightning Speed.
          "
        />
        <meta name="og:image" content="/home-img.jpg" />
        <meta property="og:url" content={`${APP_URL}/${router.asPath}`} />
        <link rel="canonical" href={`${APP_URL}/${router.asPath}`} />
        <link rel="icon" href="/dater-fav-ico.png" />
      </Head>
      <Navbar />
      <main className="home-main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default index;
