import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import  ArticleList  from "../components/lists/ArticleList";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <div class="bg-gray-900 container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -my-8">
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default Home;
