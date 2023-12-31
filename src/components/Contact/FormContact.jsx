import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//
const ContactForm = ({ onSubmit }) => {
  // États pour stocker les valeurs des champs et les messages d'erreur
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Suivre si l'e-mail et le message ont été modifiés respectivement
  const [emailChanged, setEmailChanged] = useState(false);
  const [messageChanged, setMessageChanged] = useState(false);

  // État pour suivre la validité globale du formulaire
  const [isFormValid, setIsFormValid] = useState(false);

  // Effet pour valider le formulaire à chaque modification des champs e-mail ou message
  useEffect(() => {
    setIsFormValid(validateForm());
  }, [email, message]);

  // Fonction pour valider le format de l'e-mail
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Fonction pour valider l'ensemble du formulaire
  const validateForm = () => {
    const errors = [
      !validateEmail(email) &&
        emailChanged &&
        'Veuillez saisir une adresse e-mail valide.',
      message.length < 10 &&
        messageChanged &&
        'Le message doit contenir au moins 10 caractères.',
    ].filter(Boolean); // Filtrage des erreurs non nulles

    setEmailError(errors.find((error) => error.includes('e-mail')) || '');
    setMessageError(errors.find((error) => error.includes('message')) || '');
    

    return errors.length === 0; // Indique que le formulaire est valide si le tableau d'erreurs est vide
  };

  // Gestion du changement de l'e-mail
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailChanged(true); // Marque le champ comme "modifié"
    if (!validateEmail(value) && value.trim() !== '') {
      setEmailError('Veuillez saisir une adresse e-mail valide.');
    } else {
      setEmailError('');
    }
  };

  // Gestion du changement du message
  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageChanged(true); // Marque le champ comme "modifié"
    if (value.length < 10 && value.trim() !== '') {
      setMessageError('Le message doit contenir au moins 10 caractères.');
    } else {
      setMessageError('');
    }

    /**
     * Ces console log on servi à résoudre le problème d'affectation 
     * du message d'erreur de 'message' */
    
    // console.log( 'messageError :' + messageError);
    // console.log('emailError : ' + emailError);
  };

  // Soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError || messageError) {
      return; // Interrompt la soumission si des erreurs sont présentes
    }

    alert('Votre message a été envoyé !'); // Affiche une alerte de succès
    onSubmit({ email, message }); // Appelle la fonction onSubmit du composant parent avec les données du formulaire
  };

  // Rendu du formulaire avec les champs, les messages d'erreur et le bouton de soumission
  return (
    <form
      className="contact-form needs-validation"
      onSubmit={handleSubmit}
      noValidate>
      <h1>Formulaire de contact</h1>
      <div className="form-row  ">
        <div className="form-group">
          <label htmlFor="email" className="col-form-label">
            E-mail :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder='exemple@fr.com'
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailChanged(true)}
            required
          />
          <div
            className="invalid-feedback"
            style={{ display: emailError ? 'block' : 'none' }}>
            <p className="email-error" style={{ color: 'red' }}>
              {emailError}
            </p>
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="message" className="col-form-label">
            Message :
          </label>
          <textarea
            className="form-control"
            id="message"
            placeholder='Ecrire un message.'
            value={message}
            onChange={handleMessageChange}
            onBlur={() => setMessageChanged(true)}
            required
          />
          <div
            className="invalid-feedback"
            style={{ display: messageError ? 'block' : 'none' }}>
            <p className="message-error">{messageError}</p>
          </div>
        </div>
      </div>
      <button
        className="form-submit btn btn-primary"
        type="submit"
        disabled={!isFormValid}>
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
