import Navigator from "../components/layout/Navigator";
import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

function MyApp({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Navigator>
          <Component {...pageProps} />
        </Navigator>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
