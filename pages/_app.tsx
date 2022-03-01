import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Global from "../styled/Global.styled";
import { Main, theme } from "../styled/Theme";
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
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
