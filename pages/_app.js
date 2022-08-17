import Navigator from "../components/layout/Navigator";
import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navigator>
        <Component {...pageProps} />
      </Navigator>
    </Provider>
  );
}

export default MyApp;
