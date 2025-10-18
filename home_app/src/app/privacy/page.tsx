"use client";

import Header from './components/header';
import Footer from './components/footer';
import ModalForm from './components/modal';
import HoverButton from './components/hoverButton';
import React, { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSend = (data: any) => {
    console.log("Form submitted with data:", data);
    setModalOpen(false);
  };

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Welcome Message</h2>
          <div className="placeholder">Welcome message goes here</div>
        </section>

        <section>
          <h2>Upcoming Events</h2>
          <div className="placeholder">Events calendar or listings go here</div>
        </section>

        <section>
          <h2>Announcements</h2>
          <div className="placeholder">Community announcements and news go here</div>
        </section>

        <section>
          <h2>Board Members</h2>
          <div className="placeholder">List or photos of HOA board members go here</div>
        </section>
        <HoverButton onClick={() => setModalOpen(true)} />
        <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} onSend={handleSend} />
      </main>
      <Footer />
    </div>
  );
}
