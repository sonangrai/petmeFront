import { connect } from "react-redux";
import styled from "styled-components";
import Bottom from "../../components/pages/login/bottom/Bottom";
import Brand from "../../components/pages/login/Brand";
import Loginform from "../../components/pages/login/loginform/Loginform";
import Meta from "../../components/seo/Meta";
import { login } from "../../redux/reducers/actions/authActions";

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

/**
 *
 * @returns Loign page
 */

const index = ({ login, auth }) => {
  return (
    <>
      <Meta title="Login - PetMe" />
      <LoginPage>
        <div>
          <Brand />
          <Loginform loginDispatch={login} authData={auth} />
          <Bottom />
        </div>
      </LoginPage>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
