import React from "react";
import Head from "next/head";
import Footer from "components/public/Footer";
import * as imports from "components/Imports";
import { useRouter } from "next/router";
import Navbar from "../components/public/Navbar";
import { BodyText, Heading1 } from "../components/styledComponents";

const about = () => {
  const APP_URL = process.env.APP_URL;

  const cookies = new imports.Cookies();
  const router = useRouter();
  //   React.useEffect(() => {
  //     if (cookies.get("token")) {
  //       router.push("/profile");
  //     }
  //   }, []);
  return (
    <div className="home-container">
      <Head>
        <title>funconnect.net</title>
        <meta property="og:title" content="About FunConnnect" />
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
      <main className="main-content">
        <div className="col-md-8 mx-auto">
          <Heading1>ABOUT</Heading1>
          <BodyText>
            Welcome to FunConnect: Where Hearts Meet!
            <br />
            <br />
            At FunConnect, we understand that finding a meaningful connection
            with someone special can be an exhilarating journey. That's why
            we've created a vibrant and inclusive online platform where
            individuals from all walks of life can come together to discover
            love, companionship, and lifelong partnerships.
            <br />
            <br />
            Our mission is to provide a safe and enjoyable space for people to
            connect, fostering authentic relationships built on shared
            interests, values, and mutual attraction. Whether you're seeking a
            romantic partner, a companion for adventure, or a soulmate for life,
            FunConnect is here to help you embark on your personal journey to
            find love.
            <br />
            <br />
            What sets FunConnect apart is our commitment to creating a welcoming
            environment where everyone feels respected and accepted. We believe
            that love knows no boundaries, and we celebrate diversity in all its
            forms. We encourage our members to express their true selves,
            embracing their unique qualities, backgrounds, and preferences.
            <br /> <br />
            At FunConnect, we strive to make the online dating experience
            convenient, efficient, and enjoyable. Our advanced matching
            algorithms take into account your interests, personality traits, and
            relationship preferences to connect you with like-minded individuals
            who are compatible with you. Whether you're looking for a casual
            date, a serious relationship, or something in between, our platform
            is designed to help you find exactly what you're seeking.
            <br /> <br />
            We prioritize the safety and security of our members. Our robust
            verification processes and proactive moderation ensure that
            FunConnect remains a trusted and reliable platform. We are dedicated
            to providing a space where you can confidently explore potential
            connections without compromising your privacy or security.
            <br /> <br />
            In addition to our user-friendly interface and powerful matching
            features, FunConnect also offers a range of tools and resources to
            support your dating journey. From dating tips and advice to engaging
            community forums, we strive to empower our members with the
            knowledge and tools they need to navigate the world of online dating
            successfully.
            <br /> <br />
            Join FunConnect today and unlock a world of exciting possibilities.
            Whether you're starting anew or giving love another chance, our
            vibrant community of genuine individuals is ready to welcome you
            with open hearts. Begin your journey to love and companionship with
            FunConnect – the ultimate destination for meaningful connections.
            <br />
            FunConnect: Where Hearts Meet, and Love Blossoms.
          </BodyText>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default about;
