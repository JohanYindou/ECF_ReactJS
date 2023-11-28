# ECF ReactJS

## Description

C'est une app qui sert de portfolio.
Elle est composée de 4 pages :

- Accueil
- Compétences
- Portfolio
- Contact

### Les étapes de réalisation

1. Installations
2. Creation des Composants
3. Création des pages
4. Mise en place d'un router
5. Mise en place des média Querries

---

#### Installation de React

Pour travailler avec React on doit avoir intallé NodeJS et NPM.
Ici nous avons choisit d'utiliser Vite.

vitejs

```bash
npm create vite@latest ecf-portfolio
```

Suite à cela nous devons entrer dans le dossier de notre projet et installer les dépendances si nécessaire avant de lancer le serveur de développement.

```bash
cd ecf_reactjs && npm install
```

Lancez le serveur de développement `npm start` ou `npm run dev` pour vitejs.

---

### Création des composants

Pour les composants, dans ce projet nous avons l'architecture suivante :

```js
public
├── media // Dossier contenant toute les images et le cv
│     ├──images
│     └── Cv 
src
├── main.jsx // Initialise l'application et configurer les routes
├── pages
│   ├── Accueil.jsx // Page d'accueil
│   ├── Compétences.jsx // Page de Compétences
│   ├── Portfolio.jsx // Page de Portfolio
│   ├── Contact.jsx // Page de Contact
│   └── NotFound.jsx // Page des NotFound
├── components
│   ├── Accueil
│   │   ├── DownloadButton.jsx // Composant Download
│   │   └── Résume.jsx // Composant Résume
│   ├── Compétences
│   │   └── Skills.jsx // Composant Skills
│   ├── Contact
│   │   └── FormContact.jsx // Composant FormContact
│   ├── Contact
│   │   └── Projects.jsx // Composant Projects
│   ├── Footer.jsx //  Composant Footer
│   └── Navigation.jsx // Composant Navigation
├── styles
│   └── index.css // Fichier de style global
├── package.json // Fichier de config
├── package-lock.json // Fichier de config
├── .gitignore // Fichier de config
├── index.html // Point d'entrée pour React
└── vite.config.js // Fichier de configuration de vite

```

---

#### Création du composant Navigation

