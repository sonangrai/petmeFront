import NextImage from "../components/layouts/image/NextImage";
import Meta from "../components/seo/Meta";
import { connect } from "react-redux";

/**
 *
 * @returns Home Page
 */
const Home = () => {
  return (
    <>
      <Meta description="" image="" />
      <NextImage height="50px" layout="contain" />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
