import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;

