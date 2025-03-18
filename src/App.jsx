import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SecNav from "./components/Nav/SecNav";
import MainNav from "./components/Nav/MainNav";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import 'aos/dist/aos.css';
import ErrorPage from "./components/ErrorPage/ErrorPage";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  const shouldShowFooter = !location.pathname.startsWith("/Dashboard");

  return (
      <BrowserRouter>
        <div className="xl:block hidden">
          <MainNav />
        </div>
        {shouldShowNavBar && (
          <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
            showNavBar ? "translate-y-0" : "-translate-y-full"
          } ${
            isTopOfPage
              ? "xl:mt-28"
              : "shadow-md transition-colors duration-500"
          }`}
          >
            <SecNav />
          </div>
        )}
        <Routes>
          <Route path="*" element={<ErrorPage /> } />
          <Route path="/" element={<HomePage /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}