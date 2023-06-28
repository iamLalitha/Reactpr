import React, { useState } from 'react';
import StudentTable from './StudentTable';
import TeacherTable from './TeacherTable';

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  //adding a view state 
  const [view, setView] = useState('student'); 
  

  return (
    <div>
      <h1>Student Teacher Dashboard</h1>
      <div>
        <button onClick={() => setView('student')}>Student</button>
        <button onClick={() => setView('teacher')}>Teacher</button>
      </div>
      {view === 'student' && (
        <StudentTable students={students} setStudents={setStudents} teachers={teachers} />
      )}
      {view === 'teacher' && (
        <TeacherTable teachers={teachers} setTeachers={setTeachers} students={students} />
      )}
    </div>
  );
}

export default Dashboard;


