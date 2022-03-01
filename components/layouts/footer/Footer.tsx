import { connect } from "react-redux";
import { Create, Home, Search, Booked, User } from "../logo";
import { FootNav, FootStyle, NavItem } from "./styled/FootStyle.styled";
import Link from "next/link";

const Footer = ({ auth }) => {
  if (auth && auth.isAuthenticated) {
    return (
      <FootStyle>
        <FootNav>
          <NavItem>
            <Link href="/">
              <a>
                <Home />
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/browse">
              <a>
                <Search />
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/browse">
              <a>
                <Create />
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/wish">
              <a>
                <Booked />
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/profile">
              <a>
                <User />
              </a>
            </Link>
          </NavItem>
        </FootNav>
      </FootStyle>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Footer);
