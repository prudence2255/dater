import React from "react";
import Head from "next/head";

import Footer from "components/public/Footer";

import * as imports from "components/Imports";

import { useRouter } from "next/router";
import Navbar from "../components/public/Navbar";
import { BodyText, Heading1 } from "../components/styledComponents";

const privacy = () => {
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
        <meta property="og:title" content="Privacy Policy" />
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
        <Heading1>PRIVACY STATEMENT</Heading1>
        <div className="col-md-8 mx-auto">
          <BodyText>
            At FunConnect, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Statement outlines how we collect, use, disclose, and safeguard the
            information you provide while using our dating site. Please read
            this statement carefully to understand our practices regarding your
            personal data.
            <br />
            <br />
            1. Information Collection:
            <br />
            1.1 Personal Information: When you create an account on our dating
            site, we may collect personal information such as your name, email
            address, date of birth, gender, and location. This information is
            necessary to provide you with a personalized dating experience and
            to enhance the functionality of our platform.
            <br />
            <br />
            1.2 Profile Information: To improve your chances of finding suitable
            matches, we may ask you to provide additional information about
            yourself, including your interests, hobbies, preferences, and
            photos. Providing this information is optional, and you have control
            over what you choose to share.
            <br />
            <br />
            1.3 Usage Data: We may collect certain information automatically
            when you use our dating site, including your IP address, browser
            type, device information, pages visited, and the duration of your
            visits. This data helps us analyze user behavior, optimize our
            services, and enhance the overall user experience. <br /> <br />
            2. Information Use: <br />
            2.1 Personalization: We use the information you provide to
            personalize your dating experience, including suggesting potential
            matches, displaying compatible profiles, and tailoring the content
            and features to your interests.
            <br /> <br />
            2.2 Communication: We may use your email address or other contact
            information to send you notifications, updates, and promotional
            materials related to our services. You can opt-out of receiving such
            communications by adjusting your account settings or following the
            instructions provided in the communication. <br /> <br />
            2.3 Improving Services: We analyze the aggregated data to understand
            user preferences and improve our dating site's features,
            functionality, and user interface. This analysis is performed in a
            manner that does not identify individuals personally. <br /> <br />
            3. Information Sharing:
            <br />
            3.1 Third-Party Service Providers: We may engage third-party service
            providers to assist us in operating our dating site and delivering
            our services. These providers may have access to your personal
            information but are contractually obligated to handle it securely
            and in compliance with applicable data protection laws.
            <br />
            <br />
            3.2 Legal Requirements: We may disclose your personal information if
            required to do so by law, court order, or governmental authority. We
            will also share information when we believe it is necessary to
            detect, prevent, or address fraud, security issues, or technical
            problems.
            <br />
            <br />
            3.3 Consent: We will seek your consent before sharing your personal
            information with third parties for marketing purposes or any other
            purpose not covered by this Privacy Statement.
            <br />
            <br />
            4. Data Security:
            <br />
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction. However, no data transmission or storage
            can be guaranteed to be 100% secure, so we cannot ensure absolute
            security.
            <br />
            <br />
            5. Children's Privacy:
            <br />
            Our dating site is intended for use by individuals who are at least
            18 years old. We do not knowingly collect personal information from
            anyone under the age of 18. If we become aware that we have
            collected personal information from a minor, we will take immediate
            steps to delete it.
            <br />
            <br />
            6. Updates to this Privacy Statement:
            <br />
            We may update this Privacy Statement periodically to reflect changes
            in our practices or legal requirements. We encourage you to review
            this statement regularly to stay informed about how we protect your
            privacy.
            <br />
            <br />
            If you have any questions or concerns regarding our Privacy
            Statement or the handling of your personal information, please
            contact us through the provided channels.
            <br />
            <br />
            Last updated: 10/05/2023
          </BodyText>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default privacy;
