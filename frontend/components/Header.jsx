import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "../src/assets/logo_komdigi.png";

//Komponen header
const Header = () => {
  return (
    <section class="bg-gray-900 overflow-hidden pb-2 px-4 md:px-8">
      <header class="flex mx-auto justify-between items-center max-w-[1300px] py-4 ">
        <div class="flex items-center gap-3">
          <img
            class="w-20"
            src={Logo}
          ></img>
        </div>
        <nav class="hidden sm:inline-block">
          <ul class="flex gap-3 md:gap-5 lg:gap-10">
            <Link
              to="/"
              class="relative inline cursor-pointer text-xl text-white font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              Beranda
            </Link>
            <Link
              to="/organisasi"
              class="relative inline cursor-pointer text-xl text-white font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              Profil
            </Link>
            <Link
              to="/rfc"
              class="relative inline cursor-pointer text-xl text-white font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              CSIRT-PDN
            </Link>
            <Link
              to="/services"
              class="relative inline cursor-pointer text-xl text-white font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              Layanan
            </Link>
            <Link
              to="/activity"
              class="relative inline cursor-pointer text-xl text-white font-medium before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              Kegiatan
            </Link>
          </ul>
        </nav>
        <div class="hidden sm:flex gap-3 md:gap-5 lg:gap-9">
          <Link
            to="/contact"
            class="relative flex items-center justify-center uppercase font-bold text-xs rounded-[40px] py-1 px-3 md:py-2 lg:py-4 md:px-4 lg:px-9 text-[#302c42]  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
          >
            <span class="relative z-10">KONTAK</span>
          </Link>
        </div>
        <button class="sm:hidden inline-block">
          <svg
            width="33"
            height="26"
            viewBox="0 0 33 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="33"
              height="3.71429"
              rx="1.85714"
              fill="url(#paint0_linear_13_83)"
            ></rect>
            <rect
              y="22.2857"
              width="33"
              height="3.71429"
              rx="1.85714"
              fill="url(#paint1_linear_13_83)"
            ></rect>
            <rect
              x="9"
              y="11.1429"
              width="24"
              height="3.71429"
              rx="1.85714"
              fill="url(#paint2_linear_13_83)"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_13_83"
                x1="-8.62252e-09"
                y1="3.46667"
                x2="36.0395"
                y2="3.46666"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C0B7E8"></stop>
                <stop
                  offset="1"
                  stopColor="#8176AF"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_13_83"
                x1="-3.90789"
                y1="26"
                x2="33"
                y2="26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C0B7E8"></stop>
                <stop
                  offset="1"
                  stopColor="#8176AF"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_13_83"
                x1="5.21062"
                y1="13"
                x2="33.0001"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C0B7E8"></stop>
                <stop
                  offset="1"
                  stopColor="#8176AF"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </button>
      </header>
    </section>
  );
};

export default Header;
