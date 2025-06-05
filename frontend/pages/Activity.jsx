import { ActivityList } from "../components/lists/ActivityList";

const Activity = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Laporan Kegiatan Tim PDN-CSIRT
            </h1>
            <div class="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
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
