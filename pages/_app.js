import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Global from "../styled/Global.styled";
import { theme } from "../styled/Theme";
import store from "../redux/store";
import Header from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    // The theme Provide
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* The Globals */}
        <Global />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
