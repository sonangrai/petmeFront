import React from "react";
import { connect } from "react-redux";
import GoBack from "../../../components/layouts/header/GoBack";
import Dp from "../../../components/pages/profile/dp/Dp";
import Profileform from "../../../components/pages/profile/form/Profileform";
import Meta from "../../../components/seo/Meta";

const index = ({ auth }) => {
  return (
    <>
      <Meta title="Edit Profile" />
      <GoBack title="Edit Profile" />
      <Dp auth={auth} />
      <Profileform auth={auth} />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(index);
