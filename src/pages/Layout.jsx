import { Outlet } from "react-router-dom/dist";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
