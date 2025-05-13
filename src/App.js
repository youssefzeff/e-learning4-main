import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import SupportPage from './pages/SupportPage';
import CertificationsPage from './pages/CertificationsPage';
import Quiz from './components/quiz';  
import Crud from './components/crud';
import Price from './components/price';
import Payment from './components/payment';
import Courses from './components/courses';
import ClassesPage from './pages/ClassesPage';
import StudentProgressPage from './pages/StudentProgressPage';
import VirtualClassesPage from './pages/VirtualClassesPage';

function App() {
  // Define the showNotification function
  const showNotification = (message) => {
    alert(message);  // You can replace this with a notification system if needed
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/price/:courseId" element={<Price />} />
        <Route path="/crud" element={<Crud showNotification={showNotification} />} />  
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/student-progress" element={<StudentProgressPage />} />
        <Route path="/virtual-classes" element={<VirtualClassesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
