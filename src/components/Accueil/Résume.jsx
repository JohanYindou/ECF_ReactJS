import React from 'react';

const Resume = () => {
  const nom = 'Johan Yindou';
    const métier = `Concepteur / Développeur d'application `
   
  return (
    <section className="accueil">
      <div className="resume">
        <img className="profile" src="https://placehold.co/500x400" alt="" />
        <div className="resume-item">
          <h1 className="nom">Je m'appelle {nom}</h1>
          <p className="metier">{métier}</p>
        </div>
      </div>

      <p className="resume-présentation">
        Je suis {nom}, passionné de création et de développement . Ce portfolio
        est ma galerie virtuelle où je partage mes réalisations dans le design
        web, le développement et l'expérience utilisateur. J'aime repousser les
        limites de la créativité pour concevoir des solutions uniques et
        fonctionnelles. Explorez mes projets pour découvrir mon approche
        innovante et mes compétences. Je suis ouvert aux collaborations et aux
        opportunités. Parcourez mes travaux et n'hésitez pas à me contacter pour
        discuter de vos projets ou pour en savoir plus sur mon parcours. Merci
        de visiter mon portfolio !
      </p>
    </section>
  );
};
export default Resume;
