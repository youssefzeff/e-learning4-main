import React, { useState } from 'react';
import './StudentProgressPage.css'; // Keep using the same styles

const studentProgressData = [
  {
    id: 1,
    name: "John Doe",
    course: "Développement Web",
    progress: 75,
    grade: "B+",
    lastAccessed: "2025-04-20",
    progressHistory: [
      { date: "2025-04-10", progress: 70 },
      { date: "2025-04-15", progress: 75 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    course: "Machine Learning",
    progress: 55,
    grade: "C",
    lastAccessed: "2025-04-18",
    progressHistory: [
      { date: "2025-04-05", progress: 50 },
      { date: "2025-04-10", progress: 55 },
    ],
  },
  {
    id: 3,
    name: "Alex Brown",
    course: "Cybersécurité",
    progress: 90,
    grade: "A",
    lastAccessed: "2025-04-22",
    progressHistory: [
      { date: "2025-04-01", progress: 85 },
      { date: "2025-04-10", progress: 90 },
    ],
  },
];

function StudentProgressPage() {
  const [studentDetails, setStudentDetails] = useState(null);

  const viewDetails = (student) => {
    setStudentDetails(student);
  };

  const closeDetails = () => {
    setStudentDetails(null);
  };

  return (
    <div className="student-progress-page">
      <h2>Gestion des Progrès des Étudiants</h2>

      <div className="student-progress-container">
        {studentProgressData.map(student => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>
            <p><strong>Course:</strong> {student.course}</p>
            <p><strong>Progress:</strong> {student.progress}%</p>
            <button onClick={() => viewDetails(student)}>Voir les détails</button>
          </div>
        ))}
      </div>

      {studentDetails && (
        <div className="modal">
          <div className="modal-content">
            <h3>Détails de {studentDetails.name}</h3>
            <p><strong>Course:</strong> {studentDetails.course}</p>
            <p><strong>Progress:</strong> {studentDetails.progress}%</p>
            <p><strong>Grade:</strong> {studentDetails.grade}</p>
            <p><strong>Last Accessed:</strong> {studentDetails.lastAccessed}</p>
            <h4>Progress History</h4>
            <ul>
              {studentDetails.progressHistory.map((entry, index) => (
                <li key={index}>
                  <strong>{entry.date}:</strong> {entry.progress}%
                </li>
              ))}
            </ul>
            <button onClick={closeDetails}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentProgressPage;
