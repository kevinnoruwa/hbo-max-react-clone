import "../styles/styles.scss";
import { HBOProvider, useStateContext } from "../componets/hboProvider";

function MyApp({ Component, pageProps }) {
  const globalState = useStateContext();
  return (
    <HBOProvider>
      <Component {...pageProps} />
    </HBOProvider>
  );
}

export default MyApp;
