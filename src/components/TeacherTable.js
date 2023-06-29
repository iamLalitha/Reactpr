import React, { useState } from 'react';

function TeacherTable({ teachers, setTeachers }) {
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
  });
  //setting the state 
  const [editedTeacher, setEditedTeacher] = useState(null);
  const [editMode, setEditMode] = useState(false);
//handleinput func
  const handleInputChange = (e) => {
    if (editMode && editedTeacher) {
      setEditedTeacher({ ...editedTeacher, [e.target.name]: e.target.value });
    } else {
      setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
    }
  };
//handleaddteacher func
  const handleAddTeacher = () => {
    if (editMode && editedTeacher) {
      const updatedTeachers = teachers.map((teacher, index) => {
        if (index === editedTeacher.index) {
          return editedTeacher;
        }
        return teacher;
      });
      setTeachers(updatedTeachers);
      setEditedTeacher(null);
      setEditMode(false);
    } else if (newTeacher.name && newTeacher.subject) {
      const updatedTeachers = [...teachers, newTeacher];
      setTeachers(updatedTeachers);
      setNewTeacher({
        name: '',
        subject: '',
      });
    }
  };
//handle delete func
  const handleDelete = (index) => {
    const updatedTeachers = [...teachers];
    updatedTeachers.splice(index, 1);
    setTeachers(updatedTeachers);
  };
//handleedit func
  const handleEdit = (index) => {
    const teacherToEdit = teachers[index];
    setEditedTeacher({ index, ...teacherToEdit });
    setEditMode(true);
  };

  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
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

      <h3>Add Teacher</h3>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={editMode ? editedTeacher.name : newTeacher.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        value={editMode ? editedTeacher.subject : newTeacher.subject}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTeacher}>
        {editMode ? 'Update Teacher' : 'Add Teacher'}
      </button>
    </div>
  );
}

export default TeacherTable;

