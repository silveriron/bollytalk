import Navigator from "../components/layout/Navigator";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Navigator>
      <Component {...pageProps} />
    </Navigator>
  );
}

export default MyApp;
