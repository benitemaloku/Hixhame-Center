import React from "react";

import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import HijamaDays from "../components/HijamaDays";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <OurServices />
      <OurWork />
      <Stats />
      <HijamaDays />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
