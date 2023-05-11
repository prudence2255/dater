import React from "react";
import Head from "next/head";

import Footer from "components/public/Footer";

import * as imports from "components/Imports";

import { useRouter } from "next/router";
import Navbar from "../components/public/Navbar";
import { BodyText, Heading1 } from "../components/styledComponents";

const terms = () => {
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
        <meta property="og:title" content="Terms & Conditions" />
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
        <Heading1>TERMS AND CONDITIONS OF SERVICE</Heading1>
        <div className="col-md-8 mx-auto">
          <BodyText>
            Please read these Terms and Conditions carefully before using our
            site. These Terms govern your use of the Site and all services
            provided therein. By accessing or using our Site, you agree to be
            bound by these Terms. If you do not agree with any part of these
            Terms, please refrain from using the Site.
            <br />
            <br />
            1. Eligibility:
            <br />
            1.1 You must be at least 18 years old to use our Site. By accessing
            or using the Site, you represent and warrant that you are 18 years
            of age or older.
            <br />
            <br />
            1.2 If you are accessing or using the Site on behalf of a company or
            other legal entity, you represent and warrant that you have the
            authority to bind such entity to these Terms.
            <br />
            <br />
            2. User Obligations:
            <br />
            2.1 You agree to provide accurate, current, and complete information
            during the registration process and to maintain the accuracy of your
            information.
            <br />
            <br />
            2.2 You are solely responsible for maintaining the confidentiality
            of your account credentials and for all activities that occur under
            your account. You agree to notify us immediately of any unauthorized
            use of your account or any other breach of security.
            <br />
            <br />
            3. Prohibited Activities:
            <br />
            3.1 You agree not to engage in any of the following activities while
            using our Site:
            <br />
            <br />
            a) Violating any applicable laws or regulations;
            <br />
            b) Impersonating any person or entity or falsely stating or
            otherwise misrepresenting your affiliation with a person or entity;
            <br />
            c) Harassing, threatening, or intimidating other users;
            <br />
            d) Posting, transmitting, or distributing any inappropriate,
            offensive, obscene, or unlawful content;
            <br />
            e) Interfering with or disrupting the Site or its services;
            <br />
            f) Engaging in any fraudulent or deceptive activities.
            <br />
            <br />
            4. User Content:
            <br />
            4.1 By submitting any content (including but not limited to text,
            photos, and videos) to our Site, you grant us a worldwide,
            non-exclusive, royalty-free, sublicensable, and transferable license
            to use, reproduce, distribute, prepare derivative works of, display,
            and perform such content.
            <br />
            <br />
            4.2 You are solely responsible for the content you post on our Site.
            We do not endorse or guarantee the accuracy, completeness, or
            usefulness of any content posted by users.
            <br />
            <br />
            5. Privacy:
            <br />
            5.1 Our Privacy Policy governs the collection, use, and disclosure
            of your personal information. By using our Site, you consent to the
            collection, use, and disclosure of your personal information as
            outlined in our Privacy Policy.
            <br />
            <br />
            6. Termination:
            <br />
            6.1 We reserve the right to terminate or suspend your access to the
            Site, with or without cause and without prior notice, at our sole
            discretion.
            <br />
            <br />
            6.2 Upon termination, all provisions of these Terms which by their
            nature should survive, including but not limited to ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability, shall continue to apply.
            <br />
            <br />
            7. Disclaimers and Limitations of Liability:
            <br />
            7.1 Our Site and its services are provided on an "as-is" and "as
            available" basis. We do not warrant that the Site will be
            uninterrupted, error-free, or secure, or that any defects or errors
            will be corrected.
            <br />
            <br />
            7.2 To the maximum extent permitted by applicable law, we disclaim
            all warranties, whether express, implied, statutory, or otherwise,
            including but not limited to warranties of merchantability, fitness
            for a particular purpose, and non-infringement.
            <br />
            <br />
            7.3 In no event shall we be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or in
            connection with your use of the Site or services, even if we have
            been advised of the possibility of such damages.
            <br />
            <br />
            8. Modifications:
            <br />
            8.1 We reserve the right to modify or amend these Terms at any time,
            at our sole discretion. Any changes or updates to these Terms will
            be effective immediately upon posting on the Site.
            <br />
            <br />
            8.2 It is your responsibility to review these Terms periodically for
            any changes. By continuing to use the Site after any modifications
            to the Terms, you agree to be bound by the updated Terms.
            <br />
            <br />
            9. Intellectual Property:
            <br />
            9.1 All intellectual property rights in the Site and its content,
            including but not limited to text, graphics, logos, button icons,
            images, audio clips, and software, are owned by or licensed to us.
            <br />
            <br />
            9.2 You may not use, reproduce, distribute, or display any
            intellectual property belonging to us without our prior written
            permission.
            <br />
            <br />
            10. Governing Law and Jurisdiction:
            <br />
            10.1 These Terms shall be governed by and construed in accordance
            with the laws of Ghana, without regard to its conflict of laws
            principles.
            <br />
            <br />
            10.2 Any disputes arising out of or in connection with these Terms
            shall be subject to the exclusive jurisdiction of the courts located
            in Ghana.
            <br />
            <br />
            11. Entire Agreement:
            <br />
            11.1 These Terms constitute the entire agreement between you and us
            regarding your use of the Site, superseding any prior agreements or
            understandings.
            <br />
            <br />
            11.2 Our failure to enforce any right or provision of these Terms
            shall not be deemed a waiver of such right or provision.
            <br />
            <br />
            If you have any questions or concerns regarding these Terms and
            Conditions, please contact us at info@funconnect.net.
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

export default terms;
