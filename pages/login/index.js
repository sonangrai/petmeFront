import styled from "styled-components";
import Bottom from "../../components/pages/login/bottom/Bottom";
import Brand from "../../components/pages/login/Brand";
import Loginform from "../../components/pages/login/loginform/Loginform";
import Meta from "../../components/seo/Meta";

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

const index = () => {
  return (
    <>
      <Meta title="Login - PetMe" />
      <LoginPage>
        <div>
          <Brand />
          <Loginform />
          <Bottom />
        </div>
      </LoginPage>
    </>
  );
};

export default index;
