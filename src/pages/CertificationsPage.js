import React, { useState } from 'react';
import './CertificationsPage.css';

const certifications = [
  {
    id: 1,
    titre: "Développement Web",
    organisme: "Université Sesame",
    description: "Formation complète en HTML, CSS, JavaScript et React.js.",
    image: "/dev_web_sesame.jpeg",
  },
  {
    id: 2,
    titre: "Cybersécurité",
    organisme: "OpenClassrooms",
    description: "Principes de sécurité réseau, cryptographie, et normes ISO.",
    image: "/cyber-openclassrooms.png",
  },
  {
    id: 3,
    titre: "Machine Learning",
    organisme: "Coursera - Stanford",
    description: "Apprentissage supervisé, non supervisé et deep learning.",
    image: "/ml_coursera.png",
  }
];

function CertificationsPage() {
  const [certifActive, setCertifActive] = useState(null);

  const consulter = (certif) => {
    setCertifActive(certif);
  };

  const fermer = () => {
    setCertifActive(null);
  };

  return (
    <div className="App">
      <h2 className="title">Certifications Disponibles</h2>
      <div className="certifications-container">
        {certifications.map(certif => (
          <div className="certification-card" key={certif.id}>
            <img src={certif.image} alt={certif.titre} className="certification-image" />
            <h3>{certif.titre}</h3>
            <p><strong>Organisme :</strong> {certif.organisme}</p>
            <button onClick={() => consulter(certif)}>Consulter les détails</button>
          </div>
        ))}
      </div>

      {certifActive && (
        <div className="modal">
          <div className="modal-content">
            <h3>{certifActive.titre}</h3>
            <p><strong>Organisme :</strong> {certifActive.organisme}</p>
            <p>{certifActive.description}</p>
            <button onClick={fermer}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificationsPage;
