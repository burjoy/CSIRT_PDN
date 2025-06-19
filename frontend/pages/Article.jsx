import { useParams } from "react-router-dom";
import { useState } from "react";

// Data
import articleData from "../src/db/articleList.json";

export const Article = () => {
  const getParams = useParams();
  const params = new URLSearchParams(getParams.slug);
  let idArticle = params.get("id");
  const [article, setArticle] = useState(articleData[idArticle - 1]);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                {article.category}
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 text-base/8 text-white">{article.desc}</p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            src={article.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
