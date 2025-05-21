import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { All } from "./All";
import { NavBar } from "../components/NavBar";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const LayoutAll = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
