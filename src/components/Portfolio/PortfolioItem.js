import React from 'react';
import imgfigma from '../ImportImg/figma';
import imglaravel from '../ImportImg/laravel';
import imgreactjs from '../ImportImg/react';
import './PortfolioItem.scss'; 

const PortfolioItem = ({ title, categories, github }) => {
  let matchedImage;

  switch (categories) {
    case 'Figma':
      matchedImage = imgfigma.find(image => image.includes(title));
      break;
    case 'Laravel':
      matchedImage = imglaravel.find(image => image.includes(title));
      break;
    case 'React JS':
      matchedImage = imgreactjs.find(image => image.includes(title));
      break;
    default:
      break;
  }

  return (
    <div className="portfolio-item">
      <div className="border border-gray-200 p-4 rounded-lg">
        {matchedImage && (
          <img src={matchedImage} alt={title} className="portfolio-image" />
        )}
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-category">{categories}</p>
        <a href={github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
