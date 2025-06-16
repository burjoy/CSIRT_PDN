import { useState } from "react";
import ArticleCard from "../page-components/ArticleCard";
import { ListCoba } from "../../src/db/ListCoba";

const ArticleList = ({homeRendered}) => {
  const [articles, setArticle] = useState(ListCoba);

  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          desc={article.desc}
          month={article.month}
          day={article.day}
          category={article.category}
          author={article.author}
          image={article.image}
          homeRendered={homeRendered}
        />
      ))}
    </>
  );
};

export default ArticleList;