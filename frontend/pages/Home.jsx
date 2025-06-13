import React from 'react';
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import ArticleList from "../components/lists/ArticleList";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ArticleList />
    </>
  );
};

export default Home;