import React, { useState } from 'react';

const Crud = ({ showNotification }) => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Math', marks: 95 },
    { id: 2, name: 'Science', marks: 88 },
  ]);
  const [courseName, setCourseName] = useState('');
  const [courseMarks, setCourseMarks] = useState('');

  const addCourse = () => {
    if (courseName && courseMarks) {
      const newCourse = { id: Date.now(), name: courseName, marks: courseMarks };
      setCourses([...courses, newCourse]);
      setCourseName('');
      setCourseMarks('');
      showNotification('Course added successfully!');
    } else {
      showNotification('Please fill in all fields!');
    }
  };

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
    showNotification('Course deleted!');
  };

  return (
    <div className="crud-container">
      <h2>Manage Courses</h2>
      <div className="add-course">
        <input
          type="text"
          value={courseName}
          placeholder="Course Name"
          onChange={(e) => setCourseName(e.target.value)}
        />
        <input
          type="number"
          value={courseMarks}
          placeholder="Marks"
          onChange={(e) => setCourseMarks(e.target.value)}
        />
        <button onClick={addCourse}>Add Course</button>
      </div>

      <div className="course-list">
        <h3>Course List</h3>
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <span>{course.name}</span> - <span>{course.marks}</span>
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
