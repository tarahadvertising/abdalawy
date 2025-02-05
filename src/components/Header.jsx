import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const toggleMobileServices = () =>
    setIsMobileServicesOpen(!isMobileServicesOpen);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // Set active menu based on current path
    if (location.pathname === "/") {
      setActiveMenu("home");
    } else if (location.pathname === "/contact") {
      setActiveMenu("contact");
    } else if (location.pathname.includes("service")) {
      setActiveMenu("services");
    } else {
      setActiveMenu("");
    }
  }, [location]);

  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0 z-20 w-full animate-slideDown bg-primary-500 p-3 drop-shadow-md"
          : "w-full bg-primary-500 p-3"
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 md:col-span-4 lg:col-span-2">
            <Link className="block w-2/5" to="/">
              <img
                src="/images/logo_secondary.svg"
                alt="Logo"
                className="h-auto w-full"
              />
            </Link>
          </div>
          <nav className="col-span-12 hidden md:col-span-8 md:block lg:col-span-10">
            <div className="flex justify-end space-x-6 font-sans font-medium tracking-wider text-white md:text-base lg:text-base">
              <Link
                to="/"
                className={`transition-all duration-300 ease-in hover:scale-105 ${
                  activeMenu === "home" ? "text-secondary-300" : ""
                }`}
              >
                Home
              </Link>
              <div className="group relative inline-block text-left">
                <span
                  id="service-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  className={`cursor-pointer transition-all duration-300 ease-in hover:scale-105 ${
                    activeMenu === "services" ? "text-secondary-300" : ""
                  }`}
                >
                  Services
                </span>
                <div
                  className="invisible absolute -right-7 z-10 w-64 origin-top-right scale-95 transform pt-7 opacity-0 transition-all duration-300 ease-out focus:outline-none group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="bg-secondary-500 tracking-normal shadow-lg ring-1 ring-black ring-opacity-5">
                    {[
                      {
                        label: "Indoor & Outdoor Signs",
                        href: "indoor-outdoor-signs",
                      },
                      {
                        label: "Paper Bags & Boxes",
                        href: "paper-bags-boxes",
                      },
                      { label: "Flags & Banners", href: "flags-banners" },
                      {
                        label: "Corporate Gifts & Promotions",
                        href: "gifts-promotions",
                      },
                      {
                        label: "Office Stationary",
                        href: "office-stationary",
                      },
                      {
                        label: "Restaurants Needs",
                        href: "restaurants-needs",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block border-b border-secondary-600 px-5 py-4 text-sm text-white transition-all duration-300 ease-in hover:bg-secondary-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="contact"
                className={`transition-all duration-300 ease-in hover:scale-105 ${
                  activeMenu === "contact" ? "text-secondary-300" : ""
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="blueleaf_brochure.pdf"
                target="_blank"
                className="transition-all duration-300 ease-in hover:scale-105"
              >
                Company Brochure
              </Link>
            </div>
          </nav>
          <div className="col-span-6 flex justify-end md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="bg-transparent text-secondary-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="mt-5 md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link
              className="border-b border-primary-600 pb-4 pt-2 text-sm font-medium leading-relaxed text-secondary-500"
              to="/"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <div className="border-b border-primary-600 leading-relaxed">
              <span
                onClick={toggleMobileServices}
                className="float-left w-full cursor-pointer pb-4 pt-2 text-sm font-medium text-secondary-500"
              >
                Services
              </span>
              {isMobileServicesOpen && (
                <div className="grid space-y-2 pb-6 pl-8">
                  {[
                    {
                      label: "Indoor & Outdoor Signs",
                      to: "indoor-outdoor-signs",
                    },
                    { label: "Paper Bags & Boxes", to: "/paper-bags-boxes" },
                    {
                      label: "Flags & Banners",
                      to: "flags-banners",
                    },
                    {
                      label: "Corporate Gifts & Promotions",
                      to: "gifts-promotions",
                    },
                    {
                      label: "Office Stationary",
                      to: "office-stationary",
                    },
                    {
                      label: "Restaurants Needs",
                      to: "restaurants-needs",
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="font-sm float-left w-full py-1 text-sm text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              className="border-b border-primary-600 pb-4 pt-2 text-sm font-medium leading-relaxed text-secondary-500"
              to="contact"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              className="pt-2 text-sm font-medium leading-relaxed text-secondary-500"
              to="blueleaf_brochure.pdf"
              target="_blank"
              onClick={closeMobileMenu}
            >
              Company Brochure
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
