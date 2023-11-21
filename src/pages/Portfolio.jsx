import { useState } from 'react';
import '../styles/App.css';
import Navigation from '../components/Navigation';
import Projects from '../components/Projets/Projects';

function Portfolio () {
    return (
      <>
        <Navigation />
        <Projects />
      </>
    );

}

export default Portfolio;