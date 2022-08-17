import Navigator from "../components/layout/Navigator";
import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Navigator>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Navigator>
  );
}

export default MyApp;
