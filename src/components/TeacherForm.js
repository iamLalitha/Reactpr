import React, { useState, useEffect } from 'react';

function TeacherForm({ teacher, students, onUpdateTeacher, onCancel }) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    if (teacher) {
      setName(teacher.name);
      setSubject(teacher.subject);
    }
  }, [teacher]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTeacher = {
      name,
      subject
    };
    onUpdateTeacher(updatedTeacher);
  };

  return (
    <div className="card w-50 mx-auto">
      <div className="card-header">Edit Teacher</div>
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
            <label>Subject</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
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

export default TeacherForm;
