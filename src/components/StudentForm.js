import React, { useState, useEffect } from 'react';

function StudentForm({ student, teachers, onUpdateStudent, onCancel }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [teacherId, setTeacherId] = useState('');

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setGrade(student.grade);
      setTeacherId(student.teacherId);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = {
      name,
      age,
      grade,
      teacherId
    };
    onUpdateStudent(updatedStudent);
  };

  return (
    <div className="card w-50 mx-auto">
      <div className="card-header">Edit Student</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Grade</label>
            <input
              type="text"
              className="form-control"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Teacher</label>
            <select
              className="form-control"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
            >
              <option value="">-- Select Teacher --</option>
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Update
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
