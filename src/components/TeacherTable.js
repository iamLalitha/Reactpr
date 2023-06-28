import React, { useState } from 'react';

function TeacherTable({ teachers, setTeachers, students }) {
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
  });
//inputchange func
  const handleInputChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };
//addteacher func
  const handleAddTeacher = () => {
    if (newTeacher.name && newTeacher.subject) {
      const updatedTeachers = [...teachers, newTeacher];
      setTeachers(updatedTeachers);
      setNewTeacher({
        name: '',
        subject: '',
      });
    }
  };

  return (
    <div>
      {/* <h2 >Teacher details</h2> */}
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add Teacher</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newTeacher.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={newTeacher.subject}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTeacher}>Add Teacher</button>
    </div>
  );
}

export default TeacherTable;
