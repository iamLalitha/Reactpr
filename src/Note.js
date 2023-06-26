import React, { useState } from 'react';

const Note = ({ note, deleteNote, updateNote }) => {
  const [content, setContent] = useState(note.content);
  const [important, setImportant] = useState(note.important);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImportantChange = () => {
    setImportant(!important);
  };

  const handleNoteUpdate = () => {
    updateNote(note.id, { ...note, content, important });
  };

  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={handleContentChange}
      />
      <input
        type="checkbox"
        checked={important}
        onChange={handleImportantChange}
      />
      <button onClick={() => deleteNote(note.id)}>Delete</button>
      <button onClick={handleNoteUpdate}>Update</button>
    </div>
  );
};

export default Note;
