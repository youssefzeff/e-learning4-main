// src/pages/SupportPage.js
import React from 'react';
import './SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-page">
      <h1>Support & Aide</h1>
      <p>Bienvenue sur notre centre d'aide. Si vous avez des questions ou besoin d'assistance, n'hésitez pas à nous contacter.</p>
      
      <div className="support-contact">
        <h3>Contactez-nous :</h3>
        <p>Email : support@plateforme-elearning.com</p>
        <p>Téléphone : +216 12 345 678</p>
      </div>

      <div className="support-form">
        <h3>Envoyez-nous un message :</h3>
        <form>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Décrivez votre problème..." required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
