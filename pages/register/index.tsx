import Router from "next/router";
import { connect } from "react-redux";
import styled from "styled-components";
import Bottom from "../../components/pages/register/bottom/Bottom";
import Brand from "../../components/pages/login/Brand";
import Meta from "../../components/seo/Meta";
import { login } from "../../redux/reducers/actions/authActions";
import { useEffect } from "react";
import Reginfo from "../../components/pages/register/Reginfo";
import Registerform from "../../components/pages/register/registerform/Registerform";

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

const index = ({ auth }) => {
  //Checking if already logged
  useEffect(() => {
    if (auth && auth.isAuthenticated) {
      Router.push("/");
    }

    return () => {};
  }, [auth]);

  return (
    <>
      <Meta title="Register - PetMe" />
      <LoginPage>
        <div>
          <Brand />
          <Reginfo />
          <Registerform />
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
