import React, { useState } from 'react';

function StudentTable({ students, setStudents, teachers }) {
  const [newStudent, setNewStudent] = useState({
    name: '',
    class: '',
    assignedTeacher: '',
  });

  //handleinput change func
  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  //handleaddstudent func
  const handleAddStudent = () => {
    if (newStudent.name && newStudent.class && newStudent.assignedTeacher) {
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      setNewStudent({
        name: '',
        class: '',
        assignedTeacher: '',
      });
    }
  };

  return (
    <div>
      {/* <h2>Student Details</h2> */}
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Assigned Teacher</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.assignedTeacher}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add Student</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newStudent.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Class"
        name="class"
        value={newStudent.class}
        onChange={handleInputChange}
      />
      <select
        name="assignedTeacher"
        value={newStudent.assignedTeacher}
        onChange={handleInputChange}
      >
        
        <option value="">Select Teacher</option>
        {teachers.map((teacher, index) => (
          <option key={index} value={teacher.name}>
            {teacher.name}
          </option>
       
        ))}
       
        
      </select>
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default StudentTable;
