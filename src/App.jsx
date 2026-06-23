import React, { useEffect } from 'react';
import Hero from './components/Hero';
import InvitationMessage from './components/InvitationMessage';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import MemoriesStrip from './components/MemoriesStrip';
import Blessings from './components/Blessings';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-olive-dark text-white-pure overflow-hidden selection:bg-olive-light selection:text-olive-dark font-body">
      <Hero />
      <InvitationMessage />
      <EventDetails />
      <Countdown />
      <MemoriesStrip />
      <Blessings />
      <Footer />
    </div>
  );
}

export default App;
