import {
  ChatNav,
  HeadRow,
  HeadStyle,
  SiteLogo,
} from "./styled/HeadStyle.styled";
import { Chat } from "../logo";
import Link from "next/link";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  gettingProfile,
  islogged,
} from "../../../redux/reducers/actions/authActions";
import Router from "next/router";

const Header = ({ auth, islogged, gettingProfile }) => {
  /**
   * Check localstorage for session
   */
  useEffect(() => {
    let localAuth = JSON.parse(localStorage.getItem("petAuth"));
    if (localAuth) {
      //Dispatch login
      islogged(localAuth);
      gettingProfile();
    } else {
      Router.push("/login"); //Send to login
    }
    return () => {};
  }, []);

  if (auth && auth.isAuthenticated) {
    //Returning if only user is logged
    return (
      <HeadStyle>
        <HeadRow>
          <SiteLogo>
            <Link href="/">
              <a>Petgram</a>
            </Link>
          </SiteLogo>
          <ChatNav>
            <Link href="#!">
              <a>
                <Chat />
              </a>
            </Link>
          </ChatNav>
        </HeadRow>
      </HeadStyle>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  islogged,
  gettingProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
