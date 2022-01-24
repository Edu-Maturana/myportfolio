import React from 'react';

import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

export default function Home() {
  return <div>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>;
}
