import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import NextImage from "../components/layouts/image/NextImage";
import Meta from "../components/seo/Meta";
import Router from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";
import { islogged } from "../redux/reducers/actions/authActions";

/**
 *
 * @returns Home Page
 */
const Home = ({ auth, islogged }) => {
  /**
   * Check localstorage for session
   */
  useEffect(() => {
    let localAuth = JSON.parse(localStorage.getItem("petAuth"));
    if (localAuth) {
      //Dispatch login
      islogged(localAuth);
    } else {
      Router.push("/login"); //Send to login
    }
    return () => {};
  }, []);

  return (
    <>
      <Meta title="PetMe" description="" image="" />
      <Header />
      <NextImage height="50px" layout="contain" />
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  islogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
