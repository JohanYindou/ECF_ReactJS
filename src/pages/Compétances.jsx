import { useState } from 'react';
import '../styles/App.css';
import Navigation from '../components/Navigation';
import Skills from '../components/Compétances/Skills';


function Competances() {
  return (
    <>
      <Navigation />
      <Skills />
    </>
  )
}

export default Competances;
