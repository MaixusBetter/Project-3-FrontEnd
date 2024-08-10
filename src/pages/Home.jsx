import React from 'react';
import NewsList from '../components/NewsList';
import './Home.css';
import breakingNewsLogo from '../assets/Breaking News.png'; 

const Home = () => {
  return (
    <div>
      <img src={breakingNewsLogo} alt="Breaking News" className="breaking-news-logo" />
      <NewsList />
    </div>
  );
};

export default Home;
