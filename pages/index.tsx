import Meta from "../components/seo/Meta";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { getAllFeeds } from "redux/api/feed";
import Feeds from "components/Home/Feeds";

/**
 *
 * @returns Home Page
 */
const Home = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    getAllFeeds().then((res) => {
      console.log(res.data.data);
      setFeeds(res.data.data);
      setloading(false);
    });
  }, []);

  return (
    <>
      <Meta description="" image="" />
      {!loading ? <Feeds data={feeds} /> : "Loading..."}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
