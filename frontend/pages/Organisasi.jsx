const Organisasi = () => {
  return (
    <section class="bg-gray-900 text-white body-font">
      <div class="container px-5 py-5 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                  ></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-white text-lg">
                  PDN - CSIRT
                </h2>
                <div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p class="text-base">
                  Merupakan tim respons insiden keamanan siber yang bertugas
                  melindungi infrastruktur teknologi informasi PDN dari berbagai
                  ancaman siber.
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h2 class="text-xl font-bold text-center">Visi</h2>
              <p class="leading-relaxed text-lg mb-4">
                Visi PDN-CSIRT adalah Mewujudkan layanan infrastruktur dan
                sistem elektronik pada Pusat Data Nasional (PDN) yang aman,
                andal, dan bertanggung jawab.
              </p>
              <h2 class="text-xl font-bold text-center">Misi</h2>
              <p class="leading-relaxed text-lg mb-4">
                <li>Memastikan keamanan data dan informasi.</li>
                <li>Menerapkan standar teknis dan prosedur keamanan SPBE.</li>
                <li>
                  Melakukan edukasi dan pembinaan untuk meningkatkan kesadaran
                  keamanan siber.
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="container mx-auto px-4 py-12">
    //   <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h3 className="text-xl font-bold mb-4">Ketua</h3>
    //       <p className="text-gray-600">Pak XY</p>
    //     </div>
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h3 className="text-xl font-bold mb-4">Wakil Ketua</h3>
    //       <p className="text-gray-600">Bu VO</p>
    //     </div>
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h3 className="text-xl font-bold mb-4">Sekretaris</h3>
    //       <p className="text-gray-600">Pak BN</p>
    //     </div>
    //     <div className="bg-white p-6 rounded-lg shadow-md">
    //       <h3 className="text-xl font-bold mb-4">Bendahara</h3>
    //       <p className="text-gray-600">Pak BA</p>
    //     </div>
    //     <p>Inget, ini cuman template, tar ubah lagi</p>
    //   </div>
    // </div>
  );
};

export default Organisasi;
