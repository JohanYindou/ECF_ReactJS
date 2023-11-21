import React, { useState } from 'react';

const Competence = ({ nom, pourcentage }) => {
  return (
    <div className="skill">
      <p className="skill-name">{nom}</p>
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
      <h3>{poste}</h3>
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
    { nom: ' HTML', pourcentage: 80 },
    { nom: 'CSS', pourcentage: 70 },
    { nom: 'JS', pourcentage: 85 },
  ]);
  const [competencesBack, setCompetencesBack] = useState([
    { nom: 'PHP', pourcentage: 65 },
    { nom: 'SQL', pourcentage: 75 },
    { nom: 'NOSQL', pourcentage: 90 },
  ]);

  // Utilise le hook useState pour gérer l'état des expériences professionnelles
  const [experiences, setExperiences] = useState([
    {
      poste: 'Développeur Front-End',
      entreprise: 'ABC Entreprise',
      annees: '2018-2020',
    },
    {
      poste: 'Développeur Full Stack',
      entreprise: 'XYZ Agence',
      annees: '2021-2023',
    },
  ]);

  // Données pour les autres compétences (hors informatique) et les hobbies
  const autresCompetences = ['Marketing', 'Gestion de projet', 'Communication'];
  const hobbies = ['Photographie', 'Musculation', 'Peinture'];

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
      <div className='experiances'>
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
