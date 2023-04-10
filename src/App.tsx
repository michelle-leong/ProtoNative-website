import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import './styles/main.scss';

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <MainContainer />
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);
