import { useRef } from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { ArticleHome } from "../components/ArticleHome";

const Home = () => {
  const resultRef = useRef(null);
  return (
    <>
      <Hero resultRef={resultRef} />
      <Stats />
      <ArticleHome ref={resultRef} />
    </>
  );
};

export default Home;
