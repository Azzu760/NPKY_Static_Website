import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <div className="text-sm font-bold flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <div className="block text-left text-gray-900">
            <h3>NEW PUJA</h3>
            <h3>KHADYA UDHYOG</h3>
          </div>
        </div>

        {/* Hamburger / Close Icon for mobile */}
        <button
          className="md:hidden focus:outline-none text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation links */}
        <nav
          className={`flex flex-col md:flex-row md:items-center gap-6 text-sm absolute md:static bg-green-700 md:bg-transparent w-full left-0 md:w-auto md:opacity-100 transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "top-[64px] opacity-100 py-4 px-6 shadow-lg rounded-b-lg"
                : "top-[-400px] opacity-0"
            }`}
        >
          {["home", "about", "products", "gallery", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative pb-1 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
