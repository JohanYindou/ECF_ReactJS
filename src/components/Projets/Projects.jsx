import React from 'react';

// Données factices pour les projets
const projetsTab = [
  {
    id: 1,
    nom: 'Projet 1',
    technologie: 'React, HTML, CSS',
    image: 'lien_vers_image_1.jpg',
    lienSources: 'https://lien_vers_sources_1',
    description: 'Une brève description du Projet 1',
  },
  {
    id: 2,
    nom: 'Projet 2',
    technologie: 'JavaScript, Node.js',
    image: 'lien_vers_image_2.jpg',
    lienSources: 'https://lien_vers_sources_2',
    description: 'Une brève description du Projet 2',
  },
  // Ajoutez d'autres projets ici au besoin
];

const Projects = () => {
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <div className="projets">
        {projetsTab.map((projet) => (
          <div key={projet.id} className="projet">
            <h2 className="projet-titre">{projet.nom}</h2>
            <div className="details">
              <div className="projet-image">
                <img src={projet.image} alt={projet.nom} />
              </div>
              <div className="projet-info">
                <p>Technologies utilisées: {projet.technologie}</p>
                <p>Description: {projet.description}</p>
                <p>
                  <a href={projet.lienSources}>Voir les sources</a>
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
