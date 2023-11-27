import React, { useState, useEffect } from 'react';
import HTML from '../../../public/media/HTML5_logo.webp';
import CSS from '../../../public/media/CSS3_logo_and_wordmark.svg';
import JS from '../../../public/media/JS_logo.webp';
import PHP from '../../../public/media/PHP-logo.svg';

import placeholder from '../../../public/media/placeholder.svg';
const Competence = ({ nom, pourcentage }) => {

  // Définis une variable pour stocker l'image basée sur le nom de la compétence
  let image;
  let displayStyle = {}; // Style par défaut

  // Associe chaque compétence à son image respective
  switch (nom) {
    case 'HTML':
      image = HTML;
      break;
    case 'CSS':
      image = CSS;
      break;
    case 'JS':
      image = JS;
      break;
    case 'PHP':
      image = PHP;
      break;
    default:
      // Par défaut, utilise une image générique ou une image par défaut
      image = placeholder;
      displayStyle = { display: 'none' };
      break;
  }

  return (
    <div className="skill">
      <div className="skill-group">
        <p className="skill-name">{nom}</p>
        <img
          className="skill-logo"
          src={image}
          alt={nom}
          style={displayStyle}
        />
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${pourcentage}%` }}></div>
      </div>
    </div>
  );
};

// Composant pour afficher une expérience professionnelle
const Experience = ({ poste, entreprise, annees }) => {
  return (
    <div className="experience">
      <div className="experiance-entreprise">
        <h3>{poste}</h3>
        <img
          className="experiance-logo"
          src={placeholder}
          alt="logo-entreprise"
        />
      </div>
      <p>
        {entreprise} - {annees}
      </p>
    </div>
  );
};

// Composant principal du portfolio

const Skills = () => {
  // Utilise le hook useState pour gérer l'état des compétences
  const [competencesFront, setCompetencesFront] = useState([
    { nom: 'HTML', pourcentage: 85 },
    { nom: 'CSS', pourcentage: 65 },
    { nom: 'JS', pourcentage: 75 },
  ]);
  const [competencesBack, setCompetencesBack] = useState([
    { nom: 'PHP', pourcentage: 55 },
    { nom: 'SQL', pourcentage: 60 },
    { nom: 'NOSQL', pourcentage: 70 },
  ]);

  // Utilise le hook useState pour gérer l'état des expériences professionnelles
  const [experiences, setExperiences] = useState([
    {
      poste: 'Développeur Front-End',
      entreprise: 'ABC Entreprise',
      annees: '2018/2020',
    },
    {
      poste: 'Développeur Full Stack',
      entreprise: 'XYZ Agence',
      annees: '2021/2023',
    },
  ]);

  // Données pour les autres compétences (hors informatique) et les hobbies
  const autresCompetences = [
    'Adaptabilité ',
    'Gestion de projet',
    'Communication',
    'Analyse et Synthèse',
  ];
  const hobbies = ['Football', 'Musculation', 'Basketball'];

  return (
    <section className="skills">
      {/* Section des compétences */}
      <h1>Mes Compétences</h1>
      <div className="compétances">
        <div className="frontend">
          <h3>Front-End</h3>

          {competencesFront.map((competence, index) => (
            <Competence
              key={index}
              nom={competence.nom}
              pourcentage={competence.pourcentage}
            />
          ))}
        </div>

        <div className="backend">
          <h3>Back-End</h3>

          {competencesBack.map((competence, index) => (
            <Competence
              key={index}
              nom={competence.nom}
              pourcentage={competence.pourcentage}
            />
          ))}
        </div>
      </div>
      <div className="experiances">
        {/* Section des expériences professionnelles */}
        <h1>Mes Expériences</h1>
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            poste={experience.poste}
            entreprise={experience.entreprise}
            annees={experience.annees}
          />
        ))}
      </div>

      {/* Section des autres compétences (hors informatique) */}
      <h1>Autres Compétences</h1>
      <ul>
        {autresCompetences.map((comp, index) => (
          <li key={index}>{comp}</li>
        ))}
      </ul>

      {/* Section des hobbies */}
      <h1>Mes Hobbies</h1>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
