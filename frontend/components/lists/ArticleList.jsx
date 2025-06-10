import { React, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Component
import ArticleCard from "../page-components/ArticleCard";

// Data
import articleData from "../../src/db/articleList.json";

export const ArticleList = () => {
  const [article, setArticle] = useState(articleData);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });
  return (
    <>
      <section class="bg-gray-900">
        <h1 class="text-center sm:text-3xl text-2xl font-medium title-font text-white">
          Berita Terkini
        </h1>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div
              ref={sliderRef}
              class="keen-slider"
            >
              {article.map((item) => (
                <ArticleCard
                  key={item.id}
                  month={item.month}
                  day={item.day}
                  title={item.title}
                  category={item.category}
                  desc={item.desc}
                  author={item.author}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
