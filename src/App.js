import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Layout from './components/Layout';
import './App.scss';

function App() {
  const tabs = ['Figma', 'Laravel', 'React JS'];
  const items = [
    { title: 'DAJ', category: 'Figma',  github: 'https://github.com/project1' },
    { title: 'DCD', category: 'Figma',  github: 'https://github.com/project1' },
    { title: 'DJK', category: 'Figma',  github: 'https://github.com/project1' },
    { title: 'APIUSER', category: 'React JS',  github: 'https://github.com/project2' },
    { title: 'CinemaMovie', category: 'React JS',  github: 'https://github.com/project2' },
    { title: 'PK', category: 'React JS',  github: 'https://github.com/project2' },
    { title: 'TDL', category: 'React JS',  github: 'https://github.com/project2' },
    { title: 'WI', category: 'Laravel',  github: 'https://github.com/project2' },
  ];
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio tabs={tabs} items={items} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
