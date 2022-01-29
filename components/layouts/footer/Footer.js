import { connect } from "react-redux";
import { FootStyle } from "./styled/FootStyle.styled";

const Footer = ({ auth }) => {
  if (auth && auth.isAuthenticated) {
    return (
      <>
        <FootStyle>I am Footer</FootStyle>
      </>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Footer);
