import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { ArticleList } from "../components/lists/ArticleList";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <div class="bg-gray-900 pb-2 px-4 md:px-8">
        <div class="flex flex-wrap -mx-4 -my-8">
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default Home;
