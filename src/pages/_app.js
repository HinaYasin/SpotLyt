import "@/styles/globals.css";
// import Header from '../comp/Header'
import Header from "../comp/Header";
import Footer from "@/comp/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
