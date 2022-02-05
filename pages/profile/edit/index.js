import React from "react";
import GoBack from "../../../components/layouts/header/GoBack";
import Dp from "../../../components/pages/profile/dp/Dp";
import Meta from "../../../components/seo/Meta";

const index = () => {
  return (
    <>
      <Meta title="Edit Profile" />
      <GoBack title="Edit Profile" />
      <Dp />
    </>
  );
};

export default index;
