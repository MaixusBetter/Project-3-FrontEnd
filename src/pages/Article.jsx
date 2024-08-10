import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the article data based on the ID
    fetch(`https://newsapi.org/v2/everything?apiKey=YOUR_API_KEY&id=${id}`)
      .then(response => response.json())
      .then(data => setArticle(data.article));
  }, [id]);

  return (
    <div>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Article;
