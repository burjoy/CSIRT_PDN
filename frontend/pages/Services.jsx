import { Newspaper } from "lucide-react";

import ArticleList from "../components/lists/ArticleList";

import illus1 from "../src/assets/clipboard.png";
import illus2 from "../src/assets/hacker.png";
import illus3 from "../src/assets/vision.png";

const Services = () => {
  return (
    <>
      <section className="bg-gray-900 text-white body-font pt-8 pb-8">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Layanan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                PDN
              </span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Berikut adalah layanan yang diberikan oleh PDN-CSIRT
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-blue-500 mb-5 flex-shrink-0">
                <img
                  src={illus2}
                  alt="Reactive Services"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font font-medium mb-3">
                  Layanan Reaktif
                </h2>
                <p className="leading-relaxed text-base">
                  Peringatan dini (alerts and warnings), Penanganan insiden
                  siber, dan Penanganan kerawanan dan artefak
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-blue-500 mb-5 flex-shrink-0">
                <img
                  src={illus3}
                  alt="Proactive Services"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font font-medium mb-3">
                  Layanan Proaktif
                </h2>
                <p className="leading-relaxed text-base">
                  Pemantauan potensi ancaman, Pendeteksian serangan
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-blue-500 mb-5 flex-shrink-0">
                <img
                  src={illus1}
                  alt="Security Quality Management"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font font-medium mb-3">
                  Manajemen Kualitas Keamanan
                </h2>
                <p className="leading-relaxed text-base">
                  Analisis risiko, Edukasi dan pelatihan
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
          Unduh Dokumen Panduan Keamanan
        </button>
      </section>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-2 sm:p-3 bg-blue-500/20 rounded-xl sm:rounded-2xl border border-blue-500/30">
            <Newspaper className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
          Berita{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Terkini
          </span>
        </h1>
        <div className="flex mt-6 justify-center pb-8">
          <div className="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
        </div>
        <div class="flex flex-wrap -m-4">
          <ArticleList homeRendered={false} />
        </div>
      </div>
    </>
  );
};

export default Services;