Pour créer le composant navigation nous avons besoins d'importer.

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
```

Ensuite on crée une fonction qui retourne le contenu de notre Navbar.
Ici link permetera de naviger entre les pages grace au to=""

```jsx
const Navigation = () => {
  return (
    <header>
      <div className="navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-item">Accueil</li>
          </Link>
          <Link to="/Compétences">
            <li className="navbar-item">Compétences</li>
          </Link>
          <Link to="/portfolio">
            <li className="navbar-item">Portfolio</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-item">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
```

---

#### Création du composant Footer

Pour créer le composant footer nous avons besoins d'importer.

```jsx
import React from 'react';
```

Ensuite on crée une fonction qui retourne le contenu de notre footer.
Ici la présence de target="_blank" : Cela spécifie au navigateur que le lien doit être ouvert dans un nouvel onglet ou une nouvelle fenêtre du navigateur.
Cependant, lorsqu'un lien est ouvert dans une nouvelle fenêtre via target="_blank", il est recommandé d'ajouter également les attributs rel="noopener noreferrer" pour des raisons de sécurité :

- rel="noopener" : Empêche la page liée d'accéder au contexte de la page parente (l'opener). Cela empêche les attaques potentielles qui pourraient être effectuées en manipulant la fenêtre parente depuis la page ouverte dans le nouvel onglet/fenêtre.

- rel="noreferrer" : Empêche que la page liée obtienne un référencement vers la page actuelle. Cela évite que des informations sur la page actuelle soient transmises à la page liée, ce qui pourrait potentiellement être exploité à des fins de suivi ou de collecte de données.

```jsx
const Footer = () => {
  return (
    <footer>
      <div className="infos">
        <ul className="infos-légal">
          <li className="titre-list">Information légales</li>
          <li>Mail : jyindou@gmail.com</li>
          <li>Tel : 06 27 57 18 90</li>

          <li>
            <a
              href="https://twitter.com/Johandlag"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/johandlag/"
              target="_blank"
              rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
        <ul className="mentions">
          <li className="données">
            <p className="titre-list">Données personnelles</p>
            <p>
              Les informations personnelles collectées sur ce site ne sont
              utilisées qu'à des fins de communication avec les visiteurs et ne
              seront pas transmises à des tiers sans consentement préalable.
            </p>
          </li>
          <li>
            <p className="titre-list">Copyright</p>
            <p>© 2023 YINDOU Johan Tous droits réservés.</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

```

---

#### Création des composant de la page Accueil

##### Composant DownloadButton

Pour réaliser ce composant, il faut importer en plus le CV qu'on veut donner à télécharger.

```jsx
import React from 'react';
import CV from '../../../public/media/CV.pdf'; 
```

Ici DownloadButton crée un bouton qui, lorsqu'il est cliqué, déclenche le téléchargement du fichier PDF spécifié qui est récupéré grace au fetch dans lequel on a utiliser blob. Un objet Blob (Binary Large Object) est un objet qui représente des données binaires, généralement sous la forme de fichiers.

```jsx
const DownloadButton = () => {
  const downloadFile = () => {
    fetch(CV)
      .then((response) => response.blob())
      .then((blob) => {

        const fileURL = URL.createObjectURL(blob);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.setAttribute('download', 'Johan_Yindou.pdf');
        document.body.appendChild(downloadLink);

        downloadLink.click();

        document.body.removeChild(downloadLink);
      });
  };

  return (
    <div>
      {/* Bouton pour déclencher le téléchargement */}
      <button className="btn btn-primary" onClick={downloadFile}>
        Télécharger mon CV
      </button>
    </div>
  );
};
```

##### Composant Résume

Dans ce composant on import donc DownloadButton et la photo de profil.

```jsx
import React from 'react';
import Profile from '../../../public/media/profile2.png';
import Download from './DownloadButton.jsx';
```

Dans ce composant on présente toutes les information nécessaires en plus du boutton de téléchargement.

```jsx
const Resume = () => {
  const nom = 'Johan Yindou';
  const métier = `Concepteur / Développeur d'application `;

  return (
    <section className="accueil">
      <div className="resume">
        <img className="profile" src={Profile} alt="" />
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
        opportunités. Parcourez mes travaux et n'hésitez pas à télécharger mon
        CV et me contacter pour discuter de vos projets ou pour en savoir plus
        sur mon parcours.
      </p>
      <p className="resume-présentation">Merci de visiter mon portfolio !</p>
      <Download />
    </section>
  );
};
export default Resume;

```

---

#### Création du composant Skills

Ici on importe en plus useState et useEffect et les logos.

```jsx
import React, { useState, useEffect } from 'react';
import HTML from '../../../public/media/HTML5_logo.webp';
import CSS from '../../../public/media/CSS3_logo_and_wordmark.svg';
import JS from '../../../public/media/JS_logo.webp';
import PHP from '../../../public/media/PHP-logo.svg';
import placeholder from '../../../public/media/placeholder.svg';
```

On crée tout d'abord les élements qui composeront ce composant.
Ici on a tout d'abord dans compétance un switch qui permet d'associer chaque compétence à son image respective et par défaut, utilise on image générique et on la cache.
Et ensuite on retourne la structure HTML de cet élément.

```jsx
const Competence = ({ nom, pourcentage }) => {
  let image;
  let displayStyle = {};
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
```

On crée un elément Experiance qui retourne la structure html

```jsx
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
```

Voici le composant principal ,  on utilise des hooks pour stocker et mettre à jour les donnés des compétences et des expériences professionnelles. Ces hooks useState retournent une valeur représentant l'état actuel et une fonction pour mettre à jour cet état, permettant ainsi de gérer dynamiquement ces informations au sein du composant.
On créer aussi des tableau pour autresCompetences et hobbies car il n'ont pas besoin d'utiliser useState.

On affiche chaque compétance grace au map en utilisant l'élément tout en  séparant les Compétences front du back.

On affiche ensuite l'element experiance pour chaque objet présent dans le hook

Enfin on affiche les autre Compétences et les hobbies.

```jsx
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
      <div className="Compétences">
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
      <h1>Autres Compétences</h1>
      <ul>
        {autresCompetences.map((comp, index) => (
          <li key={index}>{comp}</li>
        ))}
      </ul>
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

```

---

### Création du composant FormContact

Dans ce composant, on utilise aussi useState et useEffect.
On a aussi besoin d'utiliser bootstrap.

Pour cela on installe bootstrap

```bash
npm i bootstrap
```

Un fois téléchargé, on l'importe.

```jsx
import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

```

On utilise useState pour gérer différents étas :

- email, message: Stockent respectivement les valeurs des champs email et message du formulaire.
- emailError, messageError: Stockent les erreurs de validation pour les champs email et message.
- emailChanged, messageChanged: Indiquent si les champs email et message ont été modifiés.
- isFormValid: Indique si le formulaire est valide ou non.

useEffect permet de mettre a jour isFormValid à chaque fois que email ou message change.

handleEmailChange permet de gèrer le changement dans le champ email, vérifie la validité de l'email, met à jour les états et affiche les erreurs si nécessaire.

handleMessageChange gère le changement dans le champ message, vérifie la longueur du message, met à jour les états et affiche les erreurs si nécessaire.

handleSubmit gère la soumission du formulaire, empêche la soumission si des erreurs sont présentes, affiche une alerte de succès et appelle la fonction onSubmit passée en paramètre avec les données email et message.

On retourne le formulaire avec des champs pour l'email et le message.
On affiche les erreurs si il y en a. Si il y a des erreur le bouton d'envoi est désactivé si le formulaire n'est pas valide.

```jsx
const ContactForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [emailChanged, setEmailChanged] = useState(false);
  const [messageChanged, setMessageChanged] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [email, message]);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const errors = [
      !validateEmail(email) &&
        emailChanged &&
        'Veuillez saisir une adresse e-mail valide.',
      message.length < 10 &&
        messageChanged &&
        'Le message doit contenir au moins 10 caractères.',
    ].filter(Boolean); 

    setEmailError(errors.find((error) => error.includes('e-mail')) || '');
    setMessageError(errors.find((error) => error.includes('message')) || '');
    
    return errors.length === 0; /
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailChanged(true); 
    if (!validateEmail(value) && value.trim() !== '') {
      setEmailError('Veuillez saisir une adresse e-mail valide.');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageChanged(true); /
    if (value.length < 10 && value.trim() !== '') {
      setMessageError('Le message doit contenir au moins 10 caractères.');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailError || messageError) {
      return; 
    }

    alert('Votre message a été envoyé !'); // Affiche une alerte de succès
    onSubmit({ email, message }); 
  };

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

```

---

### Création du composant Projects

Pour ce composant on utilise useState. Il faut importer les photos des projets.

```jsx
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
```

On crée un tableau dans lequel on y stocke un objet pour chaque projet qu'on veut afficher dans lesquels on crée une key pour chaque donnée que l'on veut renseigner.

La fonction  projects permet de :

- initialiser l'état imageIndexes qui permet de stocker des images pour chaque projet. Il est initialisé avec un tableau rempli de zéros ayant la même longueur que le tableau projetsTab.

- nextImage prend deux paramètres : index (l'index du projet) et length (la longueur totale des images pour ce projet). Elle met à jour l'état imageIndexes en augmentant l'index de l'image actuellement affichée. Si l'index atteint la fin du tableau d'images pour ce projet, il revient à zéro.
- previousImage, fonction similaire à nextImage mais permet de naviguer vers l'image précédente en diminuant l'index. Si l'index est déjà à zéro, elle revient à la dernière image du projet.

Ici useState est utilisé pour créer et maintenir l'état local imageIndexes. Chaque fois que setImageIndexes est appelé, le composant se met à jour pour refléter ces changements d'état, ce qui déclenche un rendu avec les nouvelles données.

En résume Projects prend le role d'un slider.

On retourne le contenu de la page en mappant sur projetsTab.

```jsx
const projetsTab = [
  {
    id: 1,
    nom: 'Countrix',
    technologie: 'React, HTML, CSS;',
    image: [Countrix1, Countrix2, Countrix3],
    lienSources: 'https://github.com/JohanYindou/Countrix',
    description: `Ce projet permet d'afficher des données de pays tel que : la capital, la population, le drapeau en sélectionant le continent souhaité.`,
  },
  {
    id: 2,
    nom: 'Cinemax',
    technologie: 'React, HTML, CSS, Node.js',
    image: [Cinemax1, Cinemax2],
    lienSources: 'https://github.com/JohanYindou/Cinemax',
    description: `Cinemax est une app de recherche de film et permet d'ajouter une sélection en favoris.`,
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
    technologie: ' React, HTML, CSS;',
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

```

---

### Création des pages

Pour chaque page on utiliseras  le composant Navigation ainsi que Footer.

#### Création de la page Acceuil

```jsx
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Resume from '../components/Accueil/Résume'

function App() {

  return (
    <>
      <Navigation />
      <Resume />
      <Footer />
    </>
  )
}
export default App
```

#### Création de la page Compétance

```jsx
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Skills from '../components/Compétences/Skills';


function Competances() {
  return (
    <>
      <Navigation />
      <Skills />
      <Footer />
    </>
  );
}

export default Competances;

```

#### Création de la page Portfolio

```jsx
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Projects from '../components/Projets/Projects';

function Portfolio () {
    return (
      <>
        <Navigation />
        <Projects />
        <Footer />
      </>
    );

}

export default Portfolio;
```

#### Création de la page Contact

On utilise handleFormSubmit pour stocker les données soumises avec le formulaire  sous forme de json dans le localStorage

```jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact/FormContact';

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const jsonData = JSON.stringify(formData);
    console.log('Données du formulaire (JSON) :', jsonData);
    localStorage.setItem('formData', jsonData);
  };

  return (
    <>
      <Navigation />
      <section className="contact">
        <ContactForm onSubmit={handleFormSubmit} />
      </section>
      <Footer />
    </>
  );
};

export default Contact;

```

#### Création de la page NotFound

On crée la page notfound qui servira de destination lorsque l'url ne correspond à aucune de nos pages.

```jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className="notfound">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please, return to site homepage.</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
```

---

### Mise en place d'un router

#### Installation de React-Router

Pour ce projet nous avons besoins de react-router pour pouvor naviger entre les pages.

```bash
npm install react-router-dom
```

Et ensuite nous l'importons dans le fichier main.jsx ainsi que toutes les page de notre application ainsi que du fichier de style.

createBrowserRouter crée un routeur avec des configurations spécifiques pour chaque chemin (path) et l'élément correspondant à rendre (element).
Chaque objet dans le tableau représente une route différente avec la page qui lui est associée.

ReactDOM.createRoot(document.getElementById('root')).render() initialise le rendu de l'application React.

Le composant RouterProvider de React Router est utilisé pour fournir le routeur (router) configuré précédemment à l'application.

<React.StrictMode> est une fonctionnalité de React qui aide à détecter les problèmes potentiels dans le code

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Competances from './pages/Compétences.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import './styles/index.css';
```

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
  }
  ,
  {
    path: '/Compétences',
    element: <Competances />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/*',
    element : <NotFound />
  }
 ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
```

---

### Mise en place des media querries

Les Media Queries sont une fonctionnalité de CSS permettant de définir les règles de style en fonction de certaines caractéristiques du média sur lequel une page est rendue. Elles permettent d'appliquer des styles conditionnels en fonction de critères tels que la largeur de l'écran, l'orientation de l'appareil, la résolution d'affichage, etc.

Ici on changeras le style de la page en fonction de la largeur de l'écran.

Pour les écrans de taille standard, on réduit la taille des polices, de la photo et on réorganise la position du contenu de la page en ligne.
Il faut repréciser car sinon on garde la disposition des appareils mobile lorsqu'on alterne la taille de l'écran.

```css
@media screen and (min-width: 768px) {
    :root {
      font-size: 16px;
    }
  
    html,
    body,
    #root {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    header {
      font-size: 22px;
    }
  
    .navbar {
      font-size: 20px;
    }

    .resume {
      flex-direction: row;
  du résumé */
      font-size: 22px;
    }
  
    .profile {
      display: flex;
      width: 40%;
      justify-content: center;
      align-self: center;
    }
  
    .resume-présentation {
      width: 80%;
      font-size: 18px;
    }
}
}
```

et pour les écrans mobile on réduit encore la taille des polices, de la photo et on réorganise la position du contenu de la page en colonne.

``` css
@media screen and (max-width: 767px) {
    :root {
    font-size: 14px;
  }

    html,
    body,
    #root {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }

  header {
    font-size: 20px;
  }

  .navbar {
    font-size: 18px;
  }

  .resume {
    flex-direction: column;

    font-size: 20px;
  }

  .profile {
    display: flex;
    width: 80%;
    justify-content: center;
      align-self: center;
  }

  .resume-présentation {
    width: 70%;
    font-size: 16px;
  }
}


```
