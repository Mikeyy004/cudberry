import React from 'react';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import Story from './components/story/Story';
import CadburyLanding from './components/header/CadburyLanding';
import Best from './components/best/Best';
import Products from './components/products/Products';

function App() {
  return (
    <div>
      <CadburyLanding/>
      <Best/>
      <Products/>
      <Story/>
      <Join/>
    <Footer/>
    </div>
  );
}

export default App;
