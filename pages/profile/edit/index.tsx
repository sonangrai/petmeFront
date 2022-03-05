import { useState } from "react";
import { connect } from "react-redux";
import GoBack from "../../../components/layouts/header/GoBack";
import Dp from "../../../components/pages/profile/dp/Dp";
import Dpmodal from "../../../components/pages/profile/dpModal/Dpmodal";
import Profileform from "../../../components/pages/profile/form/Profileform";
import Meta from "../../../components/seo/Meta";
import { updateDP } from "../../../redux/reducers/actions/authActions";
import { addprofile } from "redux/reducers/actions/profileActions";

/**
 *
 * @param {} param0
 * @returns EDit profile page
 */

const index = ({ auth, updateDP, addprofile }) => {
  const [modal, setmodal] = useState(false); //State for upload dp modal

  return (
    <>
      <Meta title="Edit Profile" />
      <GoBack title="Edit Profile" />
      <Dp auth={auth} showmodal={setmodal} />
      <Profileform auth={auth} addProfile={addprofile} />
      {modal && <Dpmodal showmodal={setmodal} dpUpdateState={updateDP} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  updateDP,
  addprofile,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
