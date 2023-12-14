import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import Loader from 'react-loaders';
import './index.scss';

const Portfolio = ({ tabs, items }) => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (replace with actual data fetching logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const filteredItems = selectedTab === 'all' ? items : items.filter(item => item.category === selectedTab);

  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className="container portfolio-page">
          <div className="tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={selectedTab === tab ? 'active' : ''}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredItems.map((item, index) => (
              <PortfolioItem key={index} title={item.title} categories={item.category} image={item.image} github={item.github} className="items"/>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
