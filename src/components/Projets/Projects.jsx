import React from 'react';
import { useState } from 'react';
import Countrix1 from '../../../public/media/Countrix_1.png';
import Countrix2 from '../../../public/media/Countrix_2.png';
import Countrix3 from '../../../public/media/Countrix_3.png';

import Cinemax1 from '../../../public/media/Cinemax_1.png';
import Cinemax2 from '../../../public/media/Cinemax_2.png';

import Supakar1 from '../../../public/media/Supakar_1.png'
import Supakar2 from '../../../public/media/Supakar_2.png'

import Chatbot1 from '../../../public/media/Chatbot_1.png';
import Chatbot2 from '../../../public/media/Chatbot_2.png';
import Chatbot3 from '../../../public/media/Chatbot_3.png';
import Chatbot4 from '../../../public/media/Chatbot_4.png';

const projetsTab = [
  {
    id: 1,
    nom: 'Countrix',
    technologie: 'React, HTML, CSS',
    image: [Countrix1, Countrix2, Countrix3],
    lienSources: 'https://github.com/JohanYindou/Countrix',
    description: `Ce projet permet d'afficher des données de pays tel que : la capital, la population, le drapeau en sélectionant le continent souhaité.`,
  },
  {
    id: 2,
    nom: 'Cinemax',
    technologie: 'React, HTML, CSS, Express',
    image: [Cinemax1, Cinemax2],
    lienSources: 'https://github.com/JohanYindou/Cinemax',
    description: `Cinemax est une app de recherche de film réaliser avec l'API de OMDB et permet d'ajouter une sélection en favoris.`,
  },
  {
    id: 3,
    nom: 'Supakar',
    technologie: 'React, HTML, CSS',
    image: [Supakar1, Supakar2],
    lienSources: 'https://github.com/JohanYindou/Supackar',
    description: `Un app React de personnalisations de voitures qui permet de changer la couleur de la voiture au click sur un bouton.`,
  },
  {
    id: 4,
    nom: 'Chatbot',
    technologie: ' React, HTML, CSS',
    image: [Chatbot1, Chatbot2, Chatbot3, Chatbot4],
    lienSources: 'https://github.com/JohanYindou/cda-tp-validation-main',
    description: `Chatbot  réalisé avec l'API de openai qui répond à des questions sur un sujet tech.`,
  },
];

const Projects = () => {
  const [imageIndexes, setImageIndexes] = useState(
    Array(projetsTab.length).fill(0)
  );

  const nextImage = (index, length) => {
    const newIndexes = [...imageIndexes];
    newIndexes[index] = (newIndexes[index] + 1) % length;
    setImageIndexes(newIndexes);
  };

  const previousImage = (index, length) => {
    const newIndexes = [...imageIndexes];
    newIndexes[index] = (newIndexes[index] - 1 + length) % length;
    setImageIndexes(newIndexes);
  };

  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <div className="projets">
        {projetsTab.map((projet, index) => (
          <div key={projet.id} className="projet">
            <h2 className="projet-titre">{projet.nom}</h2>
            <div className="details">
              <div className="projet-image">
                <img
                  src={projet.image[imageIndexes[index]]}
                  alt={`Image ${imageIndexes[index] + 1}`}
                />
                <div className="image-navigation">
                  <button
                    onClick={() => previousImage(index, projet.image.length)}>
                    Précédent
                  </button>
                  <button onClick={() => nextImage(index, projet.image.length)}>
                    Suivant
                  </button>
                </div>
              </div>
              <div className="projet-info">
                <p>Technologies utilisées : {projet.technologie}</p>
                <p>Description : {projet.description}</p>
                <p>
                  <a href={projet.lienSources} target='_blank'>Voir les sources</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
