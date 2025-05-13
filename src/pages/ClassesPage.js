import React, { useState } from 'react';
import ClassCard from '../components/ClassCard';
import './ClassesPage.css';

function ClassesPage() {
  const [classes, setClasses] = useState([
    { id: 1, title: "React Basics", description: "Introduction to React and components." },
    { id: 2, title: "Advanced JS", description: "Closures, scopes, async/await." },
    { id: 3, title: "Python 101", description: "Basics of Python programming." },
    { id: 4, title: "HTML & CSS", description: "Building structured and styled pages." },
    { id: 5, title: "Databases", description: "Intro to SQL and NoSQL databases." },
  ]);

  const [newClass, setNewClass] = useState({ title: '', description: '' });
  const [selectedClass, setSelectedClass] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleAdd = () => {
    if (!newClass.title || !newClass.description) return alert("Please fill in all fields.");

    const newEntry = {
      id: Date.now(),
      title: newClass.title,
      description: newClass.description
    };

    setClasses([...classes, newEntry]);
    setNewClass({ title: '', description: '' });
  };

  const handleDelete = (id) => {
    setClasses(classes.filter(c => c.id !== id));
  };

  const handleCardClick = (classItem) => {
    setSelectedClass(classItem);
  };

  const closeModal = () => setSelectedClass(null);

  return (
    <div className="classes-container">
      <h2 className="title">Gestion des Cours</h2>

      <div className="classes-card">
        <div className="add-form">
          <input
            type="text"
            name="title"
            placeholder="Titre du cours"
            value={newClass.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newClass.description}
            onChange={handleChange}
          ></textarea>
          <button className="add-btn" onClick={handleAdd}>Ajouter</button>
        </div>

        <div className="classes-grid">
          {classes.map((c) => (
            <ClassCard
              key={c.id}
              classItem={c}
              onDelete={handleDelete}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {selectedClass && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedClass.title}</h3>
            <p>{selectedClass.description}</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassesPage;
