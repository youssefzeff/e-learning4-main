// src/pages/VirtualClassesPage.js
import React from 'react';
import './VirtualClassesPage.css';
import VirtualClassCard from '../components/VirtualClassCard';

const virtualClasses = [
  {
    id: 1,
    title: "React Live Workshop",
    date: "2025-06-01",
    time: "15:00",
    duration: "2h",
    instructor: "Alice Dupont",
    instructorImage: "https://via.placeholder.com/50",
    platform: "Zoom",
    link: "#",
    description: "Dive into React Hooks, Context API and advanced state management techniques.",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Cybersecurity Q&A",
    date: "2025-05-12",
    time: "10:00",
    duration: "1.5h",
    instructor: "Dr. Ben Ali",
    instructorImage: "https://via.placeholder.com/50",
    platform: "Google Meet",
    link: "#",
    description: "Live discussion on securing web applications and ethical hacking practices.",
    status: "Ended",
  },
  {
    id: 3,
    title: "Machine Learning Intro",
    date: "2025-05-15",
    time: "13:00",
    duration: "2h",
    instructor: "Sara Martin",
    instructorImage: "https://via.placeholder.com/50",
    platform: "Microsoft Teams",
    link: "#",
    description: "Explore basic concepts of ML, supervised and unsupervised learning.",
    status: "Live",
  },
];

function VirtualClassesPage() {
  return (
    <div className="virtual-classes-page">
      <h2>Virtual Classes</h2>
      <div className="virtual-classes-grid">
        {virtualClasses.map(vc => (
          <VirtualClassCard key={vc.id} vc={vc} />
        ))}
      </div>
    </div>
  );
}

export default VirtualClassesPage;
