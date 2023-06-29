import React, { useState } from 'react';

function StudentTable({ students, setStudents, teachers }) {
  const [newStudent, setNewStudent] = useState({
    name: '',
    class: '',
    assignedTeacher: '',
  });
  //setting the state
  const [editedStudent, setEditedStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);
//inputchange func
  const handleInputChange = (e) => {
    if (editMode && editedStudent) {
      setEditedStudent({ ...editedStudent, [e.target.name]: e.target.value });
    } else {
      setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    }
  };
//addstudent func
  const handleAddStudent = () => {
    if (editMode && editedStudent) {
      const updatedStudents = students.map((student, index) => {
        if (index === editedStudent.index) {
          return editedStudent;
        }
        return student;
      });
      setStudents(updatedStudents);
      setEditedStudent(null);
      setEditMode(false);
    } else if (newStudent.name && newStudent.class && newStudent.assignedTeacher) {
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      setNewStudent({
        name: '',
        class: '',
        assignedTeacher: '',
      });
    }
  };
//delete func
  const handleDelete = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };
//handledit func
  const handleEdit = (index) => {
    const studentToEdit = students[index];
    setEditedStudent({ index, ...studentToEdit });
    setEditMode(true);
  };

  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Assigned Teacher</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.assignedTeacher}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add Student</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={editMode ? editedStudent.name : newStudent.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Class"
        name="class"
        value={editMode ? editedStudent.class : newStudent.class}
        onChange={handleInputChange}
      />
      <select
        name="assignedTeacher"
        value={editMode ? editedStudent.assignedTeacher : newStudent.assignedTeacher}
        onChange={handleInputChange}
      >
        <option value="">Select Teacher</option>
        {teachers.map((teacher, index) => (
          <option key={index} value={teacher.name}>
            {teacher.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddStudent}>
        {editMode ? 'Update Student' : 'Add Student'}
      </button>
    </div>
  );
}

export default StudentTable;

