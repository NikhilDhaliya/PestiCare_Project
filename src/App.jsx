import React from 'react';
import Navbar from './Compnents/Navbar';
import Main from './Compnents/Main';
import Footer from './Compnents/Footer';

const App = () => {
  return (
    <div>
        <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #eaffea 0%, #f6fff6 100%)' }}>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
    </div>
  )
}

export default App