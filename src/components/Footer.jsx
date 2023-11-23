import React from 'react';

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
