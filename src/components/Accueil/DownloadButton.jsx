import React from 'react';
import CV from '../../../public/media/CV.pdf'; 

const DownloadButton = () => {
  const downloadFile = () => {
    // Création d'un objet Blob à partir du fichier PDF
    fetch(CV)
      .then((response) => response.blob())
      .then((blob) => {
        // Création d'une URL pour le Blob
        const fileURL = URL.createObjectURL(blob);

        // Création d'un élément <a> pour simuler le téléchargement du fichier
        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.setAttribute('download', 'Johan_Yindou.pdf');
        document.body.appendChild(downloadLink);

        // Clic sur le lien pour démarrer le téléchargement
        downloadLink.click();

        // Nettoyage après le téléchargement
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

export default DownloadButton;
