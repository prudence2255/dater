import React from "react";

import Link from "next/link";
import Login from "components/profile/Login";
import * as imports from "components/Imports";
import Notifications from "react-notify-toast";
import { styled } from "styled-components";
import { colors, device } from "../styleVars";

const NavbarItems = styled.nav`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

const NavbarItem = styled.div`
  margin: 0 10px;
  @media ${device.tablet} {
    margin: 0;
  }
`;

const Logo = styled.div`
  margin-right: auto;
`;

const TopItems = styled(NavbarItem)`
  border: 2px solid ${colors.gray400};
  border-radius: 5px;
  padding: 5px 7px;

  @media ${device.tablet} {
    display: none;
  }
`;

const Navbar = () => {
  const [loginModal, setLoginModal] = React.useState();
  const { errors } = imports.useSelector(imports.errorsSelector);
  const { loading } = imports.useSelector(imports.loadersSelector);

  const APP_URL = process.env.APP_URL;

  const cookies = new imports.Cookies();

  return (
    <div className="home-header w3-card-4">
      <Notifications options={{ zIndex: 200, top: "50px" }} />
      {loading && <imports.SpinLoader loading={loading} />}
      {errors && <imports.ShowError />}
      <Login loginModal={loginModal} setLoginModal={setLoginModal} />
      <div className="container">
        <NavbarItems>
          <Logo>
            <Link href="/">
              <a>
                <img
                  src="/dater-fav-ico.png"
                  alt="Dater.com"
                  className="img-fluid img-circle"
                  width="40"
                  height="40"
                />
              </a>
            </Link>
          </Logo>
          <TopItems>
            <Link href="/">
              <a>Dating tips</a>
            </Link>
          </TopItems>
          {!cookies.get("token") && (
            <TopItems>
              <Link href="/#signup">
                <a>Signup</a>
              </Link>
            </TopItems>
          )}
          {!cookies.get("token") && (
            <NavbarItem>
              <span>Already a member?</span>
            </NavbarItem>
          )}

          {!cookies.get("token") && (
            <NavbarItem>
              <button
                className="dater-login-btn"
                title="login"
                onClick={() => setLoginModal(true)}
              >
                LOG IN
              </button>
            </NavbarItem>
          )}
        </NavbarItems>
      </div>
    </div>
  );
};

export default Navbar;
