const ActivityCard = ({ img, title, subtitle, desc }) => {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-700 p-6 pb-100 rounded-lg overflow-hidden max-h-100">
        <img
          class="h-40 rounded w-full object-cover object-center mb-6"
          src={img}
          alt="content"
        />
        <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
          {subtitle}
        </h3>
        <h2 class="text-lg text-white font-medium title-font mb-4">{title}</h2>
        <p class="line-clamp-5 leading-relaxed text-base text-white">{desc}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
