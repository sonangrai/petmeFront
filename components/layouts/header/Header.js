import {
  ChatNav,
  CreatePost,
  HeadRow,
  HeadStyle,
  SiteLogo,
} from "./styled/HeadStyle.styled";
import { Chat, Create } from "./logo";
import Link from "next/link";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  if (auth && auth.isAuthenticated) {
    //Returning if only user is logged
    return (
      <HeadStyle>
        <HeadRow>
          <CreatePost>
            <Create />
          </CreatePost>
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

export default connect(mapStateToProps)(Header);
