import React, { useEffect, useState } from 'react';
import NewsArticle from './NewsArticle';
import './NewsList.css'; 

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=3713575862d34444afaac73100b88980`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
