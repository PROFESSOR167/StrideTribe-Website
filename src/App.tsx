import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AboutSection from './components/sections/About';
import UpcomingRuns from './components/sections/UpcomingRuns';
import StravaIntegration from './components/sections/StravaIntegration';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Newsletter from './components/sections/Newsletter';

import './index.css';

function App() {
  // Update the page title
  useEffect(() => {
    document.title = 'StrideTribe | Pune\'s Running Community';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <UpcomingRuns />
        <StravaIntegration />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;