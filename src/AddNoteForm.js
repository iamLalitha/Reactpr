import React, { useState } from 'react';

const AddNoteForm = ({ addNote }) => {
  const [content, setContent] = useState('');
  const [important, setImportant] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImportantChange = () => {
    setImportant(!important);
  };

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    addNote({
      id: Date.now(),
      content,
      important,
    });
    setContent('');
    setImportant(false);
  };

  return (
    <form onSubmit={handleNoteSubmit}>
      <input
        type="text"
        placeholder="Enter note content"
        value={content}
        onChange={handleContentChange}
      />
      <input
        type="checkbox"
        checked={important}
        onChange={handleImportantChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
