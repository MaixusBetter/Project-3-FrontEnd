import React from 'react';
import { Link } from 'react-router-dom';
import './NewsArticle.css'; 

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/article/${article.id}`}>Read more</Link>
    </div>
  );
};

export default NewsArticle;
