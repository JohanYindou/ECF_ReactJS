import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/Contact/FormContact';

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const jsonData = JSON.stringify(formData);
    console.log('Données du formulaire (JSON) :', jsonData);
    // Enregistrement des données dans le localStorage sous une clé spécifique
    localStorage.setItem('formData', jsonData);
  };

  return (
    <>
      <Navigation />
      <section className="contact">
        
        <ContactForm onSubmit={handleFormSubmit} />
      </section>
    </>
  );
};

export default Contact;
