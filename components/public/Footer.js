import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { colors, device } from "../styleVars";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  padding: 10px;
  flex-wrap: wrap;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterItem = styled.a`
  color: ${colors.gray200};
  cursor: pointer;
  font-size: 14px;
  border: 2px solid ${colors.gray400};
  border-radius: 5px;
  padding: 5px 7px;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }

  @media ${device.mobileL} {
    min-width: 150px;
    text-align: center;
  }
`;

const CopyRightText = styled.p`
  width: 100%;
  text-align: center;
`;

export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <Link href="/#signup">
          <FooterItem>Signup</FooterItem>
        </Link>

        <Link href="/about">
          <FooterItem>About Us</FooterItem>
        </Link>

        <Link href="/">
          <FooterItem>Blog</FooterItem>
        </Link>

        <Link href="/">
          <FooterItem>Dating tips</FooterItem>
        </Link>

        <Link href="/terms">
          <FooterItem>Terms & Condtions</FooterItem>
        </Link>

        <Link href="/privacy">
          <FooterItem>Privacy policy</FooterItem>
        </Link>
      </FooterContainer>
      <CopyRightText>&copy; FunConnect, 2023.</CopyRightText>
    </footer>
  );
}
