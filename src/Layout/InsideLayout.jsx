import { Outlet } from "react-router-dom";
import Header from "../component/Navbar/Header";
import Footer from "../component/Footer/Footer";

const InsideLayout = () => {
  return (
    <main>
      <Header/>
      <div className="mainSection">
        <Outlet/>
      </div>
      <Footer/>
    </main>
  );
};

export default InsideLayout;
