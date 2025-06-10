export const ArticleCard = ({ title, desc, month, day, category, author }) => {
  return (
    <div class="keen-slider__slide bg-gray-700 rounded-lg py-8 px-4 lg:w-1/3">
      <div class="h-full flex items-start">
        <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
          <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
            {month}
          </span>
          <span class="font-medium text-lg text-white title-font leading-none">
            {day}
          </span>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
            {category}
          </h2>
          <h1 class="title-font text-xl font-medium text-white mb-3">
            {title}
          </h1>
          <p class="leading-relaxed mb-5 text-white">{desc}</p>
          <a class="inline-flex items-center">
            <img
              alt="blog"
              src="https://dummyimage.com/103x103"
              class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-3">
              <span class="title-font font-medium text-white">{author}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
