import  ArticleList  from "../components/lists/ArticleList";
import Report from "../src/assets/Report.svg";
import Hacker from "../src/assets/Hacker.svg";
import Eye from "../src/assets/Eye.svg";

const Services = () => {
  return (
    <>
      <section class="bg-gray-900 text-white body-font pt-8 pb-8">
        <div class="container px-5 py-5 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              Layanan
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Berikut adalah layanan yang diberikan oleh PDN-CSIRT
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-violet-600 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-blue-500 mb-5 flex-shrink-0">
                <img src={Hacker} />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Layanan Reaktif
                </h2>
                <p class="leading-relaxed text-base">
                  Peringatan dini (alerts and warnings), Penanganan insiden
                  siber, dan Penanganan kerawanan dan artefak
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-blue-500 mb-5 flex-shrink-0">
                <img src={Eye} />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Layanan Proaktif
                </h2>
                <p class="leading-relaxed text-base">
                  Pemantauan potensi ancaman, Pendeteksian serangan
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-blue-500 mb-5 flex-shrink-0">
                <img src={Report} />
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Manajemen Kualitas Keamanan
                </h2>
                <p class="leading-relaxed text-base">
                  Analisis risiko, Edukasi dan pelatihan
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Unduh Dokumen Panduan Keamanan
        </button>
      </section>
      <ArticleList />
    </>
  );
};

export default Services;
