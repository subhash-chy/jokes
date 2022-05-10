import Footer from "./Footer";
import Header from "./Header";

function GlobalLayout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default GlobalLayout;
