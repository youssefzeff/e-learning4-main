import React, { useState } from 'react';
import '../App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    status: '',
    school: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const addUser = () => {
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.status &&
      newUser.school &&
      newUser.email &&
      newUser.password
    ) {
      setUsers([...users, newUser]);
      setNewUser({ firstName: '', lastName: '', status: '', school: '', email: '', password: '' });
      setMessage('Utilisateur ajouté avec succès !');
    } else {
      setMessage('Veuillez remplir tous les champs.');
    }
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setMessage('Utilisateur supprimé.');
  };

  return (
    <div className="App">
      <h1 className="title">Gestion des Utilisateurs - E-Learning</h1>

      <div className="form-container">
        <h2>Ajouter un utilisateur</h2>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={newUser.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={newUser.lastName}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newUser.status}
          onChange={handleInputChange}
        >
          <option value="">Statut</option>
          <option value="élève">Élève</option>
          <option value="enseignant">Enseignant</option>
        </select>
        <input
          type="text"
          name="school"
          placeholder="Établissement scolaire"
          value={newUser.school}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <button type="submit" className="add-btn"onClick={addUser}>Ajouter</button>
        {message && <p className="message">{message}</p>}
      </div>

      <div className="user-list">
        <h2>Liste des utilisateurs</h2>
        {users.length === 0 ? (
          <p>Aucun utilisateur inscrit.</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.firstName} {user.lastName} ({user.status}) - {user.school} ({user.email}) 
                <button className="btn delete-btn" onClick={() => handleDelete(index)}>Supprimer</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
