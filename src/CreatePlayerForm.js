import React, { useState } from 'react';

function CreatePlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPlayer = {
      name: name,
      breed: breed,
      
    };
    console.log("New Player:", newPlayer);
    
    setName('');
    setBreed('');
    
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        {}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePlayerForm;