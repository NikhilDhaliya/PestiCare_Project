import React from 'react';
import Navbar from './Compnents/Navbar';
import Footer from './Compnents/Footer';
import MainContent from './Compnents/MainContent';

const App = () => {
  return (
    <div>
        <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #eaffea 0%, #f6fff6 100%)' }}>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
    </div>
  )
}

export default App