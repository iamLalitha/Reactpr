import React, { useState } from 'react';
import StudentTable from './StudentTable';
import TeacherTable from './TeacherTable';
import 'bootstrap/dist/css/bootstrap.css';
function Dashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  //adding a view state 
  const [view, setView] = useState('student'); 
  

  return (
  <div className="card text-center">
    <h1 className="text-center mb-4 card-header" >Student Teacher Dashboard</h1>
    
    
    <div className="d-flex justify-content-center mb-4 card-body">
     <button
        className={`btn btn-${view === 'teacher' ? 'primary' : 'secondary'}`}
        onClick={() => setView('teacher')}
      >
        Teacher
      </button>

      <button
        className={`btn btn-${view === 'student' ? 'primary' : 'secondary'} mr-2`}
        onClick={() => setView('student')}
      >
        Student
      </button>
    </div>
    <div className='card-body'>
    {view === 'teacher' && (
      <div>
        <h2 className="text-center mb-3">Teacher details</h2>
        <TeacherTable teachers={teachers} setTeachers={setTeachers} students={students} />
      </div>
    )}

    {view === 'student' && (
      <div>
        <h2 className="text-center mb-3">Student details</h2>
        <StudentTable students={students} setStudents={setStudents} teachers={teachers} />
      </div>
    )}
    
    </div> 
</div>



);
}

export default Dashboard;