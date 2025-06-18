import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import Rating from './components/Rating';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Rating />
      </main>
      <Footer />
    </div>
  );
}

export default App;
