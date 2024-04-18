import React from 'react';

function DeleteButton({ onDelete }) {
  const handleDelete = () => {

    onDelete();
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteButton;