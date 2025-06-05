const ActivityCard = ({ img, title, subtitle, desc }) => {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-100 p-6 rounded-lg overflow-hidden text-ellipsis max-h-100">
        <img
          class="h-40 rounded w-full object-cover object-center mb-6"
          src={img}
          alt="content"
        />
        <h3 class="tracking-widest text-blue-500 text-xs font-medium title-font">
          {subtitle}
        </h3>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        <p class="leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
