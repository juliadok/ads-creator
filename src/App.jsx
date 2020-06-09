import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

const App = ({ state }) => {
  return (
    <>
      <Header />
      <Content state={state} />
      <Footer className="bg-primary" />
    </>
  );
};

export default App;
