import React from 'react';
import ReactGA from 'react-ga';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

const App = () => {
  ReactGA.initialize('UA-100520893-1');
  ReactGA.pageview(window.location.pathname);
  return (
    <div className="bitter">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
