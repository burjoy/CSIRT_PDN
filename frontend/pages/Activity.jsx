import { ActivityList } from "../components/lists/ActivityList";

const Activity = () => {
  return (
    <section class="bg-gradient-to-br from-slate-800 to-slate-900 text-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="text-center lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Laporan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Kegiatan
              </span>
            </h1>
            <div class="flex mt-6 justify-center">
              <div class="h-1 w-20 bg-violet-600 rounded"></div>
            </div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nulla rem facilis illum provident eos dignissimos
            quod maxime ipsam at.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <ActivityList />
        </div>
      </div>
    </section>
  );
};

export default Activity;
