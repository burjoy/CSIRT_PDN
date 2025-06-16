import { Link } from "react-router-dom";
import Logo from "../src/assets/Logo_komdigi.png";
import { Drawer, Box } from "@mui/material";
import { useState } from "react";
import { House, ScrollText, Activity, User, HandHeart, Phone } from "lucide-react";

//Komponen header
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
              RFC 2350
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
            class="relative flex bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
          >
            <span class="relative z-10">Kontak</span>
          </Link>
        </div>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box
            sx={{
              width: 250,
              backgroundColor: "#1a1a1a",
              color: "#fff",
              height: "100%",
            }}
            role="presentation"
          >
            <nav class="flex flex-col gap-3 p-4">
              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <House
                  className="mr-1"
                  size={24}
                />
                <span class="text-xl text-white font-medium">
                  <Link
                    to="/"
                    class="text-xl text-white font-medium hover:text-violet-600"
                  >
                    Beranda
                  </Link>
                </span>
              </div>

              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <User
                  size={24}
                  className={"mr-1"}
                />
                <span>
                  <Link
                    to="/organisasi"
                    class="text-xl text-white font-medium hover:text-violet-600"
                  >
                    Profil
                  </Link>
                </span>
              </div>

              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <ScrollText
                  className="mr-1"
                  size={24}
                />
                <span>
                  <Link
                    to="/rfc"
                    class="text-xl text-white font-medium hover:text-violet-600"
                  >
                    RFC 2350
                  </Link>
                </span>
              </div>

              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <HandHeart
                  className="mr-1"
                  size={24}
                />
                <span>
                  <Link
                    to="/services"
                    class="text-xl text-white font-medium hover:text-violet-600"
                  >
                    Layanan
                  </Link>
                </span>
              </div>

              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <Activity
                  className="mr-1"
                  size={24}
                />
                <span>
                  <Link
                    to="/activity"
                    class="text-xl text-white font-medium hover:text-violet-600"
                  >
                    Kegiatan
                  </Link>
                </span>
              </div>
              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <Phone className="mr-1" size={24}/>
                <span>
                  <Link
                    to="/contact"
                    class="text-xl text-white font-medium hover:text-violet-600"
                  >
                    Kontak Kami
                  </Link>
                </span>
              </div>
            </nav>
          </Box>
        </Drawer>
      </header>
    </section>
  );
};

export default Header;
